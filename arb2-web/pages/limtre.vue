<template>
  <div>
    <v-container>
      <p class="text-h4">Límtré</p>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Límtré frá
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.krivajahomes.com/en/professional/glued-laminated-timber/"
          >Krivaja</a
        >
        í Bosníu er vandað og sterkt límtré sem uppfylla EN 386 / EN 14080
        staðlanna.
      </p>
    </v-container>

    <v-container>
      <p class="text-subtitle-1">
        Límtré er sterkt og þétt timbur sem límt er saman með sterku vatnsheldu
        lími. Kostir límtrés eru þeir að það er fáanlegt í hvaða formi sem er og
        einfalt að móta til, það er sterkt og hefur mikla burðargetu ásamt því
        að öll vinna og meðhöndlun á því er töluvert einfaldari en t.d. á járni
        eða steypu.
      </p>
    </v-container>

    <v-container class="mb-3">
      <v-row class="ma-0" justify="center">
        <v-img
          contain
          width="100%"
          max-width="500"
          src="gluedTimber01.jpg"
          lazy-src="gluedTimber01.jpg"
          alt="Krivaja brú"
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