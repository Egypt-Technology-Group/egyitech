import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
tanstackStart: {
ssr: false,

server: {
  entry: "server",
},

prerender: {
  crawlLinks: true,
  routes: ["/"],
},

},

vite: {
build: {
ssr: false,
},
},
});
