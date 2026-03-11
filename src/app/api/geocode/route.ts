import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Proxy server-side pour Nominatim OpenStreetMap
 * Évite les problèmes CORS et permet d'envoyer le User-Agent requis
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.length < 3) {
    return NextResponse.json([]);
  }

  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", query);
    url.searchParams.set("format", "json");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("limit", "5");
    url.searchParams.set("accept-language", "fr");
    url.searchParams.set("countrycodes", "de,ch,be,lu");
    url.searchParams.set("viewbox", "5.5,47.0,10.5,50.5");
    url.searchParams.set("bounded", "0");

    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent": "Taxi02Strasbourg/1.0 (taxi02strasbourg@gmail.com)",
      },
    });

    if (!response.ok) {
      console.error("Nominatim error:", response.status);
      return NextResponse.json([]);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Geocode proxy error:", error);
    return NextResponse.json([]);
  }
}
