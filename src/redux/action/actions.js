export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const delItem = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}
