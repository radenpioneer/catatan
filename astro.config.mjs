import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.radenpioneer.blog",
  integrations: [
    react(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    mdx(),
  ],
});
