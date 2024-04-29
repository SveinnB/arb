<template>
  <v-card color="primary" variant="outlined" :width="400">

    <v-container>
      <v-row class="py-3" justify="center">
        <div class="text-black text-center" style="height: 60px;">
          <p class="text-h6">{{ person.name }}</p>
          <p v-if="person.title" class="text-subtitle-2">{{ person.title }}</p>
        </div>
      </v-row>

      <v-row class="mb-1" justify="center">
        <v-btn variant="outlined" prepend-icon="mdi-phone" :href="person.phonenumberUrl">
          {{ person.phonenumberDisplay }}
        </v-btn>
      </v-row>

    </v-container>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  person: Person;
}>();
</script>