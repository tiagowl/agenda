import type { AppData } from "../types";

export function exportJSON(data: AppData): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `agenda-backup-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function parseImportJSON(raw: string): AppData {
  const parsed = JSON.parse(raw) as AppData;
  if (!parsed || !Array.isArray(parsed.commitments)) {
    throw new Error("Formato invalido");
  }
  return parsed;
}
