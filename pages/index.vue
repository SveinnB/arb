<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-img
          src="arbLogo.png"
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
      <p class="text-h4 text-center">Einigarhús og aðrar byggingalausnir</p>
    </v-container>

    <v-container class="">
      <p class="ma-0 text-body-1 text-center">
        Við sérhæfum okkur í innflutningi og ráðgjöf timbur einingarhúsa fyrir
        íslenskan markað. Timbur einingarhús er örugg og hagkvæm
        byggingaraðferð. Húsin eru smíðuð í evrópu af
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.krivajahomes.com/"
          >krivajahomes</a
        >
        og er framleiðslan umhverfisvæn. Fyrir hver tré sem fellt er til
        framleiðsu eru önnur gróðursett. Húsin eru mjög vel einangruð og halda
        vel hita og réttu rakastigi, þau mygla síður og við viðhald þeirra er
        mun einfaldara en t.d steinhús.
      </p>
    </v-container>

    <!-- <FocusList :list="focusList" /> -->

    <v-container class="p_top_m">
      <v-row justify="center">
        <v-btn large outlined color="primary" nuxt to="/hugmyndir">
          Hugmyndir
        </v-btn>
      </v-row>
    </v-container>

    <v-container class="p_top_m">
      <v-row justify="center"> </v-row>
      <p class="text-h5 text-center">
        Starfsfólk Árbæjar hefur áratuga reynslu á íslenskum byggingarmakaði.
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      focusList: [
        "Einbýlishús",
        "Raðhús",
        "Parhús",
        "Fjölbýli",
        "Sumarhús",
        "Stálgrindarhús",
        "Skemmur",
      ],
    };
  },
};
</script>
