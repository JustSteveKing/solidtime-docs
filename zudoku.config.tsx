import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  page: {
    logo: {
      src: { light: "https://www.solidtime.io/_astro/header_bg.GG5eHJNh_ZEelG4.webp", dark: "https://www.solidtime.io/_astro/header_bg.GG5eHJNh_ZEelG4.webp" },
      alt: "SolidTime",
      width: "130px",
    },
  },
  search: {
    type: "pagefind",
    maxSubResults: 10,
    ranking: {
      termFrequency: 0.8,
      pageLength: 0.6,
      termSimilarity: 1.2,
      termSaturation: 1.2,
    }
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "User Guide",
          icon: "sparkles",
          items: [
            "/user-guide/intro",
            "/user-guide/roles",
            "/user-guide/billable-rates"
          ],
        },
        {
          type: "category",
          label: "Self Hosting",
          collapsible: false,
          icon: "link",
          items: [
            "/self-hosting/intro"
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "Solidtime API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/user-guide/intro" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
  theme: {
    light: {
      background: "#ffffff",
      foreground: "#020817",
      card: "#ffffff",
      cardForeground: "#020817",
      popover: "#ffffff",
      popoverForeground: "#020817",
      primary: "#0284c7",
      primaryForeground: "#ffffff",
      secondary: "#f1f5f9",
      secondaryForeground: "#020817",
      muted: "#f1f5f9",
      mutedForeground: "#64748b",
      accent: "#f1f5f9",
      accentForeground: "#020817",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#0284c7",
      radius: "0.5rem",
    },
    dark: {
      background: "#020817",
      foreground: "#f8fafc",
      card: "#020817",
      cardForeground: "#f8fafc",
      popover: "#020817",
      popoverForeground: "#f8fafc",
      primary: "#0ea5e9",
      primaryForeground: "#f8fafc",
      secondary: "#1e293b",
      secondaryForeground: "#f8fafc",
      muted: "#1e293b",
      mutedForeground: "#94a3b8",
      accent: "#1e293b",
      accentForeground: "#f8fafc",
      destructive: "#ef4444",
      destructiveForeground: "#f8fafc",
      border: "#1e293b",
      input: "#1e293b",
      ring: "#0ea5e9",
      radius: "0.5rem",
    },
  }
};

export default config;
