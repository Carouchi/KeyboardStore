import React, { Component } from "react";
import { Link } from "react-router-dom";

const ShopItem = ({ title }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

function Shop({ items }) {
	return (
		<div>
			{items.map((item) => {
				return <StoreItem title={item} />;
			})}
		</div>
	);
}

export default Store;
