<script setup>
  import { ref } from 'vue';

  import ProductItemVue from '@components/ProductItem.vue';
  import hk_products from '@hooks/getProducts.js';

  const products = hk_products.products;
  
  const API = 'https://api.escuelajs.co/api/v1/products';

  const vMyDirective = {
    beforeMount: async () => {
      const reponse = await hk_products.getProducts(API);
    }
  };
</script>

<template>
  <section class="main-container" v-my-directive>
    <div class="cards-container">
      <ProductItemVue v-for="product in products" :key="product.id" :product="product"/>
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