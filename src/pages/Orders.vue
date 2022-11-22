<script setup>
  import OrderVue from '@components/Order.vue';
</script>

<template>
  <div class="my-order">
    <div class="my-order-container">
      <h1 class="title">My orders</h1>

      <div class="my-order-content">

        <OrderVue/>

      </div>
    </div>
  </div>
</template>

<style scoped>
.my-order {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.title {
  font-size: var(--lg);
  margin-bottom: 40px;
}
.my-order-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
}
.my-order-content {
  display: flex;
  flex-direction: column;
}
</style>