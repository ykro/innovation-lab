import { ImageResponse } from "next/og";

export const alt = "Innovation Lab · Universidad Galileo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#eeebda", color: "#282b4a", padding: 92, borderLeft: "14px solid #282b4a" }}>
        <div style={{ fontSize: 86, fontWeight: 700 }}>Innovation Lab</div>
        <div style={{ fontSize: 35, marginTop: 12 }}>Universidad Galileo · FISICC</div>
        <div style={{ fontSize: 33, marginTop: 42, color: "#60616f" }}>Proyectos de inteligencia artificial, robótica y software</div>
      </div>
    ),
    size,
  );
}
