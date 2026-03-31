import type { AppData } from "../types";

const STORAGE_KEY = "agenda_app_data_v1";

export function loadData(): AppData {
  const fallback: AppData = { version: "1.0.0", commitments: [] };
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw) as AppData;
    if (!Array.isArray(parsed.commitments)) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function saveData(data: AppData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
