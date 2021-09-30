import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductMain from './views/ProductMain';
import Detail from './views/Detail';
import ProductDetails from './views/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/people/"/>
          <Detail path="/people/:id"/>
          <ProductMain path="/products/"/>
          <ProductDetails path="/products/:id"/>
      </Router>
    </div>
    
  );
}

export default App;
