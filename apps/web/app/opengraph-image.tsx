import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt =
  "Algelyx — Matrici extracellulari biocompatibili per colture cellulari"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #A78BFA 0%, #4C1D95 50%, #FB7185 100%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: "-0.02em",
          }}
        >
          algelyx
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            <span>Matrici extracellulari</span>
            <span>biocompatibili</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 32,
              fontWeight: 500,
              opacity: 0.85,
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            <span>Idrogel xeno-free e animal-free di origine vegetale</span>
            <span>per colture cellulari 2D e 3D.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            opacity: 0.7,
          }}
        >
          <div>www.algelyx.com</div>
          <div>UNITN — Trento</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
