import { ImageResponse } from "next/og";

export const alt = "Innovation Lab — Universidad Galileo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const gridLine = "rgba(10, 31, 68, 0.08)";
  const gridImage = `linear-gradient(to right, ${gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${gridLine} 1px, transparent 1px)`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf5",
          backgroundImage: gridImage,
          backgroundSize: "64px 64px",
          padding: "72px 88px",
          color: "#0a1f44",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Corner ticks */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            width: 16,
            height: 16,
            borderTop: "2px solid #0a1f44",
            borderLeft: "2px solid #0a1f44",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            width: 16,
            height: 16,
            borderTop: "2px solid #0a1f44",
            borderRight: "2px solid #0a1f44",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            width: 16,
            height: 16,
            borderBottom: "2px solid #0a1f44",
            borderLeft: "2px solid #0a1f44",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 16,
            height: 16,
            borderBottom: "2px solid #0a1f44",
            borderRight: "2px solid #0a1f44",
          }}
        />

        {/* Top: overline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(10, 31, 68, 0.5)",
            fontFamily: "monospace",
          }}
        >
          <span>§ 01</span>
          <span
            style={{
              width: 48,
              height: 1,
              background: "rgba(10, 31, 68, 0.3)",
              display: "block",
            }}
          />
          <span>Universidad Galileo · GT</span>
        </div>

        {/* Middle: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 196,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
          >
            Innovation
          </div>
          <div
            style={{
              fontSize: 196,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#0a1f44",
            }}
          >
            Lab<span style={{ color: "rgba(10, 31, 68, 0.3)" }}>.</span>
          </div>
        </div>

        {/* Bottom: spec footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(10, 31, 68, 0.6)",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span>14.6041° N · 90.4878° W</span>
            <span style={{ color: "rgba(10, 31, 68, 0.4)" }}>est. 2015</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "serif",
              fontStyle: "italic",
              fontSize: 22,
              textTransform: "none",
              letterSpacing: "-0.01em",
              color: "#0a1f44",
            }}
          >
            laboratorio de experimentación tecnológica
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
