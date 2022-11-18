<script setup>
// import components
  import "../styles/global.sass"
  import LayoutVue from "../containers/Layout.vue";
  import LoginVue from "../containers/Login.vue";
</script>

<template>
  <LayoutVue>
    <template #default>
      <LoginVue/>
    </template>
  </LayoutVue>
</template>