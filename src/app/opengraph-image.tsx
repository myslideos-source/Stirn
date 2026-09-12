import { ImageResponse } from "next/og";

export const alt = "STIRN. Malerbetrieb Fichtenau — Räume, die bleiben.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#171716",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 120, fontWeight: 800, color: "#F2EFE8", letterSpacing: -4 }}>
            STIRN
          </div>
          <div
            style={{
              width: 34,
              height: 34,
              background: "#2447E8",
              transform: "rotate(45deg)",
              marginTop: 20,
            }}
          />
        </div>
        <div style={{ fontSize: 26, color: "#B8B2A8", letterSpacing: 2, marginTop: 12, display: "flex" }}>
          MALERBETRIEB · FICHTENAU
        </div>
        <div style={{ fontSize: 32, color: "#F2EFE8", opacity: 0.85, marginTop: 40, display: "flex" }}>
          Räume, die bleiben.
        </div>
      </div>
    ),
    { ...size }
  );
}
