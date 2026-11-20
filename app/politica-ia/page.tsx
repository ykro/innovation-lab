import { Suspense } from "react";
import type { Metadata } from "next";
import AiPolicyPage from "@/components/AiPolicyPage";

export const metadata: Metadata = {
  title: "Políticas de Uso de IA · Innovation Lab · Sistemas · PDDS · PEIT",
  description:
    "Políticas de uso responsable de herramientas de inteligencia artificial para el Innovation Lab, cursos de Ingeniería de Sistemas, PDDS y PEIT, con resúmenes descargables en PDF y addendum de los cuatro niveles de MIT.",
};

export default function PoliticaIaRoute() {
  return (
    <Suspense fallback={<div className="shell section-space" />}>
      <AiPolicyPage />
    </Suspense>
  );
}
