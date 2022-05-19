import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default class Shop extends Component {
	render() {
		function ListItem({ text, price }) {
			return (
				<div>
					<div>{text}</div>
					<div>${price}</div>
				</div>
			);
		}

		function StoreList() {
			const items = [
				{
					title: "Keyboard One",
					price: 55,
				},
				{
					title: "Keyboard Two",
					price: 40,
				},
				{
					title: "Keyboard Three",
					price: 75,
				},
			];

			useEffect(() => {
				axios.get("linktostoreapi").then(({ data }) => {
					console.log(data);
				});
			}, []);

			return (
				<div>
					<ol>
						{items.map((item) => (
							<ListItem text={item.title} price={item.price} />
						))}
					</ol>
				</div>
			);
		}

		return (
			<div className="shopwrapper">
				<div className="shopheader">
					<h1>CustomKeys Current Products</h1>
				</div>
				<div className="shopitems">
					<StoreList />
				</div>
				<input placeholder="Item Name" />
				<button>Add Item</button>
			</div>
		);
	}
}
