"use client";

import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Leaflet (issue with Webpack)
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina.src,
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
});

// Custom markers
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${color};
        border: 2px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const originIcon = createCustomIcon("#22C55E"); // Green
const destinationIcon = createCustomIcon("#EF4444"); // Red

// Strasbourg center as default
const defaultCenter: [number, number] = [48.5734, 7.7521];
const defaultZoom = 12;

interface RouteMapProps {
  origin?: {
    adresse: string;
    lat?: number;
    lng?: number;
  };
  destination?: {
    adresse: string;
    lat?: number;
    lng?: number;
  };
  route?: Array<[number, number]>; // Polyline coordinates [[lat, lng], ...]
  className?: string;
}

// Component to fit bounds when route changes
function FitBounds({
  origin,
  destination,
  route
}: {
  origin?: { lat?: number; lng?: number };
  destination?: { lat?: number; lng?: number };
  route?: Array<[number, number]>;
}) {
  const map = useMap();

  useEffect(() => {
    if (route && route.length > 0) {
      // Fit to route
      const bounds = L.latLngBounds(route);
      map.fitBounds(bounds, { padding: [40, 40] });
    } else if (origin?.lat && origin?.lng && destination?.lat && destination?.lng) {
      // Fit to origin and destination
      const bounds = L.latLngBounds([
        [origin.lat, origin.lng],
        [destination.lat, destination.lng],
      ]);
      map.fitBounds(bounds, { padding: [40, 40] });
    } else if (origin?.lat && origin?.lng) {
      // Center on origin
      map.setView([origin.lat, origin.lng], 13);
    } else if (destination?.lat && destination?.lng) {
      // Center on destination
      map.setView([destination.lat, destination.lng], 13);
    }
  }, [map, origin?.lat, origin?.lng, destination?.lat, destination?.lng, route]);

  return null;
}

export function LeafletMap({ origin, destination, route, className }: RouteMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  // Calculate center and markers
  const originPosition: [number, number] | null = useMemo(() => {
    return origin?.lat && origin?.lng ? [origin.lat, origin.lng] : null;
  }, [origin?.lat, origin?.lng]);

  const destinationPosition: [number, number] | null = useMemo(() => {
    return destination?.lat && destination?.lng ? [destination.lat, destination.lng] : null;
  }, [destination?.lat, destination?.lng]);

  // Determine map center
  const mapCenter: [number, number] = useMemo(() => {
    if (originPosition && destinationPosition) {
      return [
        (originPosition[0] + destinationPosition[0]) / 2,
        (originPosition[1] + destinationPosition[1]) / 2,
      ];
    } else if (originPosition) {
      return originPosition;
    } else if (destinationPosition) {
      return destinationPosition;
    }
    return defaultCenter;
  }, [originPosition, destinationPosition]);

  return (
    <div className={className}>
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-gold-400/30">
        <MapContainer
          center={mapCenter}
          zoom={defaultZoom}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          zoomControl={true}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Fit bounds component */}
          <FitBounds origin={origin} destination={destination} route={route} />

          {/* Origin marker (green) */}
          {originPosition && (
            <Marker position={originPosition} icon={originIcon} title="Départ" />
          )}

          {/* Destination marker (red) */}
          {destinationPosition && (
            <Marker position={destinationPosition} icon={destinationIcon} title="Arrivée" />
          )}

          {/* Route polyline (bordeaux color) */}
          {route && route.length > 0 && (
            <Polyline
              positions={route}
              pathOptions={{
                color: "#7A3345",
                weight: 4,
                opacity: 0.9,
              }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
