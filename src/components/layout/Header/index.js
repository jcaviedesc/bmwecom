import React from 'react'
import Proptypes from 'prop-types'
import { useHistory } from "react-router-dom";
import { Tabs } from 'antd';
import { UserIcon, CartIcon, SearchIcon } from '../../../icons'
import { TooltipCart } from '../../organism/TooltipCart'
import styles from './styles.module.css'

const { TabPane } = Tabs;

function callback(key, history) {
  history.push(key);
}

const righcontent = (productCart) => {
  const thereIsProduct = Object.keys(productCart).length > 0
  return (
    <div className={styles.rightTabs}>
      <div className={styles.icon}>
        <UserIcon />
      </div>
      <div className={`${styles.icon} ${styles.carIcon}`}>
        <CartIcon />
        {thereIsProduct && (

          <div className={styles.tooltipContent}>
            <TooltipCart
              image={productCart.productImage}
              name={productCart.name}
              quantity={productCart.quantity}
              price={productCart.price}
            />
          </div>)}
      </div>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
    </div>
  )
}
const TabsLayout = ({ tabs, productCart }) => {
  let history = useHistory();
  return (
    <div>
      <Tabs
        defaultActiveKey="/lifestyle"
        onChange={(key) => callback(key, history)}
        tabBarExtraContent={righcontent(productCart)}
        tabBarStyle={{ paddingLeft: 40 }}>
        {Object.entries(tabs)
          .map(([name, props]) => {
            return (
              <TabPane tab={name} key={props.ref} />
            )
          })}
      </Tabs>
    </div>
  )
};

TabsLayout.propTypes = {
  tabs: Proptypes.object.isRequired
}

export {
  TabsLayout
}
