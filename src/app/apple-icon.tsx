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
          background: "#0A1628",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontFamily: "Arial Black, sans-serif",
            fontWeight: 900,
            fontSize: 80,
            color: "#FFB800",
          }}
        >
          02
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
