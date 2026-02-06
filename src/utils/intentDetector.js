export function detectIntent(query) {
  if (query.includes("time") || query.includes("hour")) return "timings";
  if (query.includes("fee") || query.includes("price")) return "membership";
  if (query.includes("trainer") || query.includes("program")) return "programs";
  if (query.includes("contact") || query.includes("phone")) return "contact";
  return "facilities";
}
