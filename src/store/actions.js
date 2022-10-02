import axios from 'axios'

export const getProducts = async({ commit }) => {
    const response = await axios.get("http://localhost:3000/products");
    if (response) {
        commit("SET_PRODUCTS", response.data)
    }
}

export const getProduct = async({ commit }, payload) => {
    const response = await axios.get(`http://localhost:3000/products/${payload}`);
    if (response) {
        commit("SET_PRODUCT", response.data)
    }
}

export const addToCart = ({ commit }, payload) => {
    commit("SET_ADDTOCART", payload);
}