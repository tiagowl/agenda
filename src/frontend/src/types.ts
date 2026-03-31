export type CalendarViewMode = "day" | "week" | "month";

export interface Commitment {
  id: string;
  name: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  notes: string;
  completed: boolean;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AppData {
  version: string;
  commitments: Commitment[];
}
