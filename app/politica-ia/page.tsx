import type { Metadata } from "next";
import AiPolicyPage from "@/components/AiPolicyPage";

export const metadata: Metadata = {
  title: "Política de Uso de IA · Innovation Lab · Universidad Galileo",
  description:
    "Guía y política de uso de herramientas de inteligencia artificial en el Laboratorio de Innovación de Universidad Galileo: cinco pilares, semáforo de MIT, seguridad determinista en hardware y validación con usuarios reales.",
};

export default function PoliticaIaRoute() {
  return <AiPolicyPage />;
}
