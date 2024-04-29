<template>
  <div>
    <v-container>
      <p class="text-h4">Yleiningar</p>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Yleiningar frá
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://alternativa.ba/"
          >Alternativa</a
        >
        í Bosníu eru hágæða vörur. Alternativa er leiðandi í framleiðslu
        yleininga í evrópu.
      </p>
    </v-container>

    <v-container class="mb-3">
      <v-row class="ma-0" justify="center">
        <v-img
          contain
          width="100%"
          max-width="500"
          src="yleining01.jpg"
          lazy-src="yleining01.jpg"
          alt="Yleining"
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
      <p class="text-subtitle-1">
        Yleiningar eða stálsamlokueiningar eru fullfrágengnar plötur með stáli á
        báðum hliðum fóðraðar með steinull eða Polyúreþan. Þær er hægt að frá 30
        til 250 mm á þykkt og 3 til 16 m á lengd. Þær er hægt að nota í útveggi,
        milliveggi, loft og einnig get þær staðið án burðargrindar innanhúss sem
        býður upp á margar þægilegar lausnir. Þær hafa góða einangrun gegn varma
        og hljóði og háa brunamótstöðu. Hægt er að fá einingar sem eru eldþolnar
        í allt að 60 mínútur. Þær eru einfaldar í uppsetningu, hafa háan
        endingartíma, fást í allskonar útgáfum og áferðum og í öllum litum.
      </p>
    </v-container>

    <v-container class="mb-3">
      <v-row class="ma-0" justify="center">
        <v-img
          contain
          width="100%"
          max-width="500"
          src="yleining02.jpg"
          lazy-src="yleining02.jpg"
          alt="Yleiningar"
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
  </div>
</template>