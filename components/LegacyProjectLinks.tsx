"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LegacyProjectLinks() {
  const router = useRouter();
  useEffect(() => {
    const redirect = () => {
      const match = /^#project-([a-z0-9-]+)$/.exec(window.location.hash);
      if (match) router.replace(`/proyectos/${match[1]}`);
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [router]);

  return null;
}
