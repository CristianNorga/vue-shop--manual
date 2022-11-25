import { ref, computed } from 'vue';

const cart = ref([]);

const getCart = computed(()=>cart.value);

const totalCart = computed(() => {
	const reducer = (accumalator, currentValue) =>
		accumalator + currentValue.price;
	const sum = cart.value.reduce(reducer, 0);
	return sum;
});

function addCart(product) {
	cart.value.push(product);
}

function removeCart(product) {
	let test = product.id
	cart.value = cart.value.filter((item)=>{
		return item.id != product.id
	});
}


export { getCart, addCart, totalCart, removeCart };
