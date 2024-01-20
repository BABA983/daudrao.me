export function experienceDate(date: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      year: "2-digit",
      // day: "numeric",
    }).format(new Date(date));
  } catch (error) {
    return date;
  }
}
