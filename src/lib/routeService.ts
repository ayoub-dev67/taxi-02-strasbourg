/**
 * Service de calcul d'itinéraire avec OSRM (Open Source Routing Machine)
 * Remplace Google Directions API
 */

export interface RouteResult {
  distanceKm: number;
  durationMinutes: number;
  geometry: Array<[number, number]>; // [[lat, lng], ...]
  summary: string;
}

/**
 * Calcule un itinéraire entre deux points avec OSRM
 * @param originLat Latitude du départ
 * @param originLng Longitude du départ
 * @param destinationLat Latitude de l'arrivée
 * @param destinationLng Longitude de l'arrivée
 * @returns Résultat de l'itinéraire ou null si échec
 */
export async function calculateRoute(
  originLat: number,
  originLng: number,
  destinationLat: number,
  destinationLng: number
): Promise<RouteResult | null> {
  try {
    // OSRM endpoint - free public service
    // Format: /route/v1/{profile}/{coordinates}
    // Profile: driving-car
    // Coordinates: lng,lat;lng,lat (ATTENTION: OSRM utilise lng,lat et non lat,lng)
    const url = `https://router.project-osrm.org/route/v1/driving/${originLng},${originLat};${destinationLng},${destinationLat}?overview=full&geometries=geojson`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("OSRM API error:", response.status, response.statusText);
      return null;
    }

    const data = await response.json();

    if (data.code !== "Ok" || !data.routes || data.routes.length === 0) {
      console.error("OSRM routing failed:", data.code, data.message);
      return null;
    }

    const route = data.routes[0];

    // Extract distance (meters → km)
    const distanceKm = Math.round(route.distance / 100) / 10; // Round to 1 decimal

    // Extract duration (seconds → minutes)
    const durationMinutes = Math.round(route.duration / 60);

    // Extract geometry (GeoJSON LineString coordinates)
    // OSRM returns [lng, lat], we need to convert to [lat, lng] for Leaflet
    const geometry: Array<[number, number]> = route.geometry.coordinates.map(
      (coord: [number, number]) => [coord[1], coord[0]] // Invert [lng, lat] → [lat, lng]
    );

    // Format summary
    const summary = formatDuration(durationMinutes);

    return {
      distanceKm,
      durationMinutes,
      geometry,
      summary,
    };
  } catch (error) {
    console.error("Error calling OSRM API:", error);
    return null;
  }
}

/**
 * Calcule la distance à vol d'oiseau (Haversine) comme fallback
 * Utilisé si OSRM n'est pas disponible
 */
export function calculateHaversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Rayon de la Terre en km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance * 10) / 10;
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Formate une durée en minutes
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
}

/**
 * Calcule un itinéraire avec fallback automatique
 * Essaie OSRM, sinon fallback sur Haversine
 */
export async function calculateRouteWithFallback(
  originLat: number,
  originLng: number,
  destinationLat: number,
  destinationLng: number
): Promise<RouteResult> {
  // Essayer OSRM d'abord
  const osrmResult = await calculateRoute(originLat, originLng, destinationLat, destinationLng);

  if (osrmResult) {
    return osrmResult;
  }

  // Fallback: Haversine (vol d'oiseau × 1.3 pour estimer distance route)
  console.warn("OSRM unavailable, using Haversine fallback");
  const haversineKm = calculateHaversineDistance(originLat, originLng, destinationLat, destinationLng);
  const routeKm = Math.round(haversineKm * 1.3 * 10) / 10;

  // Estimation durée: ~2 min/km en ville, ~1 min/km sur route
  const avgSpeedFactor = routeKm > 50 ? 1.0 : 2.0;
  const estimatedDuration = Math.round(routeKm * avgSpeedFactor);

  // Ligne droite pour la géométrie (pas de vraie route)
  const geometry: Array<[number, number]> = [
    [originLat, originLng],
    [destinationLat, destinationLng],
  ];

  return {
    distanceKm: routeKm,
    durationMinutes: estimatedDuration,
    geometry,
    summary: formatDuration(estimatedDuration),
  };
}
