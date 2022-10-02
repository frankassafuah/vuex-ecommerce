export const SET_PRODUCTS = (state, payload) => {
    state.products = payload
}

export const SET_PRODUCT = (state, payload) => {
    state.product = payload
}

export const SET_ADDTOCART = (state, { product, quantity }) => {
    const index = state.cart.findIndex(item => item.product.id === product.id)
    if (index > -1) {
        state.cart[index].quantity += quantity;
    } else {
        state.cart.push({ product, quantity })
    }
}