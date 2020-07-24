import React from 'react'
import { connect } from 'react-redux'
import { SortFiltersLifeStyles } from '../../components'
import LifestyleActions from '../../redux/lifeStyleRedux'

const Filters = ({ productsQuantity, orderBy, updateFilters }) => {
  return <SortFiltersLifeStyles
    quantity={productsQuantity}
    activeFilter={orderBy}
    onChange={itemSelected => updateFilters({ sortBy: itemSelected })} />
}

const mapStateToProps = ({ lifestyle }) => {
  return {
    productsQuantity: lifestyle.products.length,
    orderBy: lifestyle.filters.sortBy.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilters: filters => dispatch(LifestyleActions.updateFilters(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
