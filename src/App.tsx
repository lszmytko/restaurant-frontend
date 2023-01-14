import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import {
  FrontPage,
  MenuPage,
  OrderPage,
  DeliveryPage,
  CustomerPage
} from "./pages";
import { LogRegContextProvider } from "./context/logregcontext";

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
