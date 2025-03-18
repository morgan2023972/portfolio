// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://nayasinghania.com", // Garde ton domaine si tu en as un
  base: "/portfolio/", // ⚠️ Remplace par le nom exact de ton repo GitHub
  outDir: "docs", // ✅ Change la sortie pour GitHub Pages
  output: "static", // ✅ Force Astro à générer un site statique
  image: {
    domains: ["raw.githubusercontent.com"],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
