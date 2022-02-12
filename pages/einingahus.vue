<template>
  <div>
    <v-container>
      <p class="text-h4">Einingahús</p>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Timbureiningahús frá
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.krivajahomes.com/en/houses/custom-made-houses/"
          >Krivaja</a
        >
        í Bosníu er ódýr og umhverfisvæn kostur.
      </p>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Timbureiningahús er örugg og hagkvæm byggingaraðferð sem verður sífellt
        vinsælli, hér á landi sem og annars staðar. Húsin eru smíðuð af Krivaja
        í Bosníu og er framleiðsluferlið umhverfisvænt og vottað. Fyrir hvert
        tré sem fellur til við framleiðslu eru fleiri tré gróðursett. Húsin eru
        mjög vel einangruð og halda vel hita og réttu rakastigi, þau mygla síður
        og viðhald þeirra er mun einfaldara en t.d. steinhúss.
      </p>
    </v-container>

    <v-container class="mb-3">
      <p-swiper :images="images"></p-swiper>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Hjá okkur er öll þjónusta á einum stað frá undirbúningi jarðvegs til
        afhendingu húss. Húsin eru afhent fullbúin klár til notkunar. Mögulegt
        er að fá húsið með innréttingum og jafnvel húsgögnum sé þess óskað.
        Ýmsar gerðir einingahúsa eru í boði, t.a.m. raðhús, parhús, fjölbýli,
        einbýli, sumarhús, skemmur og iðnaðarhúsnæði.
      </p>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Krivaja hafa framleitt hús frá 1950 um allan heim sem standast heita
        sumarmánuði í Evrópu sem og verstu vetrarhörkur. Útveggir eru samsettir
        af 11 lögum sem gerir húsin mjög vel einangruð og hitatap afskaplega
        lítið.
      </p>
    </v-container>

    <v-container class="mb-3">
      <v-row class="ma-0" justify="center">
        <v-img
          contain
          width="100%"
          max-height="400"
          src="wall.jpg"
          lazy-src="wall.jpg"
          alt="Wall"
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
      <p class="ma-0 text-subtitle-1 text-center">
        Framleiðsla Krivaja hefur eftirfarandi vottorð:
      </p>
    </v-container>

    <v-container>
      <v-img
        contain
        width="100%"
        max-height="70"
        src="certificates.png"
        lazy-src="certificates.png"
        alt="Vottorð"
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
    </v-container>
  </div>
</template>

<script>
import { houses } from "~/assets/mkHouseList";

export default {
  name: "Einingarhus",
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
