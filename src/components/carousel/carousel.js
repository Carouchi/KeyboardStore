import React, { Component, useState } from "react";
import Slider from "react-slick";
import key1 from "../../../static/assets/key1.png";
import key2 from "../../../static/assets/key2.png";
import key3 from "../../../static/assets/key3.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [key1, key2, key3];

function Carousel() {
	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};

	return (
		<div className="caroselset">
			<Slider {...settings}>
				{images.map((img, idx) => (
					<div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
						<img src={img} alt={img} />
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Carousel;
