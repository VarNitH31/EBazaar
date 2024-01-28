import React from "react";
import NavBar from "./NavBar";
import Carousel1 from "./Carousel1";
import Categories from "./categories";
import Carousal2 from "./Carousal2";
import Footer from "./Footer";
import styles from '../cssfiles/home.module.css';

const Home = () => {
	return (
		<div className={styles.container} >
			<NavBar />
			<Carousel1 />
			<Categories />
			<h2 id="productgallery">Product Gallery</h2>
			<Carousal2 />
			<Footer />
		</div>
	);
};

export default Home;
