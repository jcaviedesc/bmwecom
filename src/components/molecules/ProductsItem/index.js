import React from 'react'
import { Button } from 'antd';
import { CartIcon } from '../../../icons'
import styles from "./styles.module.css";

const Icon = () => (
  <div className={styles.icon}>
    <CartIcon />
    +
  </div>
)
const ProductItem = ({ name, subCategory, price, productDiscount, productImg, onAddProduct }) => (
  <article className={styles.productItem}>
    <div className={styles.productImage}>
      <img src={productImg} alt={name} />
    </div>
    <div className={styles.content}>
      <div className={styles.contentText}>
        <span className={styles.name}>{name}</span>
        <span className={styles.category}>{subCategory}</span>
        <span className={`${styles.category} ${styles.discount} `}>{productDiscount}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <div>
        <Button type="primary" icon={<Icon />} size="large" onClick={onAddProduct} />
      </div>
    </div>
  </article>
)

export { ProductItem }
