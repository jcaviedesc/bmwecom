import React from 'react'
import LifeStyleFiltersContainer from '../../containers/Lifestyles/filters.container'
import SortFiltersLifeStyles from  '../../containers/Lifestyles/sortFilters.container'
import styles from './styles.module.css'

const LifeStylePage = () => {
  return (
    <div className={styles.lifestyle}>
      <LifeStyleFiltersContainer />
      <div className={styles.lifestyleBody}>
        <SortFiltersLifeStyles />
        {[1,2,3].map(item => (
          <div><label>item</label></div>
        ))}
      </div>
    </div>
  )
}

export default LifeStylePage;