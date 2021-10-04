import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductMain from './views/ProductMain';
import Detail from './views/Detail';
import ProductDetails from './views/ProductDetails';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/people/"/>
          <Detail path="/people/:id"/>
          <Update path="/people/:id/edit"/>
          <ProductMain path="/products/"/>
          <ProductDetails path="/products/:id"/>
      </Router>
    </div>
    
  );
}

export default App;
