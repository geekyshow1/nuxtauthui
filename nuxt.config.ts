// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/nuxt',
  ],
  //  // To fix samesite console error
  //  piniaPersistedstate: {
  //   cookieOptions: {
  //     sameSite: "strict",
  //   },
  // },
})
