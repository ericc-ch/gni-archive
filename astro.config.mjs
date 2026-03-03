// @ts-check
import cloudflare from "@astrojs/cloudflare";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://guidesnotincluded.com",
  integrations: [
    starlight({
      title: "Guides Not Included",
      description:
        "Community-built guides for Oxygen Not Included - builds, tips, and resources for managing your duplicant colony.",
      favicon: "/favicon.svg",
      lastUpdated: true,
      pagination: true,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
