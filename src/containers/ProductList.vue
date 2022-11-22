<script setup>
  import ProductItemVue from '@components/ProductItem.vue';
  import axios from "axios";
  import {ref} from "vue";

  const API = "https://api.escuelajs.co/api/v1/products"

  const products = ref([])
  function setProducts(data){
    products.value = data;
  }

  const vMyDirective = {
    beforeMount: async () => {
      const response = await axios(API)
      setProducts(response.data)
    }
  }

</script>

<template>
  <section class="main-container" v-my-directive>
    <div class="cards-container">
      <ProductItemVue v-for="product in products"/>
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