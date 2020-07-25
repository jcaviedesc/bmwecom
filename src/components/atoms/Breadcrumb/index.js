import React from 'react'
import { Breadcrumb as BreadcrumbComponent } from 'antd';
import {
  useLocation
} from "react-router-dom";
import Routes from '../../../routes'

const Breadcrumb = () => {
  let location = useLocation();
  return (
    <BreadcrumbComponent className="breadcrumb">
      <BreadcrumbComponent.Item>Home</BreadcrumbComponent.Item>
      {location && location.pathname !== undefined && (
        <BreadcrumbComponent.Item>
          {Routes[location.pathname].breadcrumbName}
        </BreadcrumbComponent.Item>
      )}
    </BreadcrumbComponent>
  )
}

export default Breadcrumb