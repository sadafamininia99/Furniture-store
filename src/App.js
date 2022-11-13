import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";



function App() {
    return (
        <div className="conatainer">
            <div className="row">
                <div className="col-md-12">
                    <h1>
                        shopping store
                    </h1>
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
        </div>
    );
}
export default App;

