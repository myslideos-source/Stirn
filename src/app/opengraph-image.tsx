import { ImageResponse } from "next/og";

export const alt = "BRUNNER. Malermeister Crailsheim — Räume, die bleiben.";
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 120, fontWeight: 800, color: "#F4F1EA", letterSpacing: -4 }}>
            BRUNNER
          </div>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#2457FF",
              marginTop: 44,
            }}
          />
        </div>
        <div style={{ fontSize: 26, color: "#D7D4CE", letterSpacing: 2, marginTop: 12, display: "flex" }}>
          MALERMEISTER · CRAILSHEIM
        </div>
        <div style={{ fontSize: 32, color: "#F4F1EA", opacity: 0.85, marginTop: 40, display: "flex" }}>
          Räume, die bleiben.
        </div>
      </div>
    ),
    { ...size }
  );
}
