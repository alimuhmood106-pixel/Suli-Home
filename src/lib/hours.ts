// Opening hours in Iraq local time (UTC+3, no DST).
// Saturday–Thursday 08:00–21:30, Friday 09:00–18:00.
export const IRAQ_OFFSET_MIN = 180;

export function isOpenAt(date: Date): boolean {
  const local = new Date(date.getTime() + IRAQ_OFFSET_MIN * 60_000);
  const day = local.getUTCDay(); // 0 Sun … 5 Fri, 6 Sat
  const mins = local.getUTCHours() * 60 + local.getUTCMinutes();
  if (day === 5) return mins >= 9 * 60 && mins < 18 * 60;
  return mins >= 8 * 60 && mins < 21 * 60 + 30;
}
