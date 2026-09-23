const formatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
export const formatDate = (date) =>
  date ? formatter.format(new Date(`${date}T00:00:00Z`)) : "Present";
