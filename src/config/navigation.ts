export interface NavItem {
  label: string;
  path: string;
}

export const mainNavItems: NavItem[] = [
  { label: "nav.home", path: "/" },
  { label: "nav.products", path: "/products" },
  { label: "nav.about", path: "/about" },
  { label: "nav.contact", path: "/contact" },
  { label: "nav.blog", path: "/blog" },
];
