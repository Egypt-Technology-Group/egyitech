import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
tanstackStart: {
ssr: false,

prerender: {
  crawlLinks: true,
  routes: ["/"],
},

},

vite: {
build: {
outDir: "dist",
},
},
});
