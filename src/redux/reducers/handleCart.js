const cart = [];
const cartFromLocalStorage =  localStorage.getItem('cart')
const initialCart =  cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : []

export const handleCart =(state = initialCart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
        const exist = state.find((x)=> x.id === product.id);
        if(exist){
            const newState = state.map((x)=> x.id === product.id ? {...x, qty: x.qty +1} : x );
            localStorage.setItem('cart',JSON.stringify(newState))
            return newState;
        }else{
            const product = action.payload;
            const newState = [
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ]
            localStorage.setItem('cart',JSON.stringify(newState))
            return newState
        }
       
        break;

        case "DELETEPRODUCT":
            const exist1 = state.find((x)=> x.id === product.id);
            if(exist1.qty === 1){
                const newState = state.filter((x)=> x.id !== exist1.id);
                localStorage.setItem('cart',JSON.stringify(newState))
                return newState;
            }else{
                const newState = state.map((x)=> x.id === product.id ? {...x, qty: x.qty-1} :x );
                localStorage.setItem('cart',JSON.stringify(newState))
                return newState;
            }

            break;

    default:
        return state;
    }
}