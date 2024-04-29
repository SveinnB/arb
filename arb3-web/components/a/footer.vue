<template>
  <footer>
    <v-container class="py-12">
      <v-divider class="mb-12"></v-divider>
      <v-row align="center">
        <v-col :cols="12" :md="4">
          <div class="text-body-1 font-weight-medium">
            <p>Árbær ehf.</p>
            <p>Kennitala: 650277-0239</p>
            <p>Vsk nr. 136789</p>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-img :src="si" alt="Samtök iðnaðarins logo" :max-height="150" :max-width="150" :aspect-ratio="1.5"></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-img :src="mfh" alt="Meistarafélag húsasmiða logo" :max-height="150" :max-width="150"
            :aspect-ratio="1.5"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
import si from "~/assets/si-logo-landscape-litur.png";
import mfh from "~/assets/mfhlogonytt.png";
</script>