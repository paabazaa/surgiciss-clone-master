import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      crawlLinks: true,
    },
  },
  vite: {
    base: "/surgiciss-clone-master/",
  },
});
