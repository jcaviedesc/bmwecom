import React from 'react'
import LifeStylePage from '../pages/Lifestyle'

const DevelopPage = () => <div><h1>in development</h1></div>

export const tabsConfig = {
  'Accesorios para carros': {
    ref: '/accesorios-para-carros'
  },
  'Lifestyle': {
    ref: '/lifestyle'
  },
  'Ofertas': {
    ref: '/ofertas'
  },
  'Novedades': {
    ref: '/novedades'
  }
}

export default {
  '/accesorios-para-carros': {
    component: DevelopPage,
    breadcrumbName: 'Accesorios para carros'
  },
  '/lifestyle': {
    component: LifeStylePage,
    breadcrumbName: 'Lifestyle'
  },
  '/ofertas': {
    component: DevelopPage,
    breadcrumbName: 'Ofertas'
  },
  '/novedades': {
    component: DevelopPage,
    breadcrumbName: 'Novedades'
  },
  '/':{
    component: DevelopPage,
    breadcrumbName: 'Accesorios para carros'
  }
}
