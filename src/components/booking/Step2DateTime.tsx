"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { ReservationData } from "@/types";

interface Step2DateTimeProps {
  data: Partial<ReservationData>;
  updateData: (data: Partial<ReservationData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

export function Step2DateTime({ data, updateData, onNext, onPrev }: Step2DateTimeProps) {
  const [errors, setErrors] = useState<{ date?: string; heure?: string }>({});
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { date?: string; heure?: string } = {};

    if (!data.date) {
      newErrors.date = "La date est requise";
    }
    if (!data.heure) {
      newErrors.heure = "L'heure est requise";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  const quickDates = [
    { label: "Aujourd'hui", date: new Date() },
    { label: "Demain", date: addDays(new Date(), 1) },
    { label: "Dans 2 jours", date: addDays(new Date(), 2) },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Quand avez-vous <span className="text-gold-gradient">besoin de nous</span> ?
        </h2>
        <p className="text-gray-600">
          Sélectionnez la date et l&apos;heure de prise en charge
        </p>
      </div>

      {/* Date */}
      <div className="space-y-3">
        <label className="text-foreground flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-gold-400" />
          Date de prise en charge
        </label>

        {/* Quick dates */}
        <div className="flex gap-2 mb-3">
          {quickDates.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                updateData({ date: item.date });
                setErrors((prev) => ({ ...prev, date: undefined }));
              }}
              className={cn(
                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                data.date &&
                  format(data.date, "yyyy-MM-dd") === format(item.date, "yyyy-MM-dd")
                  ? "bg-gold-400 text-black"
                  : "bg-surface-100 text-gray-700 border border-gold-400/20 hover:border-gold-400/50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Calendar */}
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                "input-premium w-full text-left flex items-center justify-between",
                !data.date && "text-gray-500"
              )}
              aria-label={data.date ? `Date sélectionnée : ${format(data.date, "EEEE d MMMM yyyy", { locale: fr })}` : "Sélectionner une date"}
              aria-expanded={calendarOpen ? "true" : "false"}
              aria-haspopup="dialog"
            >
              {data.date ? (
                format(data.date, "EEEE d MMMM yyyy", { locale: fr })
              ) : (
                "Sélectionner une date"
              )}
              <CalendarIcon className="w-5 h-5 text-gold-400" aria-hidden="true" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-surface-50 border-gold-400/20" align="start">
            <Calendar
              mode="single"
              selected={data.date}
              onSelect={(date) => {
                updateData({ date });
                setCalendarOpen(false);
                setErrors((prev) => ({ ...prev, date: undefined }));
              }}
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              locale={fr}
              className="rounded-lg"
            />
          </PopoverContent>
        </Popover>
        {errors.date && <p className="text-red-400 text-sm">{errors.date}</p>}
      </div>

      {/* Time */}
      <div className="space-y-3">
        <label className="text-foreground flex items-center gap-2">
          <Clock className="w-4 h-4 text-gold-400" />
          Heure de prise en charge
        </label>

        <div className="flex items-center gap-3">
          <select
            value={data.heure?.split(":")[0] ?? ""}
            onChange={(e) => {
              const h = e.target.value;
              const m = data.heure?.split(":")[1] || "00";
              updateData({ heure: `${h}:${m}` });
              setErrors((prev) => ({ ...prev, heure: undefined }));
            }}
            className="input-premium flex-1 text-center text-lg font-semibold appearance-none"
            aria-label="Heure"
          >
            <option value="" disabled>HH</option>
            {hours.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>

          <span className="text-2xl font-bold text-gold-400">:</span>

          <select
            value={data.heure?.split(":")[1] ?? ""}
            onChange={(e) => {
              const h = data.heure?.split(":")[0] || "08";
              const m = e.target.value;
              updateData({ heure: `${h}:${m}` });
              setErrors((prev) => ({ ...prev, heure: undefined }));
            }}
            className="input-premium flex-1 text-center text-lg font-semibold appearance-none"
            aria-label="Minutes"
          >
            <option value="" disabled>MM</option>
            {minutes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {data.heure && (
          <p className="text-center text-sm text-gold-400 font-medium">
            Prise en charge à {data.heure}
          </p>
        )}
        {errors.heure && <p className="text-red-400 text-sm">{errors.heure}</p>}
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="btn-gold-outline flex-1 flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </button>
        <button
          type="submit"
          className="btn-gold flex-1 flex items-center justify-center gap-2"
        >
          Continuer
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
