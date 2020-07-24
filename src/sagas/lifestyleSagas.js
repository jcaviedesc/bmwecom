import { call, select, put } from 'redux-saga/effects'
import lifeStylesActions, { Selectors } from '../redux/lifeStyleRedux'
import { lifestyleFiltersToApi } from '../transforms/cleanFIlters'
import { ApiToProducts } from '../transforms/apiToProducts';
// export selector for test
export const selectFilters = state => Selectors.getFilters(state.lifestyle)
export const selectProducts = state => Selectors.getProducts(state.lifestyle)

export function* getProductsSagas(api) {
  const filters = yield select(selectFilters)
  const cleanFilters = lifestyleFiltersToApi(filters)
  try {
    const response = yield call(api.getProducts, cleanFilters)
    let products = []

    if (response.status < 300) {
      if (filters.page > 1) {
        products = yield select(selectProducts)
      }
      const productsFinal = products.concat(response.data)
      yield put(lifeStylesActions.productsSuccess(ApiToProducts(productsFinal)))
    } else {
      yield put(lifeStylesActions.productsFailure())
    }
  } catch (error) {
    //TODO tracking error 
    yield put(lifeStylesActions.productsFailure("upss tenemos algunos problemas"))
  }
}