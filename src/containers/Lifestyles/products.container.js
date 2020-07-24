import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LifestyleActions from '../../redux/lifeStyleRedux'
import CartActions from '../../redux/cartRedux'
import { ProductItem } from '../../components'
import styles from './styles/products.module.css'

const ProductsContainer = ({ getProducts, products, addProduct }) => {
  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div className={styles.productsContainer}>
      {products.map(product => (
        <ProductItem
          name={product.name}
          price={product.price}
          productDiscount={product.price}
          subCategory={product.category}
          productImg={product.productImage}
          onAddProduct={() => addProduct(product)}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ lifestyle }) => {
  return {
    products: lifestyle.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(LifestyleActions.productsRequest()),
    addProduct: product => dispatch(CartActions.addProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
