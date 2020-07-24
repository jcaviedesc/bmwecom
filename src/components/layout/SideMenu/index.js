import React from 'react'
import { Menu, Slider, Col, Row, Input } from 'antd';

import styles from './styles.module.css'

const { SubMenu } = Menu;

const colors = ['#333333', '#F2994A', '#EB5757', '#27AE60', '#2F80ED', '#56CCF2', '#C4C4C4']

const SideMenu = ({ filters, updateFilter }) => {
  const handleClick = e => {
    updateFilter({ [e.keyPath[1]]: e.keyPath[0]})

  };
  return (
    <div className={styles.sideMenu}>
      <h1>Lifestyle</h1>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={[]}
        defaultOpenKeys={['colores', 'price']}
        mode="inline"
      >
        <SubMenu
          key="category"
          title={
            <span>
              <span>Categorías</span>
            </span>
          }
        >
          <Menu.Item key="aaa">aaa</Menu.Item>
          <Menu.Item key="xxx">xxx</Menu.Item>
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
            {colors.map(color => (
              <div
                key={color}
                role="button"
                onClick={() => updateFilter({ colors: color })}
                style={{
                  backgroundColor: color,
                  width: '20px',
                  height: '20px',
                  marginRight: '10px'
                }}
                className={filters.colors === color ? styles.colorActive : ''}
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
            onChange={updateFilter}
            defaultValue={[20, 1000000]} />
        </Menu.Item>
        <Menu.Item key="inputprecio">
          <Row>
            <Col span={12}>
              <Input />
            </Col>
            <Col span={12}>
              <Input />
            </Col>
          </Row>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export { SideMenu };