import React from 'react'
import { Breadcrumb as BreadcrumbComponent } from 'antd';
import {
  useLocation
} from "react-router-dom";
import Routes from '../../../routes'

export const Breadcrumb = () => {
  let location = useLocation();
  return (
    <BreadcrumbComponent>
      <BreadcrumbComponent.Item>Home</BreadcrumbComponent.Item>
      <BreadcrumbComponent.Item>
        {Routes[location.pathname].breadcrumbName}
      </BreadcrumbComponent.Item>
    </BreadcrumbComponent>
  )
}