<script setup>
  import ProductInfoVue from '@components/ProductInfo.vue';
</script>
<template>
  <aside class="product-detail">
    <div class="product-detail-close">
      <img src="@icons/icon_close.png" alt="close">
    </div>
    <ProductInfoVue/>
  </aside>
</template>

<style scoped>
.product-detail {
  width: 360px;
  padding-bottom: 24px;
  position: absolute;
  right: 0;
}
.product-detail-close {
  background: var(--white);
  width: 14px;
  height: 14px;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
.product-detail-close:hover {
  cursor: pointer;
}
.product-detail > img:nth-child(2) {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}
.primary-button {
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
}
.add-to-cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 640px) {
  .product-detail {
    width: 100%;
  }
}
</style>