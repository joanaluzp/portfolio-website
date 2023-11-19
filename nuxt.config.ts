// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Joana da Luz",
      bodyAttrs: {},
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { hid: "description", name: "description", content: "" },
        { hid: "keywords", name: "keywords", content: "" },
        { hid: "author", name: "author", content: "Joana da Luz Pimentel" },
        { hid: "og:title", name: "og:title", content: "Joana da Luz Pimentel" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
        { rel:"stylesheet", type:"text/css", href:'https://unpkg.com/aos@2.3.1/dist/aos.css' },
      ],
      script: [{ src: 'https://unpkg.com/aos@2.3.1/dist/aos.js' }],
    },
  },
  css: ["@/assets/scss/style.scss"],
  vite: {
    css: {},
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
