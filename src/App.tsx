import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { LoginUser } from "./components/Login";
import { ProductListPage } from "./components/ProductListPage";
import { SignUpUser } from "./components/Sign-up";
import { CategoryProvider } from "./context/Category";
import { LoadingContextProvider } from "./context/Loading";
import { ProductProvider } from "./context/Product";

function App() {
  return (
    <>
      <LoadingContextProvider>
        <CategoryProvider>
          <ProductProvider>
            <Router>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/category/:slug" component={ProductListPage} />
              <Route exact path="/sign-up" component={SignUpUser} />
              <Route exact path="/login" component={LoginUser} />
            </Router>
          </ProductProvider>
        </CategoryProvider>
      </LoadingContextProvider>
    </>
  );
}

export default App;
