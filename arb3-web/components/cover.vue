<template>
  <v-main class="d-flex">
    <v-container class="ma-auto">
      <v-row justify="center">
        <v-img :src="arbLogo" alt="Árbær viðhaldsþjónusta logo" :max-width="400" :max-height="200"
          :aspect-ratio="2"></v-img>
      </v-row>

      <v-row class="my-10" justify="center">
        <person-card v-for="p in personList" :person="p" class="ma-3"></person-card>
      </v-row>

      <v-row>
        <v-col class="">
          <v-row class="ma-0" justify="center">
            <p class="text-h6 text-center">
              Verkbeiðnir og almennar fyrirspurnir <br> skulu berast til
            </p>
          </v-row>
          <v-row class="ma-0 mt-6" justify="center">
            <v-btn class="text-none" size="large" rounded="lg" color="primary" variant="outlined"
              prepend-icon="mdi-email" href="mailto:arb@arb.is">
              arb@arb.is
            </v-btn>
          </v-row>
        </v-col>

        <v-col>
          <p class="text-h6 text-center">
            Reikningar og önnur mál tengd bókhaldi <br> skulu berast til
          </p>
          <v-row class="ma-0 mt-6" justify="center">
            <v-btn class="text-none" size="large" rounded="lg" color="primary" variant="outlined"
              prepend-icon="mdi-email" href="mailto:bokhald@arb.is">
              bokhald@arb.is
            </v-btn>
          </v-row>
        </v-col>



      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import arbLogo from "~/assets/arb-logo.webp";
const personList: Person[] = [
  {
    name: "Daníel Steinarr Jökulsson",
    title: "Eigandi & Húsasmíðameistari",
    phonenumberDisplay: "859-5900",
    phonenumberUrl: "tel:+354 859 5900"
  },
  {
    name: "Jökull Daníelsson",
    title: "Eigandi",
    phonenumberDisplay: "859-5901",
    phonenumberUrl: "tel:+354 859 5901"
  }
]
</script>
