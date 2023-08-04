export function getCurrentTime() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`;
}

export function getTimeFromDateTime(datetime) {
    return datetime.split("T")[1];
}

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];