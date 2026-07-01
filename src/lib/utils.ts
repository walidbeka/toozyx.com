export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function absoluteUrl(path: string): string {
  const baseUrl = "https://toozyx.com";
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
