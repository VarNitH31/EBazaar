import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Asustuf from './components/Products/Asustuf';
import Asusrog from './components/Products/Asusrog';
import Asus from './components/companies/Asus';
import './index.css';
import Dell from './components/companies/Dell';
import Hp from './components/companies/Hp';
import Apple from './components/companies/Apple';
import Cart from './components/Cart';
import Address from './components/Address';
import Payments from './components/Payments';
import Mcard from './components/paymentmode/Mcard';
import Upi from './components/paymentmode/Upi';
import Visa from './components/paymentmode/Visa';
import Boat from './components/companies/Boat';
import Fire from './components/companies/Fire';
import Ptron from './components/companies/Ptron';
import Zebronics from './components/companies/Zebronics';
import Samsung from './components/companies/Samsung';
import Noise from './components/companies/Noise';
import Iphone from './components/companies/Iphone';
import About from './components/About';
import Contact from './components/Contact';

import Samsung21 from './components/Products/Samsung21';
import Ptron2 from './components/Products/Ptron2';
import Ptron1 from './components/Products/Ptron1';
import Pavillionx360 from './components/Products/Pavilionx360';
import NoiseVs104 from './components/Products/NoiseVs104';
import Noisebud from './components/Products/Noisebud';
import Macpro from './components/Products/Macpro';
import Macair from './components/Products/Macair';
import Hp14 from './components/Products/Hp14';
import Firevega from './components/Products/Firevega';
import Firerigel from './components/Products/Firerigel';
import Fastreflex from './components/Products/Fastreflex';
import Fastinvoke from './components/Products/Fastinvoke';
import Dellg15 from './components/Products/Dellg15';
import Dell14 from './components/Products/Dell14';
import Boat551 from './components/Products/Boat551';
import Boat450 from './components/Products/Boat450';
import SamsungZ from './components/Products/SamsungZ';
import Fastrack from './components/companies/Fastrack';




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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

        <Route path='/asus' element={<Asus/>}/>
        <Route path='/dell' element={<Dell/>}/>
        <Route path='/hp' element={<Hp/>}/>
        <Route path='/apple' element={<Apple/>}/>
        <Route path='/boat' element={<Boat/>}/>
        <Route path='/iphone' element={<Iphone/>}/>
        <Route path='/noise' element={<Noise/>}/>
        <Route path='/samsung' element={<Samsung/>}/>
        <Route path='/zebronics' element={<Zebronics/>}/>
        <Route path='/ptron' element={<Ptron/>}/>
        <Route path='/firebolt' element={<Fire/>}/>
        <Route path='/fastrack' element={<Fastrack/>}/>
        
        
        <Route path='/cart' element={<Cart cart={cart}/>}/>
        
        <Route path='/address' element={<Address/>}/>

        <Route path='/payment' element={<Payments/>}/>

        <Route path='/mastercard' element={<Mcard/>}/>
        <Route path='/upi' element={<Upi/>}/>
        <Route path='/visa' element={<Visa/>}/>

        <Route path='/asustuf' element={<Asustuf addToCart={addToCart}/>}/>
        <Route path='/asusrog' element={<Asusrog addToCart={addToCart}/>}/>
        <Route path='/samsungz' element={<SamsungZ addToCart={addToCart}/>}/>
    
        <Route path='/samsung21' element={<Samsung21 addToCart={addToCart}/>}/>
        <Route path='/ptron2' element={<Ptron2 addToCart={addToCart}/>}/>
        <Route path='/ptron1' element={<Ptron1 addToCart={addToCart}/>}/>
        <Route path='/pavillionx360' element={<Pavillionx360 addToCart={addToCart}/>}/>
        <Route path='/noisevs104' element={<NoiseVs104 addToCart={addToCart}/>}/>
        <Route path='/noisebud' element={<Noisebud addToCart={addToCart}/>}/>
        <Route path='/macpro' element={<Macpro addToCart={addToCart}/>}/>
        <Route path='/macair' element={<Macair addToCart={addToCart}/>}/>
        <Route path='/hp14' element={<Hp14 addToCart={addToCart}/>}/>
        <Route path='/firevega' element={<Firevega addToCart={addToCart}/>}/>
        <Route path='/firerigel' element={<Firerigel addToCart={addToCart}/>}/>
        <Route path='/fastreflex' element={<Fastreflex addToCart={addToCart}/>}/>
        <Route path='/fastinvoke' element={<Fastinvoke addToCart={addToCart}/>}/>
        <Route path='/dellg15' element={<Dellg15 addToCart={addToCart}/>}/>
        <Route path='/dell14' element={<Dell14 addToCart={addToCart}/>}/>
        <Route path='/boat551' element={<Boat551 addToCart={addToCart}/>}/>
        <Route path='/boat450' element={<Boat450 addToCart={addToCart}/>}/>



      </Routes>
    </Router>
  );
}

export default App;
