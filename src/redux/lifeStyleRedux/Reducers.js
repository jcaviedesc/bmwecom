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
    maxPrice: 5000000,
    sortBy: {
      value: 'newer',
      label: 'Más Nuevo'
    },
    page: 1
  },
  pagination: {
    page: 1
  },
  products: []
}

export const updateFilters = (state, action) => {
  const newFilters = { ...state.filters, ...action.filters }
  return { ...state, filters: newFilters }
}

export const lifeStylesReducer = createReducer(INITIAL_STATE_LIFESTYLES, {
  [LifestyleTypes.updateFilters.type]: updateFilters
})
