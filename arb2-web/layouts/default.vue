<template>
  <v-app>
    <Navbar />
    <v-main class="">
      <v-container class="width">
        <nuxt class="content" />
      </v-container>
    </v-main>
    <v-container>
      <Footer class="footer" />
    </v-container>
  </v-app>
</template>

<style>
.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
.width {
  max-width: 1200px;
}
</style>
