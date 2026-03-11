"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { MapPin, LocateFixed, Loader2, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddressData {
  adresse: string;
  lat?: number;
  lng?: number;
  placeId?: string;
}

interface AddressAutocompleteOSMProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (data: AddressData) => void;
  iconColor?: "gold" | "green";
  error?: string;
  showGeolocation?: boolean;
}

interface AddressSuggestion {
  label: string;
  lat: number;
  lng: number;
  city: string;
  postcode: string;
  context: string;
  source: "fr" | "international";
  country?: string;
}

const COUNTRY_FLAGS: Record<string, string> = {
  "Allemagne": "DE",
  "Deutschland": "DE",
  "Germany": "DE",
  "Suisse": "CH",
  "Schweiz": "CH",
  "Switzerland": "CH",
  "Belgique": "BE",
  "België": "BE",
  "Belgium": "BE",
  "Luxembourg": "LU",
  "Luxemburg": "LU",
};

function getCountryCode(country: string): string {
  return COUNTRY_FLAGS[country] || "";
}

export function AddressAutocompleteOSM({
  id,
  label,
  placeholder,
  value,
  onChange,
  iconColor = "gold",
  error,
  showGeolocation = false,
}: AddressAutocompleteOSMProps) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const frTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const intlTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frResultsRef = useRef<AddressSuggestion[]>([]);
  const intlResultsRef = useRef<AddressSuggestion[]>([]);

  // Sync inputValue with value prop
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Merge French + International results, deduplicated
  const mergeResults = useCallback(() => {
    const fr = frResultsRef.current;
    const intl = intlResultsRef.current;

    // Deduplicate: remove international results too close to a French result
    const deduped = intl.filter((intlItem) => {
      return !fr.some((frItem) => {
        const latDiff = Math.abs(frItem.lat - intlItem.lat);
        const lngDiff = Math.abs(frItem.lng - intlItem.lng);
        return latDiff < 0.001 && lngDiff < 0.001; // ~100m
      });
    });

    const merged = [...fr, ...deduped];
    setSuggestions(merged);
    if (merged.length > 0) {
      setShowSuggestions(true);
    }
  }, []);

  // Fetch French suggestions from API Adresse data.gouv.fr
  const fetchFrenchSuggestions = useCallback(async (query: string) => {
    try {
      const url = new URL("https://api-adresse.data.gouv.fr/search/");
      url.searchParams.set("q", query);
      url.searchParams.set("limit", "5");
      url.searchParams.set("type", "housenumber");

      const response = await fetch(url.toString());
      const data = await response.json();

      let results: AddressSuggestion[] = [];

      if (data.features && data.features.length > 0) {
        results = data.features.map((feature: any) => ({
          label: feature.properties.label,
          lat: feature.geometry.coordinates[1],
          lng: feature.geometry.coordinates[0],
          city: feature.properties.city || "",
          postcode: feature.properties.postcode || "",
          context: feature.properties.context || "",
          source: "fr" as const,
        }));
      } else {
        // Fallback: essayer avec type=street
        url.searchParams.set("type", "street");
        const fallbackResponse = await fetch(url.toString());
        const fallbackData = await fallbackResponse.json();

        if (fallbackData.features && fallbackData.features.length > 0) {
          results = fallbackData.features.map((feature: any) => ({
            label: feature.properties.label,
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0],
            city: feature.properties.city || "",
            postcode: feature.properties.postcode || "",
            context: feature.properties.context || "",
            source: "fr" as const,
          }));
        }
      }

      frResultsRef.current = results;
      mergeResults();
    } catch (error) {
      console.error("Error fetching French suggestions:", error);
      frResultsRef.current = [];
      mergeResults();
    }
  }, [mergeResults]);

  // Fetch international suggestions via API proxy (Nominatim DE/CH/BE/LU)
  const fetchInternationalSuggestions = useCallback(async (query: string) => {
    try {
      // Utilise notre API proxy pour éviter CORS et envoyer le User-Agent
      const response = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const results: AddressSuggestion[] = data.map((item: any) => {
          const country = item.address?.country || "";
          const countryCode = getCountryCode(country);
          // Build a cleaner label
          const displayName = item.display_name || "";
          const parts = displayName.split(", ");
          // Keep max 3-4 meaningful parts + country
          const cleanLabel = parts.length > 4
            ? parts.slice(0, 3).join(", ")
            : parts.slice(0, -1).join(", "); // Remove last part (usually country)

          return {
            label: cleanLabel || displayName,
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lon),
            city: item.address?.city || item.address?.town || item.address?.village || "",
            postcode: item.address?.postcode || "",
            context: country,
            source: "international" as const,
            country: countryCode ? `${country} (${countryCode})` : country,
          };
        });

        intlResultsRef.current = results;
      } else {
        intlResultsRef.current = [];
      }

      mergeResults();
    } catch (error) {
      console.error("Error fetching international suggestions:", error);
      intlResultsRef.current = [];
      mergeResults();
    }
  }, [mergeResults]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setHighlightedIndex(-1);

    // Update only the address text when typing
    onChange({ adresse: newValue });

    // Clear previous timeouts
    if (frTimeoutRef.current) clearTimeout(frTimeoutRef.current);
    if (intlTimeoutRef.current) clearTimeout(intlTimeoutRef.current);

    if (newValue.length < 3) {
      setSuggestions([]);
      frResultsRef.current = [];
      intlResultsRef.current = [];
      setShowSuggestions(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    // French results: 300ms debounce
    frTimeoutRef.current = setTimeout(() => {
      fetchFrenchSuggestions(newValue);
    }, 300);

    // International results: 1000ms debounce (respect Nominatim rate limit)
    intlTimeoutRef.current = setTimeout(() => {
      fetchInternationalSuggestions(newValue).finally(() => {
        setIsLoading(false);
      });
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: AddressSuggestion) => {
    const displayLabel = suggestion.source === "international" && suggestion.country
      ? `${suggestion.label}, ${suggestion.country}`
      : suggestion.label;

    setInputValue(displayLabel);
    onChange({
      adresse: displayLabel,
      lat: suggestion.lat,
      lng: suggestion.lng,
      placeId: `${suggestion.lat},${suggestion.lng}`,
    });
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleClear = () => {
    setInputValue("");
    onChange({ adresse: "" });
    setSuggestions([]);
    frResultsRef.current = [];
    intlResultsRef.current = [];
    setShowSuggestions(false);
  };

  const handleGeolocation = async () => {
    if (!navigator.geolocation) {
      return;
    }

    setIsGeolocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Reverse geocoding avec API Adresse data.gouv.fr
        try {
          const url = new URL("https://api-adresse.data.gouv.fr/reverse/");
          url.searchParams.set("lat", latitude.toString());
          url.searchParams.set("lon", longitude.toString());

          const response = await fetch(url.toString());
          const data = await response.json();

          if (data.features && data.features[0]) {
            const feature = data.features[0];
            const addressData: AddressData = {
              adresse: feature.properties.label,
              lat: latitude,
              lng: longitude,
              placeId: `${latitude},${longitude}`,
            };
            setInputValue(feature.properties.label);
            onChange(addressData);
          } else {
            const coordsAddress = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            setInputValue(coordsAddress);
            onChange({
              adresse: coordsAddress,
              lat: latitude,
              lng: longitude,
            });
          }
        } catch {
          const coordsAddress = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setInputValue(coordsAddress);
          onChange({
            adresse: coordsAddress,
            lat: latitude,
            lng: longitude,
          });
        }

        setIsGeolocating(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setIsGeolocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSuggestionClick(suggestions[highlightedIndex]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
    }
  };

  const iconColorClass = iconColor === "green" ? "text-green-400" : "text-gold-400";

  return (
    <div className="space-y-2" ref={wrapperRef}>
      <label htmlFor={id} className="text-foreground flex items-center gap-2 text-sm font-medium">
        <MapPin className={cn("w-4 h-4", iconColorClass)} aria-hidden="true" />
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          autoComplete="off"
          className={cn(
            "w-full bg-surface-50 border rounded-lg px-4 py-3 text-foreground placeholder-gray-500",
            "transition-all duration-300 outline-none min-h-[48px] text-base",
            "focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20",
            error ? "border-red-400" : "border-gold-400/20",
            (showGeolocation || inputValue) && "pr-24"
          )}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Effacer"
              title="Effacer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
          {showGeolocation && (
            <button
              type="button"
              onClick={handleGeolocation}
              disabled={isGeolocating}
              className="text-gold-400 hover:text-gold-300 transition-colors disabled:opacity-50"
              aria-label="Utiliser ma position actuelle"
              title="Utiliser ma position"
            >
              {isGeolocating ? (
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              ) : (
                <LocateFixed className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          )}
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gold-400/30 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => {
              const isFirstIntl = suggestion.source === "international" &&
                (index === 0 || suggestions[index - 1].source === "fr");

              return (
                <div key={`${suggestion.source}-${suggestion.lat}-${suggestion.lng}`}>
                  {/* Separator between French and International results */}
                  {isFirstIntl && frResultsRef.current.length > 0 && (
                    <div className="px-4 py-1.5 bg-gray-50 border-y border-gray-100 flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400 font-medium">International</span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={cn(
                      "w-full text-left px-4 py-3 hover:bg-gold-50 transition-colors border-b border-gray-100 last:border-b-0",
                      highlightedIndex === index && "bg-gold-50"
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        suggestion.source === "international" ? "text-blue-400" : iconColorClass
                      )} />
                      <div className="flex-1 min-w-0">
                        <div className="text-foreground text-sm font-medium truncate">
                          {suggestion.label}
                        </div>
                        <div className="text-gray-500 text-xs truncate">
                          {suggestion.source === "international" && suggestion.country
                            ? suggestion.country
                            : suggestion.context
                          }
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute right-12 top-1/2 -translate-y-1/2">
            <Loader2 className="w-5 h-5 text-gold-400 animate-spin" />
          </div>
        )}
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
