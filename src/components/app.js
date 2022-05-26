import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home";
import Shop from "./pages/shop";
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<Switch>
						<Route exact path="/" render={() => <Home />} />

						<Route path="/shop" render={(props) => <Shop {...props} />} />

						<Route path="/cart" render={(props) => <Cart {...props} />} />
					</Switch>
				</Router>
			</div>
		);
	}
}
