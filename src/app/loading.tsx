export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-3xl font-heading font-bold">
            <span className="text-[#FFB800]">TAXI</span>{" "}
            <span className="text-white">02</span>
          </span>
          <div className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#94A3B8] mt-1">Strasbourg</div>
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gold-400/20" />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-400 animate-spin" />
          {/* Inner pulse */}
          <div className="absolute inset-3 rounded-full bg-gold-400/8 animate-pulse" />
        </div>

        {/* Text */}
        <p className="text-[#94A3B8] text-sm animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  );
}
