<template>


  <div class="bg-grey-lighten-5 fill-height">
    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-2"> HEADER </v-sheet>
      </v-col>
      <v-col cols="3">
        <v-sheet class="pa-2">
          <Sidebar></Sidebar>
        </v-sheet>
      </v-col>
      <v-col cols="9">
        <v-sheet class="pa-2">
         <router-view></router-view>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-2"> FOOTER</v-sheet>
      </v-col>
    </v-row>
  </div> 

</template>

<script lang="ts" setup>

import CreateProduct from "@/contracts/create_product";
//@ts-ignored
import Sidebar from "@/module/admin/components/common/Sidebar.vue";

</script>

<style lang="scss" scoped>
</style>
