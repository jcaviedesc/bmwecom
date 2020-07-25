import React from 'react'
import { Menu, Button } from 'antd';
import { useHistory } from "react-router-dom";
import styles from './styles.module.css'
import { UserIcon } from '../../../icons'

const SideMenuNavigationMobile = ({closeMenu}) => {
  let history = useHistory();
  const handleClick = e => {
    closeMenu(false)
    history.push(e.key)
  }
  return (
    <div className={styles.sideMenuMobile}>
      <Menu
        onClick={handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={[]}
        defaultOpenKeys={[]}
        mode="inline"
      >
        <Menu.Item key="/accesorios-para-carros">Accesorios</Menu.Item>
        <Menu.Item key="/lifestyle">Lifestyle</Menu.Item>
        <Menu.Item key="/vehiculos-usados">Vehiculos usados</Menu.Item>
        <Menu.Item key="/novedades">Novedades</Menu.Item>
      </Menu>
      <Button type="primary">
        <div className={styles.contentButton}>
          <UserIcon />
          <span>Ingresar/Registrarse</span>
        </div>
      </Button>
    </div>
  )
}

export { SideMenuNavigationMobile }
