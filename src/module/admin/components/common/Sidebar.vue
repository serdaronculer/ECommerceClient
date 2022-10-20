<template>
  <v-card
    class="mx-auto"
  >
    <v-list density="compact">
      <v-list-subheader>Menü</v-list-subheader>
      <v-list-item
        v-for="(category, i) in categories"
        :key="i"
        :value="category"
        active-color="#3f51b5"
        :exact="true"
        :to="{name:category.link}       
        "
      >
        <v-list-item-title v-text="category.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>

</template>

<script lang="ts" setup>

import { ref } from '@vue/reactivity'

const categories = ref<{name: string, link: string}[]>([ {
          name: 'Gösterge Paneli',
          link: 'dashboard',
        },
        {
          name: 'Müşteriler',
          link: 'customers'
        },
        {
          name: 'Ürünler',
          link: 'productsAdmin'
        },
        {
          name: 'Siparişler',
          link: 'orders'
        },
        {
          name: 'Siteye Dön',
          link: 'home'
        }
        ]);
</script>

<style lang="scss" scoped>

.oba{
  color: green;
}
</style>