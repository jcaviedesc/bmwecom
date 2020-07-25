import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import LifestyleActions from '../../redux/lifeStyleRedux'
import CartActions from '../../redux/cartRedux'
import { ProductItem } from '../../components'
import styles from './styles/products.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsContainer = ({ getProducts, products, addProduct, updateFilters, filters }) => {
  useEffect(() => {
    getProducts()
  }, [getProducts])
  const fetchData = () => {
    updateFilters({ page: filters.page + 1 })
  }
  return (
    <InfiniteScroll
      dataLength={products.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className={styles.productsContainer}
    >
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
    </InfiniteScroll>
  )
}

const mapStateToProps = ({ lifestyle }) => {
  return {
    products: lifestyle.products,
    filters: lifestyle.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(LifestyleActions.productsRequest()),
    addProduct: product => dispatch(CartActions.addProduct(product)),
    updateFilters: filters => dispatch(LifestyleActions.updateFilters(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
