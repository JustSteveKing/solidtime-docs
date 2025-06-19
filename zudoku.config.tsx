import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  page: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "SolidTime",
      width: "130px",
    },
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
};

export default config;
