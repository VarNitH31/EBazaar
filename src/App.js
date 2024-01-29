import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Asustuf from './components/Asustuf';
import Asusrog from './components/Asusrog';
import Asus from './components/companies/Asus';
import './index.css';
import Dell from './components/companies/Dell';
import Hp from './components/companies/Hp';
import Apple from './components/companies/Apple';
import Cart from './components/Cart';
import Address from './components/Address';
import Payments from './components/Payments';




function App() {
   
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    window.alert('Product added to cart');
    let positionThisProductInCart = cart.findIndex((value) => value.product_id === productId);

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


  return (
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/asustuf' element={<Asustuf/>}/>
        <Route path='/asusrog' element={<Asusrog addToCart={addToCart}/>}/>
        <Route path='/asus' element={<Asus/>}/>
        <Route path='/dell' element={<Dell/>}/>
        <Route path='/hp' element={<Hp/>}/>
        <Route path='/apple' element={<Apple/>}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/payment' element={<Payments/>}/>

      </Routes>
    </Router>
  );
}

export default App;
