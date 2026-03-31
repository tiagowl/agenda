import type { Commitment } from "../types";

export function toISODate(input = new Date()): string {
  const year = input.getFullYear();
  const month = String(input.getMonth() + 1).padStart(2, "0");
  const day = String(input.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function todayISO(): string {
  return toISODate();
}

export function startOfWeek(dateISO: string): Date {
  const date = new Date(`${dateISO}T00:00:00`);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  return date;
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function isSameMonth(dateISO: string, selectedISO: string): boolean {
  const a = new Date(`${dateISO}T00:00:00`);
  const b = new Date(`${selectedISO}T00:00:00`);
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function sortCommitments(list: Commitment[]): Commitment[] {
  return [...list].sort((a, b) => {
    const left = `${a.date}T${a.time}`;
    const right = `${b.date}T${b.time}`;
    return left.localeCompare(right);
  });
}
