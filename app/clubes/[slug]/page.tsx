import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClubDetail from "@/components/ClubDetail";
import { labClubs } from "@/data/ecosystem";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return labClubs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const club = labClubs.find((entry) => entry.slug === slug);
  if (!club) notFound();

  return {
    title: club.name.es,
    description: club.description.es,
    alternates: { canonical: `/clubes/${club.slug}` },
  };
}

export default async function ClubPage({ params }: Props) {
  const { slug } = await params;
  const club = labClubs.find((entry) => entry.slug === slug);
  if (!club) notFound();

  return <ClubDetail club={club} />;
}
