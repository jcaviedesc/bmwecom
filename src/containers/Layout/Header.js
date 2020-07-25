import React from 'react'
import { connect } from 'react-redux'
import { TabsLayout } from '../../components'
import AppActions from '../../redux/appRedux'

const Header = ({ tabsConfig, currentProductAdded, openMenu }) => {
  return (
    <TabsLayout
      tabs={tabsConfig}
      productCart={currentProductAdded}
      openHamburgerMenu={openMenu}
    />)
}

const mapStateToProps = ({ cart }) => {
  return {
    currentProductAdded: cart.lastProductAdded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openMenu: () => dispatch(AppActions.openMenu(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)