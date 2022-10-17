<template>
  <div class="bg-surface-variant">
    <v-row no-gutters>
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
import Sidebar from "@/module/admin/components/common/Sidebar.vue";
</script>
