<template>
  <div>
    <v-divider></v-divider>
    <v-container>
      <v-row class="mt-3" justify="center" justify-sm="space-between">
        <v-col cols="12" sm="4">
          <p class="ma-0 text-body-2 text-center text-sm-left">Árbær ehf.</p>
          <p class="ma-0 text-body-2 text-center text-sm-left">
            Kennitala: 650277-0239
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <a :href="`mailto:husihus@husihus.is`">
            <p class="ma-0 text-body-2 text-center text-sm-right black--text">
              <v-icon color="primary" class="mr-2">mdi-email-outline</v-icon>
              husihus@husihus.is
            </p>
          </a>

          <a :href="`tel:+354 8683641`">
            <p class="ma-0 text-body-2 text-center text-sm-right black--text">
              <v-icon color="primary" class="mr-2">mdi-phone-outline</v-icon>
              Samir 868-3641
            </p>
          </a>
          <a :href="`tel:+354 8595900`">
            <p class="ma-0 text-body-2 text-center text-sm-right black--text">
              <v-icon color="primary" class="mr-2">mdi-phone-outline</v-icon>
              Daníel 859-5900
            </p>
          </a>
        </v-col>
      </v-row>

      <v-row justify="center" justify-sm="space-between">
        <v-col>
          <p class="ma-0 text-caption text-center text-sm-left">
            © {{ year }} Árbær ehf.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      phone: "8595900",
      email: "daniel@husihus.is",
    };
  },
  computed: {
    phoneString() {
      return this.phone.substring(0, 3) + "-" + this.phone.substring(3);
    },
  },
};
</script>
