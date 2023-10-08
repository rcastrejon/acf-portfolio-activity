import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { babel } from "@rollup/plugin-babel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [babel({ babelHelpers: "bundled" })],
  },
});
