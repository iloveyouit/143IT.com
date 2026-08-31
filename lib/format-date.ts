export function formatDate(
  date: string,
  options: Intl.DateTimeFormatOptions = {}
) {
  const [year, month, day] = date.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);

  return localDate.toLocaleDateString("en-US", options);
}
