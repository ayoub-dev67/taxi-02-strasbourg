import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "#7A3345",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          position: "relative",
        }}
      >
        {/* Border */}
        <div
          style={{
            position: "absolute",
            inset: 4,
            borderRadius: "32px",
            border: "4px solid #FFFFFF",
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: "absolute",
            inset: 16,
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        />
        {/* SB Text */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 2,
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: 72,
              color: "#FFFFFF",
            }}
          >
            S
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: 52,
              color: "#FFFFFF",
            }}
          >
            B
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
