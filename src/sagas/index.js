import { all, takeLatest } from 'redux-saga/effects'
import Api from '../services/apiServices'
/* ------------- Types ------------- */
import LifestyleTypes from '../redux/lifeStyleRedux'
/* ------------- Sagas ------------- */
import { getProductsSagas } from './lifestyleSagas'

export const api = Api.init()
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(LifestyleTypes.productsRequest.type, getProductsSagas, api),
    takeLatest(LifestyleTypes.updateFilters.type, getProductsSagas,api) 
  ])
}