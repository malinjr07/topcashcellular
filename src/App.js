import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Heading from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import ProductList from "./pages/product-list";
import ProductDetails from "./pages/single-product";
import Supports from "./pages/support";
import Checkout from "./pages/checkout";
import Carts from "./pages/cart";
import Account from "./pages/account";

function App() {
  return (
    <Router>
      <a href="/" className="promotion top-fix green">
        <p>Get 5% extra bonus.</p>
      </a>
      <Heading />
      <Switch>
        <Route path='/' exact> <Home/> </Route>
        <Route path='/category' exact> <ProductList/> </Route>
        <Route path='/category/:sub-category'> <ProductList/> </Route>
        <Route path='/category/:sub-category/:products' exact> <ProductList/> </Route>
        <Route path='/category/:products' exact> <ProductList/> </Route>
        <Route path='/category/:sub-category/:products/details' exact> <ProductDetails/> 
        </Route>
        <Route path='/support'> <Supports/> </Route>
        <Route path='/order/checkout'> <Checkout/> </Route>
        <Route path='/order/cart'> <Carts/> </Route>
        <Route path='/account'> <Account/> </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
