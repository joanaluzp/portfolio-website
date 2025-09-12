// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Joana da Luz Pimentel",
      bodyAttrs: {},
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Joana da Luz Pimentel  ꙰. ꙰. ꙰  Front-end Developer:Audiovisual Artist",
        },
        { hid: "author", name: "author", content: "Joana da Luz Pimentel" },
        { hid: "og:title", name: "og:title", content: "Joana da Luz Pimentel" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
      script: [{ src: "https://unpkg.com/aos@2.3.1/dist/aos.js" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["nuxt-swiper"],
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
