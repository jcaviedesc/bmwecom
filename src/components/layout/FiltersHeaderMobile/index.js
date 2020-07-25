import React from 'react'
import { Button } from 'antd'
import styles from './styles.module.css'

const FiltersHeaderMobile = () => {
  return (
    <div className={styles.filterHeaderM}>
      <h1>Lifestyle</h1>
      <Button type="text"><span className={styles.more}>ver Filtros</span></Button>
    </div>
  )
}

export { FiltersHeaderMobile }