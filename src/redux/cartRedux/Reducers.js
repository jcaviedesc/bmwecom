import { createReducer } from '@reduxjs/toolkit'

import CartTypes from './ActionsCreators'

export const INITIAL_STATE_CART = {
  cartProducts: {},
  discounts:{},
  lastProductAdded: {}
}

export const addProductCart = (state, { payload }) => {
  const cart = Object.assign({},{...state.cartProducts})
  let productAdd = payload
  if(cart.hasOwnProperty(payload.id)){
    const  product = cart[payload.id]
    state.cartProducts[payload.id].quantity = product.quantity + 1
  } else {
    productAdd = {quantity:1, ...payload}
    cart[payload.id] = productAdd
  }
  state.lastProductAdded = productAdd
  state.cartProducts = cart
}

export const cartReducer = createReducer(INITIAL_STATE_CART, {
  [CartTypes.addProduct]: addProductCart
})
