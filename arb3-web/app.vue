<template>
  <v-app class="bg-app">
    <a-cover></a-cover>
    <a-footer></a-footer>
  </v-app>
</template>

<script setup lang="ts">
import arbLogo from "~/assets/arb_1200x630.webp";

useHead({
  title: "Árbær",
  htmlAttrs: {
    lang: "is"
  },
  meta: [
    { name: "description", content: "Árbær viðhaldsþjónusta" }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ]
})

useSeoMeta({
  description: "Viðhaldsþjónusta",
  ogTitle: "Árbær",
  ogDescription: "Viðhaldsþjónusta",
  ogImage: arbLogo,
  ogUrl: "https://arb.is/",
  twitterTitle: "Árbær",
  twitterDescription: "Viðhaldsþjónusta",
  twitterImage: arbLogo,
  twitterCard: "summary_large_image"
})
</script>

<style>
.bg-app {
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 70%, rgba(246, 111, 45, 0.20) 100%) !important;
}
</style>