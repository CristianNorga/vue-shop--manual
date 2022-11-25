<script setup>
  import { ref } from "vue";
  import initialState from '@hooks/initialState.js'

  import MyOrderVue from "@containers/MyOrder.vue";
  import MenuDesk from "@components/MenuDesk.vue"

  const toogle = ref(false);
  const toogleOrder = ref(false);

  function setToggle(){
    toogleOrder.value = false
    toogle.value = !toogle.value
  }

  function setToggleorder() {
    toogle.value = false
    toogleOrder.value = !toogleOrder.value
  }
  
</script>

<template>
  <nav>
    <img src="@icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="@logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email" @click="setToggle">
          platzi@example.com
        </li>
        <li class="navbar-shopping-cart" @click="setToggleorder">
          <img src="@icons/icon_shopping_cart.svg" alt="shopping cart">
          <div v-show="initialState.cart.value.length > 0">{{initialState.cart.value.length}}</div>
        </li>
      </ul>
    </div>

    <MenuDesk v-show="toogle"/>
    <MyOrderVue v-show="toogleOrder"/>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid var(--very-light-pink);
  }
  .menu {
    display: none;
  }
  .logo {
    width: 100px;
  }
  .navbar-left ul,
  .navbar-right ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 60px;
  }
  .navbar-left {
    display: flex;
  }
  .navbar-left ul {
    margin-left: 12px;
  }
  .navbar-left ul li a,
  .navbar-right ul li a {
    text-decoration: none;
    color: var(--very-light-pink);
    border: 1px solid var(--white);
    padding: 8px;
    border-radius: 8px;
  }
  .navbar-left ul li a:hover,
  .navbar-right ul li a:hover {
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
  }
  .navbar-email {
    color: var(--very-light-pink);
    font-size: var(--sm);
    margin-right: 12px;
    cursor: pointer;
  }
  .navbar-shopping-cart {
    position: relative;
  }
  .navbar-shopping-cart div {
    width: 16px;
    height: 16px;
    background-color: var(--hospital-green);
    border-radius: 50%;
    font-size: var(--sm);
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 640px) {
    .menu {
      display: block;
    }
    .navbar-left ul {
      display: none;
    }
    .navbar-email {
      display: none;
    }
  }
</style>