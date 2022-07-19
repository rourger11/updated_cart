// import {ADD_TO_CART,GET_NUMBER_CART,REMOVE_FROM_CART} from '../actions/action-types/cart-action'
import * as actionTypes from '../actions/action-types/cart-action'

export const addToCart= (item)=>{
  return{
      type:actionTypes. ADD_TO_CART,
      payload: item
      
  }
}
// Remove items from cart
export const removeFromCart = (id)=>{
  return{
      type:actionTypes.REMOVE_FROM_CART,
      payload: id
  }
}

// remove indivisual item

export const decreaseItem = (item)=>{
  return{
      type:actionTypes.SUB_QUANTITY,
      payload: item
  }
}
