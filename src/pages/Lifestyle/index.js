import React from 'react'
import LifeStyleFiltersContainer from '../../containers/Lifestyles/filters.container'
import SortFiltersLifeStyles from '../../containers/Lifestyles/sortFilters.container'
import ProductsContainer from '../../containers/Lifestyles/products.container'
import { FiltersHeaderMobile } from '../../components'
import styles from './styles.module.css'

const LifeStylePage = () => {
  return (
    <div className={styles.lifestyle}>
      <LifeStyleFiltersContainer />
      <div className={styles.lifestyleBody}>
        <FiltersHeaderMobile />
        <SortFiltersLifeStyles />
        <ProductsContainer />
      </div>
    </div>
  )
}

export default LifeStylePage;