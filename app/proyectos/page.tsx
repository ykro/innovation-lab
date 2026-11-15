import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Explora los proyectos del Innovation Lab y sus demos, publicaciones y repositorios.",
  alternates: { canonical: "/proyectos" },
};

export default function ProjectsPage() {
  return <Projects />;
}
