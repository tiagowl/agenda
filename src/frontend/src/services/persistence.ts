import type { AppData, Commitment } from "../types";

const STORAGE_KEY = "agenda_app_data_v1";

function normalizeCommitment(raw: Partial<Commitment> & { id: string }): Commitment {
  return {
    id: raw.id,
    name: raw.name ?? "",
    date: raw.date ?? "",
    time: raw.time ?? "",
    notes: raw.notes ?? "",
    completed: Boolean(raw.completed),
    archived: raw.archived === true,
    createdAt: raw.createdAt ?? new Date().toISOString(),
    updatedAt: raw.updatedAt ?? new Date().toISOString()
  };
}

export function loadData(): AppData {
  const fallback: AppData = { version: "1.0.0", commitments: [] };
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw) as AppData;
    if (!Array.isArray(parsed.commitments)) return fallback;
    return {
      version: parsed.version ?? "1.0.0",
      commitments: parsed.commitments.map((c) => normalizeCommitment(c as Partial<Commitment> & { id: string }))
    };
  } catch {
    return fallback;
  }
}

export function saveData(data: AppData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
