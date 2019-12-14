import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import datashopTheme from "@datashop/theme";
import history from "./history";
import App from "./App";
import DetailsComponent from "./components/Details";
import { default as ListingComponent } from "./components/Listing";

/**
 * Define app routes
 * @param {Object} props App props with store data
 */
const ConfigureRoute = props => (
  <Router history={history}>
    <ThemeProvider theme={datashopTheme}>
      <App>
        <Route exact path='/' component={ListingComponent} />
        <Route path='/details/:issueId' component={DetailsComponent} />
      </App>
    </ThemeProvider>
  </Router>
);

export default ConfigureRoute;
