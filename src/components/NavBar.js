import React from "react";
import styles from "../cssfiles/navbar.css";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Cart", url: "/cart" },
	{ name: "Asus Tuf", url: "/asustuf" },
	{ name: "Asus ROG", url: "/asusrog" },
    { name: "Iphone 14", url: "/iphone14" },
    { name: "Iphone 14 pro", url: "/i14pro" },
    { name: "Oneplus 11R 5G", url: "/oneplus11r" },
    { name: "Samsung Galaxy Z Fold 4", url: "/samsungz" },
    { name: "Pavillion x360", url: "/pavillionx360" },
    { name: "Dell Alienware M15", url: "/dellalienware" },
    { name: "Macbook air M2", url: "/macbook" },
    { name: "Boat rockerz 450", url: "/boatheadphones" },
    { name: "Zebronics thunderbolt", url: "/zebronics" },
    { name: "Noise buds vs104", url: "/noise" },
    { name: "Pebble Cosmos prime", url: "/pebble" },
    { name: "Fastrack FS1 pro", url: "/fastrack" }

];

const NavBar = ({isLogged,updateLogged}) => {
	const navigate=useNavigate();
	const [log, setLog] = useState(isLogged?"logout":"login");

	const changeLog=()=>{
		updateLogged(!isLogged);
	}
	const handleLogClick = (e) => {
        e.preventDefault();
        if (!isLogged) {
            changeLog();
            navigate("/signup");
            setLog("Logout");
        } else {
            updateLogged(false);
            setLog("Login");
        }
	}
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase();
		if (query.trim() === '') {
			setSearchResults([]);
		} else {
			const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
			setSearchResults(filteredPages);
		}
	};


	return (
		<div className={styles.container}>
			<div className="nav">
				<div className="logo">
					<span className="icon">
						<ion-icon name="logo-venmo"></ion-icon>
					</span>
				</div>
				<h2 className="ecom">E-Bazaar</h2>
				<div className="box">
					<div className="icon2">
						<ion-icon name="search"></ion-icon>
					</div>
					<input id="search-bar" placeholder="search" type="text" name="" onChange={handleSearch} />
                    {searchResults.length > 0 && (
                        <ul id="search-results">
                            {searchResults.map((result, index) => (
                                <li key={index}>
                                    <Link to={result.url}>{result.name}</Link>
                                </li>
                            ))}
                        </ul>)}
				</div>
				<nav className="navigation">
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/about">About</Link>
					</div>
					<div>
						<Link to="/contact">Contact</Link>
					</div>
					<span className="btnlogin-popup" onClick={handleLogClick}   >
					<a href="">{log}</a>	
					</span>
					<div className="iconcart">
						<Link to="/cart">
							<ion-icon name="cart-outline"></ion-icon>
						</Link>
					</div>

				</nav>
			</div>
		</div>
	);
};

export default NavBar;
