import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import history from './history';
import App from './App';
import DetailsComponent from './components/Details';
import ListingComponent from './components/Listing';

/**
 * Define app routes
 * @param {Object} props App props with store data
 */
const ConfigureRoute = props => (
	<Router history={history}>
		<App>
			<Route exact path='/' component={ListingComponent} />
			<Route path='/details/:issueId' component={DetailsComponent} />
		</App>
	</Router>
);

export default ConfigureRoute;
