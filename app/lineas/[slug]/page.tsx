import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkLineDetail from "@/components/WorkLineDetail";
import { workLines } from "@/data/ecosystem";

export const dynamicParams = false;

export function generateStaticParams() {
  return workLines.map((line) => ({ slug: line.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const line = workLines.find((entry) => entry.slug === slug);

  if (!line) {
    return { title: "Línea de trabajo no encontrada · Laboratorio de Innovación" };
  }

  return {
    title: `${line.title.es} · Laboratorio de Innovación`,
    description: line.description.es,
  };
}

export default async function WorkLinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const line = workLines.find((entry) => entry.slug === slug);

  if (!line) notFound();

  return <WorkLineDetail line={line} />;
}
