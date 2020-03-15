import product from "./product"

const initialState = {
    carts: [],
    total:0
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CART':
            let filterCartId = state.carts.map(cart => {
                if (cart.id === action.payload.id) {
                    cart.qty += 1
                    return action.payload
                }
                return cart
            })

            let existedCartData = state.carts.find(product => product.id === action.payload.id)
            if(existedCartData) {
                return {
                    ...state,
                    carts: filterCartId,
                    total: state.total + action.payload.price
                }
            }
            else{
                let newTotal = state.total + action.payload.price
                action.payload.qty = 1
                return{
                    ...state,
                    carts: [...state.carts, action.payload],
                    total: newTotal
                }
            }
        case 'DELETE_CART':
            const filterCartIdDelete = state.carts.filter(product => product.id !== action.payload)
            let existedCartDelete = state.carts.find(product => product.id === action.payload)
            if (existedCartDelete) {
                return {
                    ...state,
                    carts: filterCartIdDelete,
                    total: state.total - existedCartDelete.price * existedCartDelete.qty
                }
            }
        case 'ADD_QTY':
            const addQty = state.carts.map(product => {
                if (product.id === action.payload) {
                    product.qty += 1
                }
                return product
            })
            let existedCartAdd = state.carts.find(product => product.id === action.payload)
            if(existedCartAdd) {
                return{
                    ...state,
                    carts: addQty,
                    total: state.total + existedCartAdd.price
                }
            }
        case 'REDUCE_QTY':
            const reduceQty = state.carts.map(product => {
                if (product.id === action.payload) {
                    product.qty = product.qty - 1
                }
                return product
            })
            let existedCartReduce = state.carts.find(product => product.id === action.payload)
            if (existedCartReduce.qty <= 0) {
                existedCartReduce.qty = 1
                return{
                    ...state
                }
            }
            else {
                return{
                    ...state,
                    carts: reduceQty,
                    total: state.total - existedCartReduce.price
                }
            }
        default:
            return state;
    }    
}

export default cart