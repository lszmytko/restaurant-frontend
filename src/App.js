import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import DeliveryPage from "./pages/DeliveryPage";
import React from "react";
import { LogRegContextProvider } from "./context/logregcontext.js";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
        <Route path="/order" exact>
          <LogRegContextProvider>
            <OrderPage />
          </LogRegContextProvider>
        </Route>
        <Route path="/delivery" exact>
          <DeliveryPage />
        </Route>
        <Route path="/customer" exact>
          <LogRegContextProvider>
            <CustomerPage />
          </LogRegContextProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
