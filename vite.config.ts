import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/surgiciss-clone-master/",
  vite: {
    base: "/surgiciss-clone-master/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
