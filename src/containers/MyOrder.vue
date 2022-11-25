<script setup>
  
  import {getCart,totalCart} from '@hooks/initialState';

  import OrderItem from "@components/OrderItem.vue"

</script>

<template>
  <div class="MyOrder">
    <div class="my-order-container">
      <h1 class="title">My order</h1>

      <div v-show="getCart.length > 0" class="my-order-content">
        <OrderItem v-for="item in getCart" :product="item" :key="`orderItem-${item.id}`"/>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>{{`${getCart.length} ${getCart.length > 1 ?'articles' : 'article'}`}}</span>
          </p>
          <p>${{totalCart}}</p>
        </div>

        <button className="primary-button">
					Checkout
				</button>

      </div>
    </div>
  </div>
</template>

<style scoped>
.MyOrder {
  width: 360px;
	padding: 24px;
	box-sizing: border-box;
	position: absolute;
	right: 0;
	background-color: white;
	top: 60px;
	bottom: 0;
	border-radius: 6px;
	border: 1px solid var(--very-light-pink);
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
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  background-color: var(--text-input-field);
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 0 24px;
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

@media (max-width: 640px) {
	.MyOrder {
		width: 100%;
	}
}

</style>