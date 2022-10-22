export const addCart = (product) => {
    return{
        type : "ADD_PRODUCT_TO_CART",
        payload : product
    }
}


export const delCart = (product) => {
    return{
        type : "DELLITEM",
        payload : product
    }
}
export const deleteItem = (product) => {
    return{
        type : "DELETEPRODUCT",
        payload : product
    }
}