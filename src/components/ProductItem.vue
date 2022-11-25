<script setup>
  // import { reactive } from 'vue'
  // import { defineProps } from 'vue';
  import {addCart} from '@hooks/initialState.js'

  const props = defineProps({
    product: {
      type: Object,
      default: {
        images: [
          'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        ],
        title: 'Bike',
        price: '120,00'
      }
    }
  });

</script>

<template>
  <div class="ProductItem">
    <img :src="product.images[0] || 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'" :alt="product.title">
    <div class="product-info">
      <div>
        <p>$ {{product.price}}</p>
        <p>{{product.title}}</p>
      </div>
      <figure @click="addCart(product)">
        <img src="@icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>
</template>

<style scoped>
  .ProductItem {
    width: 240px;
  }
  .ProductItem img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    object-fit: cover;
  }
  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  .product-info figure {
    margin: 0;
    cursor: pointer;
  }
  .product-info figure img {
    width: 35px;
    height: 35px;
  }
  .product-info div p:nth-child(1) {
    font-weight: bold;
    font-size: var(--md);
    margin-top: 0;
    margin-bottom: 4px;
  }
  .product-info div p:nth-child(2) {
    font-size: var(--sm);
    margin-top: 0;
    margin-bottom: 0;
    color: var(--very-light-pink);
  }
  @media (max-width: 640px) {
    .cards-container {
      grid-template-columns: repeat(auto-fill, 140px);
    }
    .ProductItem {
      width: 140px;
    }
    .ProductItem img {
      width: 140px;
      height: 140px;
    }
  }
</style>