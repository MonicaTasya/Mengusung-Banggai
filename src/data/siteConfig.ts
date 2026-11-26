export interface SiteLink {
  labelKey: "nav.home" | "nav.destinations" | "nav.products" | "nav.stories";
  href: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "instagram" | "email" | "phone";
}

export const navigationLinks: SiteLink[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.destinations", href: "/destinasi" },
  { labelKey: "nav.products", href: "/produk-lokal" },
  { labelKey: "nav.stories", href: "/cerita-kami" },
];

export const contactLinks: ContactLink[] = [
  // TODO: Ganti kontak berikut dengan akun resmi tim KKN.
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { label: "Email", href: "mailto:tinepogorontalo@example.com", icon: "email" },
  { label: "WhatsApp", href: "https://wa.me/", icon: "phone" },
];
