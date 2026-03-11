import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#7A3345",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        {/* Border */}
        <div
          style={{
            position: "absolute",
            inset: 1,
            borderRadius: "3px",
            border: "2px solid #FFFFFF",
          }}
        />
        {/* SB Text */}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 16,
            background: "linear-gradient(135deg, #FFFFFF, #FFFFFF, #F5EEEA)",
            backgroundClip: "text",
            color: "#FFFFFF",
          }}
        >
          SB
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
