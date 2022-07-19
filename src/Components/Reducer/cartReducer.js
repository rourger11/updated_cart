import * as actionTypes from '../actions/action-types/cart-action'
// import items from '../Items/Items'
const initialValue = {
    carts: [],

}
const cartreducer = (state = initialValue, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            } else {
                const temp = {
                    ...action.payload,
                    qnty: 1
                }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


            case actionTypes.REMOVE_FROM_CART:
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }

                case actionTypes.SUB_QUANTITY:
                    const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
                    if (state.carts[ItemIndex_dec].qnty >= 1) {
                        const deleteItem = state.carts[ItemIndex_dec].qnty -= 1

                        return {
                            ...state,
                            carts: [...state.carts]
                        }
                    } else if(state.carts[ItemIndex_dec].qnty === 1) {
                        const data = state.carts.filter((el) => el.id !== action.payload);

                        return {
                            ...state,
                            carts:data
                        }
                    }
                    default:

                        return state;
    }
}
export default cartreducer;