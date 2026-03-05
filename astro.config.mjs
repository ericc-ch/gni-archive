// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://guidesnotincluded.com",
  integrations: [
    starlight({
      title: "Guides Not Included",
      description:
        "Oxygen Not Included builds, guides, and resources. (Keep calm and press the space bar.)",
      favicon: "/favicon.svg",
      lastUpdated: true,
      pagination: true,

      customCss: ["./src/styles/global.css"],
    }),
  ],
});
