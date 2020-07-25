import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Breadcrumb } from './components'
import Header from './containers/Layout/Header'
import Routes, { tabsConfig } from './routes'

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header tabsConfig={tabsConfig} />
        <Breadcrumb />
        <Switch>
          {Object.entries(Routes).map(([path, options], i) => (
            <Route key={`r-${path}-${i}`} path={path} component={options.component} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
