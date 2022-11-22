<script setup>
// import components
  import { RouterLink, RouterView } from "vue-router";

  import "@styles/global.sass"
  import LayoutVue from "@containers/Layout.vue";
</script>

<template>
  <LayoutVue>
    <template #default>
      <RouterView/>
    </template>
  </LayoutVue>
</template>