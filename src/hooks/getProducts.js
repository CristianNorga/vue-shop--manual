import {ref} from "vue";
import axios from 'axios';

export default {
  products: ref([]),
  async getProducts(API){
    const response = await axios(API);
    this.setProducts(response.data);
  },
  setProducts(data) {
    this.products.value = data;
  }
  // async created() {
  //   this.setProducts
  // }
}