"use client";

import { useSyncExternalStore } from "react";

const filterKeys = ["q", "linea", "estado"] as const;
const filterChange = "project-filters-change";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(filterChange, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(filterChange, callback);
  };
}

export function useProjectFilters() {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const source = new URLSearchParams(search);
  const filters = new URLSearchParams();

  for (const key of filterKeys) {
    const value = source.get(key);
    if (value) filters.set(key, value);
  }

  return filters;
}

export function setProjectFilters(values: Partial<Record<(typeof filterKeys)[number], string>>) {
  const url = new URL(window.location.href);
  for (const key of filterKeys) {
    const value = values[key];
    if (value === undefined) continue;
    if (value && (key === "q" || value !== "all")) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }

  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(filterChange));
}
