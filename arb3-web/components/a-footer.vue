<template>
  <footer>
    <v-container class="py-12">
      <v-divider class="mb-5"></v-divider>

      <!-- Desktop -->
      <v-row class="d-none d-md-flex" align="center">
        <v-col :cols="12" :md="4">
          <div class="text-body-1 font-weight-medium">
            <p>Árbær ehf.</p>
            <p>Kennitala: 650277-0239</p>
            <p class="mt-3 text-caption">© {{ currentYear }} Árbær ehf.</p>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-img :src="si" alt="Samtök iðnaðarins logo" :max-height="150" :max-width="150" :aspect-ratio="1.5"></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-img :src="mfh" alt="Meistarafélag húsasmiða logo" :max-height="150" :max-width="150" :aspect-ratio="1.5">
          </v-img>
        </v-col>
      </v-row>

      <!-- Mobile -->
      <div class="d-md-none">
        <v-row class="ma-0 mb-6" justify="space-around" align="center">
          <v-img :src="si" alt="Samtök iðnaðarins logo" :max-height="150" :max-width="150" :aspect-ratio="1.5"></v-img>
          <v-img :src="mfh" alt="Meistarafélag húsasmiða logo" :max-height="150" :max-width="150" :aspect-ratio="1.5">
          </v-img>
        </v-row>
        <v-row class="ma-0" justify="start">
          <div class="text-body-1 font-weight-medium">
            <p>Árbær ehf.</p>
            <p>Kennitala: 650277-0239</p>
            <p class="mt-3 text-caption">© {{ currentYear }} Árbær ehf.</p>
          </div>
        </v-row>
      </div>

    </v-container>
  </footer>
</template>

<script setup lang="ts">
import si from "~/assets/si-logo-landscape-litur.png";
import mfh from "~/assets/mfhlogonytt.png";

const currentYear = computed(() => {
  return new Date().getFullYear();
})
</script>