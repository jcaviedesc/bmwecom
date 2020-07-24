import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LifestyleActions from '../../redux/lifeStyleRedux'

const ProductsContainer = ({ getProducts }) => {
  useEffect(() => {
    getProducts()
  }, [getProducts])
  return (
    <div><label>hola</label></div>
  )
}

const mapStateToProps = ({ lifestyle }) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(LifestyleActions.productsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
