import React from 'react'
import { Menu, Slider } from 'antd';

import styles from './styles.module.css'

const { SubMenu } = Menu;

const colors = ['#333333', '#F2994A', '#EB5757', '#27AE60', '#2F80ED', '#56CCF2', '#C4C4C4']

const SideMenu = () => {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <div>
      <h1>Lifestyle</h1>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={[]}
        defaultOpenKeys={['colores', 'price']}
        mode="inline"
      >
        <SubMenu
          key="Categorías"
          title={
            <span>
              <span>Categorías</span>
            </span>
          }
        >
          <Menu.Item key="c1">Option 1</Menu.Item>
          <Menu.Item key="c2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="Fashion"
          title={
            <span>
              <span>Fashion</span>
            </span>
          }
        >
          <Menu.Item key="f1">Option 1</Menu.Item>
          <Menu.Item key="f2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="Electrónica"
          title={
            <span>
              <span>Electrónica</span>
            </span>
          }
        >
          <Menu.Item key="e1">Option 1</Menu.Item>
          <Menu.Item key="e2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="Miscelaneos"
          title={
            <span>
              <span>Miscelaneos</span>
            </span>
          }
        >
          <Menu.Item key="m1">Option 1</Menu.Item>
          <Menu.Item key="m2">Option 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="colec">Coleccionables</Menu.Item>
        <Menu.Item key="bicis">Bicicletas</Menu.Item>
        <SubMenu
          key="colores"
          title={
            <span>
              <span>Colores</span>
            </span>
          }
        />
        <Menu.Item key="color1">
          <div className={styles.colorsContainer}>
            {colors.map((color, i) => (
              <div
                key={color}
                style={{
                  backgroundColor: color,
                  width: '20px',
                  height: '20px',
                  marginRight: '10px'
                }}
              />))}
          </div>
        </Menu.Item>
        <SubMenu
          key="price"
          title={
            <span>
              <span>Precio</span>
            </span>
          }
        />
        <Menu.Item key="precio1">
          <Slider
            min={0}
            max={5000000}
            range
            tooltipVisible={false}
            defaultValue={[20, 50]} />
        </Menu.Item>
        <Menu.Item key="inputprecio">
        </Menu.Item>
      </Menu>
    </div>
  )
}

export { SideMenu };