import React from 'react'
import { connect } from 'react-redux'
import { SortFiltersLifeStyles } from '../../components'
import LifestyleActions from '../../redux/lifeStyleRedux'

const Filters = ({ filters, updateFilters }) => {
  return <SortFiltersLifeStyles
    quantity={24}
    activeFilter={filters.sortBy.value}
    onChange={itemSelected => updateFilters({sortBy:itemSelected})} />
}

const mapStateToProps = ({ lifestyle }) => {
  return {
    filters: lifestyle.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilters: filters => dispatch(LifestyleActions.updateFilters(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
