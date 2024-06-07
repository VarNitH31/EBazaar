//cart.js
import React, { useEffect, useState } from "react";
import "../cssfiles/cart.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {addToCart,clearCartContent,changeQuantity} from "../redux/cart/cartSlicer"

function Cart() {
	const cart=useSelector((state)=>state.cart.value)
	const dispatch=useDispatch();
    const navigate=useNavigate();
	// const handleCartUpdate = (newCart) => {
	// 	updateCart(newCart); 
	//   };

	const [products, setProducts] = useState([]);
	// const [cart, setCart] = useState(initialcart);
    const [totalcost,settotalcost]=useState(0);
	useEffect(() => {
		async function fetchData() {
		  try {
			const response = await axios.get('/products.json');
		    setProducts(response.data);
			settotalcost(calculateTotalCost());
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		} 
		fetchData();
	  }, [ ]);
	  console.log(products);
	  useEffect(()=>{
		settotalcost(calculateTotalCost());
	  },[cart,products])
	  const addCartToHTML = () => {
		console.log(products)
		console.log(cart)
		return cart.map((item) => {
			console.log(item);
		  const product = products.find((p) => p.id == item.product_id);
		  console.log("the added product"+product)
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
					onClick={() => handleQuantityChange({productId:item.product_id,change:-1})}
				  >
					{"<"}
				  </span>
				  <span>{item.quantity}</span>
				  <span
					className="plus"
					onClick={() => handleQuantityChange({productId:item.product_id,change:1})}
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
		dispatch(clearCartContent())
		settotalcost(0);
		window.alert("Cart Cleared");
	};


const handleQuantityChange=(productId,change)=>{
	console.log(productId+" "+change);
	dispatch(changeQuantity(productId,change));
}


const calculateTotalCost = () => {
	let total = 0;
	cart.forEach((item) => {
	  const product = products.find((p) => p.id == item.product_id);
	  if (product) {
		total += product.price * item.quantity;
	  }
	});
	return total;
  };


  const placeOrder=()=>{
	if (cart.length>0) {
		navigate('/address');
	}
	else{
		alert("The cart is empty");
	}
  }

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
					{/* <Link to="/address"> */}
						<button onClick={placeOrder} className="orderbtn">Place Order</button>
					{/* </Link> */}
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Cart;


// const handleQuantityChange = (productId, change) => {
//   const updatedCart = cart
//     .map((item) => {
//       if (item.product_id === productId) {
//         return { ...item, quantity: Math.max(0, item.quantity + change) };
//       }
//       return item;
//     })
//     .filter((item) => item.quantity > 0); // Filter out items with quantity 0

//   setCart(updatedCart);
//   handleCartUpdate(updatedCart);
// };

	//   const addToCart = (productId) => {
	// 	console.log(cart);
	// 	window.alert("Product added to cart");
	// 	let positionThisProductInCart = cart.findIndex(
	// 		(value) => value.product_id === productId
	// 	);
	
	// 	if (cart.length <= 0) {
	// 		setCart([{ product_id: productId, quantity: 1 }]);
	// 	} else if (positionThisProductInCart < 0) {
	// 		const updatedCart = [...cart, { product_id: productId, quantity: 1 }];
	// 		setCart(updatedCart);
	// 		handleCartUpdate(updatedCart);
	// 	} else {
	// 		const updatedCart = [...cart];
	// 		updatedCart[positionThisProductInCart].quantity += 1;
	// 		setCart(updatedCart);
	// 		handleCartUpdate(updatedCart);
	// 	}
	
	// };