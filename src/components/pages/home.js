import React, { Component } from "react";
import Carousel from "../carousel/carousel";
import { Link } from "react-router-dom";

export default class Home extends Component {
	render() {
		return (
			<div className="homewrapper">
				<div className="homeheader">
					<h1>CustomKeys</h1>
				</div>

				<div className="carouselwrapper">
					<Carousel />
				</div>

				<div className="shopbtn">
					<Link to="/shop">
						<button type="button">Shop Now</button>
					</Link>
				</div>
			</div>
		);
	}
}
