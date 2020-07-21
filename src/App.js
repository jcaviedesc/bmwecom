import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { TabsLayout } from './components'
import Routes, { tabsConfig } from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <TabsLayout tabs={tabsConfig} />
        <Switch>
          {Routes.map((route, i) => (
              <Route key={`r-${route.path}-${i}`} path={route.path} component={route.component} />
            ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
