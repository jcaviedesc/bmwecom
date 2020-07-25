import { createReducer } from '@reduxjs/toolkit'

import LifestyleTypes from './ActionsCreators'

export const INITIAL_STATE_LIFESTYLES = {
  filters: {
    category: '',
    fashion: '',
    electronics: '',
    miscellaneous: '',
    collectibles: '',
    colors: '',
    minPrice: 0,
    maxPrice: 0,
    sortBy: {
      value: 'newer',
      label: 'Más Nuevo'
    },
    page: 1
  },
  pagination: {
    page: 1
  },
  products: [],
  loadingProducts: true,
  productsError: ""
}

export const updateFilters = (state, action) => {
  const newFilters = { ...state.filters, ...action.filters }
  return { ...state, filters: newFilters }
}

const productsRequest = state => ({ ...state, loadingProducts: true })

const productsSuccess = (state, { payload }) => {
  return {
    ...state,
    products: payload,
    loadingProducts: false
  }
}

const productsFailure = (state, { payload }) => {
  return {
    ...state,
    productsError: payload,
    products: state.products
  }
}

export const lifeStylesReducer = createReducer(INITIAL_STATE_LIFESTYLES, {
  [LifestyleTypes.updateFilters.type]: updateFilters,
  [LifestyleTypes.productsRequest]: productsRequest,
  [LifestyleTypes.productsSuccess]: productsSuccess,
  [LifestyleTypes.productsFailure]: productsFailure
})
