import React, { useEffect, useState } from "react";
import "../cssfiles/cart.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";



function Cart({ cart: initialcart }) {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState(initialcart);
    const [totalcost,settotalcost]=useState(0);
	useEffect(() => {
		axios.get('/products.json')
		  .then(response => {
			setProducts(response.data);
		  })
		  .catch(error => {
			console.error('Error fetching data:', error);
		  });
	  
		settotalcost(calculateTotalCost());
	  }, [cart, products]);
      
	const addToCart = (productId) => {
		window.alert("Product added to cart");
		let positionThisProductInCart = cart.findIndex(
			(value) => value.product_id === productId
		);

		if (cart.length <= 0) {
			setCart([{ product_id: productId, quantity: 1 }]);
		} else if (positionThisProductInCart < 0) {
			setCart([...cart, { product_id: productId, quantity: 1 }]);
		} else {
			const updatedCart = [...cart];
			updatedCart[positionThisProductInCart].quantity += 1;
			setCart(updatedCart);
		}

	
	};


	const addCartToHTML = () => {
		return cart.map((item) => {
			const product = products.find((p) => p.id === item.product_id);
			if (product) {
				return (

					<div key={item.product_id} className="item">
						<div className="itemdisplay">
							<img src={product.image} alt="" />
							<div className="cartname">{product.name}</div>
						</div>
						<div className="cartprice">
							&#8377; {product.price * item.quantity}
						</div>
						<div className="quantity">
							<span
								className="minus"
								onClick={() => handleQuantityChange(item.product_id, -1)}
							>
								{"<"}
							</span>
							<span>{item.quantity}</span>
							<span
								className="plus"
								onClick={() => handleQuantityChange(item.product_id, 1)}
							>
								{">"}
							</span>
						</div>
					</div>
				);
			} else {
				return null;
			}
		});
	};

	const clearCart = () => {
		setCart([]);
		settotalcost(0);
		window.alert("Cart Cleared");
	};

const handleQuantityChange = (productId, change) => {
  const updatedCart = cart
    .map((item) => {
      if (item.product_id === productId) {
        return { ...item, quantity: Math.max(0, item.quantity + change) };
      }
      return item;
    })
    .filter((item) => item.quantity > 0); // Filter out items with quantity 0

  setCart(updatedCart);
  
};


const calculateTotalCost = () => {
	let total = 0;
	cart.forEach((item) => {
	  const product = products.find((p) => p.id === item.product_id);
	  if (product) {
		total += product.price * item.quantity;
	  }
	});
	return total;
  };


	return (
		<div>
			<NavBar />
			<h2 id="cartheading">Shopping Cart</h2>
			<div className="cartcontainer">
				<div className="cartsubheading">
					<span>Product</span>
					<span>Price</span>
					<span>Quantity</span>
				</div>
				<div className="cartlist">{addCartToHTML()}</div>
			</div>
			<div className="Totalcost">
				<p>Total cost: Rs {totalcost} </p>
			</div>
			<div className="cartbtn">
				<div className="clearCart">
					<button className="clearCartbtn" onClick={clearCart}>
						Clear Cart
					</button>
				</div>
				<div className="placeorder">
					<Link to="/address">
						<button className="orderbtn">Place Order</button>
					</Link>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Cart;