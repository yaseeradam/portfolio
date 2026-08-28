import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Favicon generation component
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #f97316 0%, #d97706 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: 900,
          borderRadius: 8,
          boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)",
          fontFamily: "sans-serif",
        }}
      >
        Y
      </div>
    ),
    {
      ...size,
    }
  );
}
