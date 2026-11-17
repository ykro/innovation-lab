import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetail from "@/components/EventDetail";
import { majorEvents } from "@/data/ecosystem";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return majorEvents.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = majorEvents.find(({ id }) => id === slug);
  if (!event) notFound();

  return {
    title: event.name.es,
    description: event.description.es,
    alternates: { canonical: `/eventos/${event.id}` },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = majorEvents.find(({ id }) => id === slug);
  if (!event) notFound();

  return <EventDetail event={event} />;
}
