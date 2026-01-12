// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["ik.imagekit.io", "raw.githubusercontent.com"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});