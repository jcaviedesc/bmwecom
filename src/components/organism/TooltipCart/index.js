import React from 'react'
import { Button } from 'antd'
import styles from './tooltipCart.module.css'
import { CartIcon, CheckIcon } from '../../../icons'

const TooltipCart = ({ image, name, refence = "#4235324", quantity, price }) => {
  return (
    <div className={styles.tooltipCart}>
      <div className={styles.content}>
        <div className={styles.closeContainer}>
          <Button type="text">x</Button>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
        </div>
        <span className={styles.name}>{name}</span>
        <span className={styles.reference}>Referencia</span>
        <span className={`${styles.reference} ${styles.refenceCode}`}>{refence}</span>
        <span className={styles.reference}>Cantidad</span>
        <span className={`${styles.reference}`} style={{ marginBottom: "6px" }}>x{quantity}</span>
        <span className={styles.name}>{price}</span>
        <div className={styles.buttons}>
          <Button type="ghost" size="large">
            <div className={styles.cartButton}>
              <CartIcon />
              <span>Ver carrito</span>
            </div>
          </Button>
          <Button type="primary" size="large">Checkout</Button>
        </div>
        <div className={styles.bottom}>
          <CheckIcon />
          <span>Agregado al carrito</span>
        </div>
      </div>
    </div>
  )
}

export { TooltipCart }
