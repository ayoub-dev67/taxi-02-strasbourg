export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-3xl font-heading font-bold">
            <span className="text-foreground">TAXI</span>{" "}
            <span className="text-gold-gradient">BRK</span>
          </span>
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
        <p className="text-gray-500 text-sm animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  );
}
