import { createAction } from '@reduxjs/toolkit'

const addProduct = createAction('cart/addProduct')

const removeProduct = createAction('cart/removeProduct')

export default {
  addProduct,
  removeProduct
}