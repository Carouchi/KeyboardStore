import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import CartContext from "../context/cart/cartcontext";
import CartState from "../context/cart/cartstate";
import CartReducer from "../context/cart/cartreducer";
import key1 from "../../../static/assets/key1.png";
import key2 from "../../../static/assets/key2.png";
import key3 from "../../../static/assets/key3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);

const { addToCart } = useContext(CartContext);

export default class Shop extends Component {
	render() {
		function ListItem({ text, price, image }) {
			return (
				<div>
					<div className="image">
						<img className="productimage" src={image} />
					</div>
					<div>{text}</div>
					<div>${price}</div>
					<button className="addproduct" onClick={() => addToCart(item)}>
						Add To Cart
					</button>
				</div>
			);
		}

		const imageList = [
			{ src: "../../../static/assets/key1.png", title: "key1" },
			{ src: "../../../static/assets/key2.png", title: "key2" },
			{ src: "../../../static/assets/key3.png", title: "key3" },
		];

		imageList.map((index) => <img src={index.src} title={index.title} />);

		function StoreList() {
			const [items] = useState([
				{
					title: "Keyboard One",
					price: 55,
					image: key1,
				},
				{
					title: "Keyboard Two",
					price: 40,
					image: key2,
				},
				{
					title: "Keyboard Three",
					price: 75,
					image: key3,
				},
			]);

			useEffect(() => {
				axios.get("linktostoreapi").then(({ data }) => {
					console.log(data);
				});
			}, []);

			return (
				<div>
					<ol>
						{items.map((item) => (
							<ListItem
								image={item.image}
								text={item.title}
								price={item.price}
							/>
						))}
					</ol>
				</div>
			);
		}

		return (
			<div className="shopwrapper">
				<div className="header">
					<div className="shopheader_left">
						<h1>CustomKeys Products</h1>
					</div>

					<div className="shopheader_right">
						<div className="carticon">
							<a className="tocart" href="/cart">
								<FontAwesomeIcon icon="cart-shopping"></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>

				<div className="shopitems">
					<StoreList />
				</div>
			</div>
		);
	}
}
