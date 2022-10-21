export const SET_PRODUCTS = (state, payload) => {
    state.products = payload;
};

export const SET_PRODUCT = (state, payload) => {
    state.product = payload;
};
//Adding product to cart
export const SET_ADDTOCART = (state, { id, product, quantity }) => {
    const index = state.cart.findIndex((item) => item.product.id === product.id);
    if (index > -1) {
        state.cart[index].quantity += quantity;
    } else {
        state.cart.push({ id, product, quantity });
    }
};
//removing product from cart using splice
export const REMOVE_ITEM = (state, id) => {
    const index = state.cart.findIndex((item) => item.id === id);
    if (index > -1)
        state.cart.splice(index, 1);
};

//removing product from cart using filter
// export const REMOVE_ITEM = (state, id) => {
//   state.cart = state.cart.filter(item => item.id !== id);
// };

//clear cart
export const CLEAR_CART = (state) => {
    state.cart = [];
};

export const SET_CART = (state, payload) => {
    state.cart = payload;
};