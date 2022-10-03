import state from "./state";

export const cartNumber = (state) => {
        return state.cart.length;
    }
    //Total price in cart(for loop method)
    // export const totalPrice = (state) => {
    //     let sum = 0;
    //     for (const n of state.cart) {
    //         sum = sum + (n.product.price * n.quantity)
    //     }
    //     return sum
    // }

//total price in cart (reduce method)
export const totalPrice = (state) => {
    let sum = state.cart.reduce((acc, currentValue) => {
        return acc + (currentValue.product.price * currentValue.quantity)
    }, 0)
    return sum
}