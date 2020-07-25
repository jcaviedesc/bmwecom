import { createReducer } from '@reduxjs/toolkit'

import AppTypes from './ActionsCreators'

export const INITIAL_STATE_APPLICATION = {
  openSideMenu: false
}
export const openMenu = (state, {payload}) => {
  void(state.openSideMenu = payload)
}

export const appReducer = createReducer(INITIAL_STATE_APPLICATION, {
  [AppTypes.openMenu]: openMenu
})
