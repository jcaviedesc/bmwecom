import React from 'react'
import { Breadcrumb as BreadcrumbComponent } from 'antd';
import {
  useLocation
} from "react-router-dom";
import Routes from '../../../routes'

const Breadcrumb = () => {
  let location = useLocation();
  const currentRoute = Routes.hasOwnProperty(location.pathname)
    ? Routes[location.pathname].breadcrumbName
    : ""
  return (
    <BreadcrumbComponent className="breadcrumb">
      <BreadcrumbComponent.Item>Home</BreadcrumbComponent.Item>
      {location && location.pathname !== undefined && (
        <BreadcrumbComponent.Item>
          {currentRoute}
        </BreadcrumbComponent.Item>
      )}
    </BreadcrumbComponent>
  )
}

export default Breadcrumb