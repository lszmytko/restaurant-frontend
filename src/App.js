import { FrontImage, Navigation } from "./components/index.js";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import DeliveryPage from "./pages/DeliveryPage";
import React from "react";
import { LogRegContextProvider } from "./context/logregcontext.js";
import CustomerPage from "./pages/CustomerPage.js";

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
