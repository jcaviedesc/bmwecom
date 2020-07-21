import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { TabsLayout } from './components'

function App() {
  return (
    <div className="App">
      <TabsLayout tabs={{
        'Accesorios para carros':{
          ref:'/accesorios-para-carros'
        },
        'Lifestyle':{
          ref: '/lifestyle'
        },
        'Ofertas': {
          ref: '/ofertas'
        },
        'Novedades':{
          ref: '/novedades'
        }
      }}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
