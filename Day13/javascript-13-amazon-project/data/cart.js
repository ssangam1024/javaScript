export const cart = [];

export function addToCart(productId, quantity, selectQuantity){ 
    let matchingItem; 

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
        matchingItem = cartItem;
     }
});

if (matchingItem) {
    matchingItem.quantity += selectQuantity;

} else{
    cart.push({ productId, quantity });

} 

}
