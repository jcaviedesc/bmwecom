import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { TabsLayout, Breadcrumb } from './components'
import Routes, { tabsConfig } from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <TabsLayout tabs={tabsConfig} />
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
