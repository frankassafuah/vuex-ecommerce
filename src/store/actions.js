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
    //Adding Product to cart and backend
export const addToCart = async({ commit }, { product, quantity }) => {
        // commit("SET_ADDTOCART", { product, quantity });
        const response = await axios.post("http://localhost:3000/cart", {
            product,
            quantity
        })

        if (response) {
            commit('SET_ADDTOCART', response.data) //id, product, quatity
        }

    }
    //removing product from cart and backend
export const removeItem = async({ commit }, id) => {
        commit("REMOVE_ITEM", id);
        await axios.delete(`http://localhost:3000/cart/${id}`)
    }
    //clear cart
export const clearCart = async({ commit }) => {
        commit('CLEAR_CART')
        await axios.delete("http://localhost:3000/cart")
    }
    //get cart from backend
export const getCart = async({ commit }) => {
    const response = await axios.get("http://localhost:3000/cart");
    if (response) {
        commit("SET_CART", response.data)
    }
}