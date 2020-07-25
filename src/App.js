import React, { useEffect, useState, Suspense } from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from './containers/Layout/Header'
import SideMenuMobile from './containers/Layout/SideMenuMobile'
import Routes, { tabsConfig } from './routes'

const BreadcrumbComponent = React.lazy(() => import('./components/atoms/Breadcrumb'))

function App() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const screenWidth = window.screen.width
    if (screenWidth <= 768) {
      setIsMobile(true)
    }
  }, [isMobile])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Router basename="/">
          {isMobile && (<SideMenuMobile />)}
          <Header tabsConfig={tabsConfig} />
          {!isMobile
            ? (<BreadcrumbComponent />)
            : null}
          <Switch>
            {Object.entries(Routes).map(([path, options], i) => (
              <Route key={`r-${path}-${i}`} path={path} component={options.component} />
            ))}
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
