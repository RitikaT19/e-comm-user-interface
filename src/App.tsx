import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { LoginUser } from "./components/Login";
import { ProductListPage } from "./components/ProductListPage";
import { SignUpUser } from "./components/Sign-up";
import { CategoryProvider } from "./context/Category";
import { LoadingContextProvider } from "./context/Loading";
import { ProductProvider } from "./context/Product";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/Cart";
function App() {
  return (
    <>
      <LoadingContextProvider>
        <CategoryProvider>
          <ProductProvider>
            <CartContextProvider>
              <Router>
                <Route exact path="/category/:id" component={ProductListPage} />
                <Route exact path="/sign-up" component={SignUpUser} />
                <Route exact path="/login" component={LoginUser} />
                <Route exact path="/cart" component={Cart} />
              </Router>
            </CartContextProvider>
          </ProductProvider>
        </CategoryProvider>
      </LoadingContextProvider>
    </>
  );
}

export default App;
