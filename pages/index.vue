<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-img
          src="arbLogo.png"
          lazy-src="arbLogo.png"
          alt="Árbær ehf. logo"
          contain
          class="ma-3"
          width="100%"
          height="100%"
          :max-width="285"
          :max-height="175"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-row>
    </v-container>

    <v-container>
      <p class="text-h5 text-sm-h4 text-center">
        Einingahús og byggingalausnir
      </p>
    </v-container>

    <v-container>
      <p class="ma-0 text-subtitle-1 text-center">
        Við sérhæfum okkur í innflutningi timbureiningahúsa, yleininga, límtrés
        og ráðgjöf fyrir íslenskan markað. Timbureiningahús er örugg og hagkvæm
        byggingaraðferð sem verður sífellt vinsælli, hér á landi sem og annars
        staðar. Límtré og yleiningar eru sterk og góð byggingarefni sem getur
        verið bæði góður og ódýr valkostur á íslandi.
      </p>
    </v-container>

    <v-container class="mt-8">
      <v-row justify="center" align="center">
        <v-btn x-large color="primary" outlined nuxt to="/hafa-samband">
          Hafa samband
        </v-btn>
      </v-row>
    </v-container>

    <v-container class="mt-8">
      <p class="ma-0 text-subtitle-1 text-center">
        Við bjóðum upp á aðstoð við hönnun, efnisval, tíma-, verk- og
        kostnaðaráætlanir. Við erum í samstarfi við arkitekta og hönnuði,
        byggingarstjóra og meistara. Þjónustan er öll á einum stað og við
        fylgjum þér í gegnum allt ferlið.
      </p>
    </v-container>

    <v-container class="mt-8">
      <v-row justify="center" align="center">
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-row justify="center">
            <v-btn color="primary" x-large text to="/einingahus">
              Einingahús
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-row justify="center">
            <v-btn color="primary" x-large text to="/limtre"> Límtré </v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-row justify="center">
            <v-btn color="primary" x-large text to="/yleiningar">
              Yleiningar
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { houses } from "~/assets/mkHouseList";

export default {
  name: "Home",
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.CreateImageList();
    this.Shuffle(this.images);
  },
  methods: {
    CreateImageList() {
      houses.forEach((h) => {
        this.images.push({
          title: h,
          src: `houses/${h}.jpg`,
          alt: h,
          w: 945,
          h: 527,
        });
      });
    },
    Shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
};
</script>
