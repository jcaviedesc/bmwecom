import React from 'react'
import { connect } from 'react-redux'
import { SideMenu } from '../../components'
import LifestyleActions from '../../redux/lifeStyleRedux'

const Filters = ({filters, updateFilters}) => {
  return <SideMenu filters={filters} updateFilter={updateFilters}/>
}

const mapStateToProps = ({lifestyle}) =>{
  return {
    filters: lifestyle.filters
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateFilters: filters => dispatch(LifestyleActions.updateFilters(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)