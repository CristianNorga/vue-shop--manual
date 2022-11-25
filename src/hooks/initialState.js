import { ref } from 'vue';

export default {
	cart: ref([]),
	addCart(product) {
		console.log('adding')
		this.cart.value.push(product);
	},
};
