<script setup>
  import ProductItemVue from '@components/ProductItem.vue';
</script>

<template>
  <section class="main-container">
    <div class="cards-container">
      <ProductItemVue/>
    </div>
  </section>
</template>

<style scoped>
  .main-container {
    margin: 30px 0px;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 26px;
    place-content: center;
  }
  
  @media (max-width: 640px) {
    .cards-container {
      grid-template-columns: repeat(auto-fill, 140px);
    }
  }
</style>