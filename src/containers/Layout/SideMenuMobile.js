import React from 'react'
import { connect } from 'react-redux'
import { SideMenuNavigationMobile } from '../../components'
import AppActions from '../../redux/appRedux'

const SideMenuMobileContainer = ({ openMenu, closeMenu }) => {
  return openMenu
    ? <SideMenuNavigationMobile closeMenu={closeMenu} />
    : null
}

const mapStateToProps = ({ application }) => {
  return {
    openMenu: application.openSideMenu
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeMenu: ()=>dispatch(AppActions.openMenu(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuMobileContainer)