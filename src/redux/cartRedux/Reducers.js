import { createReducer } from '@reduxjs/toolkit'

import CartTypes from './ActionsCreators'

export const INITIAL_STATE_CART = {
  cartProducts: {},
  discounts:{}
}

export const addProductCart = (state, { payload }) => {
  const cart = Object.assign({},{...state.cartProducts})
  if(cart.hasOwnProperty(payload.id)){
    const  product = cart[payload.id]
    state.cartProducts[payload.id].quantity = product.quantity + 1
  } else {
    const productAdd = {quantity:1, ...payload}
    cart[payload.id] = productAdd
  }
  state.cartProducts = cart
}

export const cartReducer = createReducer(INITIAL_STATE_CART, {
  [CartTypes.addProduct]: addProductCart
})
