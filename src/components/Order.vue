<template>
  <div class="Order">
    <p>
      <span>03.25.21</span>
      <span>6 articles</span>
    </p>
    <p>$560.00</p>
    <img src="@icons/flechita.svg" alt="arrow">
  </div>
</template>

<style scoped>
  .Order {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: center;
    margin-bottom: 12px;
  }
  .Order p:nth-child(1) {
    display: flex;
    flex-direction: column;
  }
  .Order p span:nth-child(1) {
    font-size: var(--md);
    font-weight: bold;
  }
  .Order p span:nth-child(2) {
    font-size: var(--sm);
    color: var(--very-light-pink);
  }
  .Order p:nth-child(2) {
    text-align: end;
    font-weight: bold;
  }
</style>