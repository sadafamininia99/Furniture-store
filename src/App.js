import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React+Redux Shopping Cart Example</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>

    </div>
  );
};

export default App;
