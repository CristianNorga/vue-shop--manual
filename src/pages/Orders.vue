<template>
  <div class="my-order">
    <div class="my-order-container">
      <h1 class="title">My orders</h1>

      <div class="my-order-content">
        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
          <img src="./icons/flechita.svg" alt="arrow">
        </div>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
          <img src="./icons/flechita.svg" alt="arrow">
        </div>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
          <img src="./icons/flechita.svg" alt="arrow">
        </div>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
          <img src="./icons/flechita.svg" alt="arrow">
        </div>
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
.order {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
}
.order p:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.order p span:nth-child(1) {
  font-size: var(--md);
  font-weight: bold;
}
.order p span:nth-child(2) {
  font-size: var(--sm);
  color: var(--very-light-pink);
}
.order p:nth-child(2) {
  text-align: end;
  font-weight: bold;
}
</style>