import React from 'react'
import { connect } from 'react-redux'
import { TabsLayout } from '../../components'

const Header = ({tabsConfig, currentProductAdded}) => {
  return (<TabsLayout tabs={tabsConfig} productCart={currentProductAdded}/>)
}

const mapStateToProps = ({ cart }) => {
  return {
    currentProductAdded: cart.lastProductAdded
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)