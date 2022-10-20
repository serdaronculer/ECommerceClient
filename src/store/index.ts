import { createStore } from 'vuex'
import ProductService from './../services/common/models/product_service';
import CreateProduct from './../contracts/create_product';
import Product from './../contracts/product';
let productService = new ProductService();

export interface ModuleState {
  products: Product[]
}

export default createStore({
  state: {
    products: [{ id: "asd", name: "asdfdsf", price: 122, stock: 123 }]
  } as ModuleState,
  getters: {
    getProducts(state) {
      return state.products;
    }
  },
  mutations: {
    addProduct(state, payload: Product) {
      state.products.push(payload);
    }
  },
  actions: {
    async addProductAsync({ commit }, payload: CreateProduct)  {
      console.log(payload);
      
        const response = await productService.create(payload);
        console.log(response);
        commit("addProduct", response.data)
       
    }
  },
  modules: {
  }
})
