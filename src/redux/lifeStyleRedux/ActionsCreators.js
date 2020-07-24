import { createAction } from '@reduxjs/toolkit'

const updateFilters = filters => ({
  type: 'lifestyle/updateFilters',
  filters
})
updateFilters.type = 'lifestyle/updateFilters'

const productsRequest = createAction('lifestyle/productRequest')

const productsSuccess = createAction('lifestyle/productSuccess')

const productsFailure = createAction('lifestyle/productFailure')

export default {
  updateFilters,
  productsRequest,
  productsSuccess,
  productsFailure
}