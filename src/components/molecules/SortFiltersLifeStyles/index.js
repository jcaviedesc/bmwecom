import React from 'react'
import { Select } from 'antd';
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const { Option } = Select;

const optionsValues = {
  newer: 'Más nuevo',
  lowerprice: 'Menor precio',
  higherprice: 'Mayor Precio'
}

const SortFiltersLifeStyles = ({ quantity, activeFilter, onChange }) => {
  return (
    <div className={styles.contentRow}>
      <div className={styles.productsQuantityContainer}>
        <span>{quantity} articulos</span>
      </div>
      <div className={styles.dropDown}>
        <span>Ordenar por:</span>
        <Select
          value={activeFilter}
          style={{ width: 120 }}
          bordered={false}
          onChange={value => onChange({
            value,
            label: optionsValues[value]
          })
          }
        >
          {Object.entries(optionsValues).map(([value, label]) => (
            <Option key={value} value={value}>{label}</Option>
          ))}
        </Select>
      </div>
    </div>
  )
}

SortFiltersLifeStyles.propTypes = {
  quantity: PropTypes.number.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export {
  SortFiltersLifeStyles
}
