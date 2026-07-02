type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: string, id: string, params?: EventParams) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function trackCTA(label: string) {
  trackEvent("cta_click", { cta_label: label });
}

export function trackProductClick(productName: string) {
  trackEvent("product_click", { product: productName });
}

export function trackExternalLink(url: string) {
  trackEvent("outbound_link", { url });
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", { form_name: formName });
}

export function trackBlogOpen(title: string) {
  trackEvent("blog_open", { article_title: title });
}

export function trackNavigation(section: string) {
  trackEvent("nav_click", { section });
}
