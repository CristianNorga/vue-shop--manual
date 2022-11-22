<template>
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
  <div class="ProductInfo">
    <p>$35,00</p>
    <p>Bike</p>
    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    <button class="primary-button add-to-cart-button">
      <img src="@icons/bt_add_to_cart.svg" alt="add to cart">
      Add to cart
    </button>
  </div>
</template>

<style scoped>

  .ProductInfo {
    margin: 24px 24px 0 24px;
  }
  .ProductInfo p:nth-child(1) {
    font-weight: bold;
    font-size: var(--md);
    margin-top: 0;
    margin-bottom: 4px;
  }
  .ProductInfo p:nth-child(2) {
    color: var(--very-light-pink);
    font-size: var(--md);
    margin-top: 0;
    margin-bottom: 36px;
  }
  .ProductInfo p:nth-child(3) {
    color: var(--very-light-pink);
    font-size: var(--sm);
    margin-top: 0;
    margin-bottom: 36px;
  }
</style>