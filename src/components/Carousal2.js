import React from 'react'
import { useState , useRef , useEffect} from 'react';
import '../cssfiles/carousal2.css'
import { Link } from 'react-router-dom';


const Carousal2=()=> {
    const carouselSlidesRef = useRef(null);
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  
    useEffect(() => {
      displayCarousal();
    }, [currentCarouselIndex]);
  
    const displayCarousal = () => {
      if (carouselSlidesRef.current) {
        carouselSlidesRef.current.style.transform = `translateX(${-currentCarouselIndex * 100}%)`;
      }
    };
  
    const nextCarousel = () => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % 4);
    };
  
    const prevCarousel = () => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
    };

  return (
    <>
      <div className="carousel-container">
  
    <div ref={carouselSlidesRef} className="carousel-slides">
     
        <div className="carousel-slide">
            <div className="productdisplay">
               
            <Link to="/i14pro">
             <div className="product">
                 <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
                 <span className="name">Iphone 14 pro</span>
                 <span className="price">Rs1,29,999</span>
                </div>
            </Link>
            <Link to="/oneplus11r">
            <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Oneplus 11R 5G</span>
                <span className="price">Rs39,999</span></div>
            </Link>
             <Link to="/samsungz">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Galaxy Z Fold 4</span>
                <span className="price">Rs1,29,999</span></div>
            </Link>
             <Link to="/asuszephurs">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">ASUS Zephyrus G14</span>
                <span className="price">Rs1,49,999</span></div>
            </Link>
         <Link to="/pavillionx360">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Pavillion x360</span>
                <span className="price">Rs57,900</span></div>
            </Link>
         <Link to="/dellalienware">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Dell Alienware M15</span>
                <span className="price">Rs2,49,999</span></div>
            </Link>
         <Link to="/macair">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Macbook air M2</span>
                <span className="price">Rs1,14,999</span></div>
            </Link>
         <Link to="/rockers450">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Boat rockerz 450</span>
                <span className="price">Rs1,599</span></div>
            </Link>
         <Link to="/zebronicthunder">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Zebronics Thunder</span>
                <span className="price">Rs799</span></div>
            </Link>
         <Link to="/noisevs104">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Noise Buds VS104</span>
                <span className="price">Rs1,799</span></div>
            </Link>
         <Link to="/pebblecosmos">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Pebble Cosmos prime</span>
                <span className="price">Rs3,899</span></div>
            </Link>
         <Link to="/fastreflex">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Fastrack FS1 pro</span>
                <span className="price">Rs2,799</span></div>
            </Link>
            <Link to="/asusrog">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/71m7XVxRD-L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">ASUS Rog Strix G15</span>
                   <span className="price">Rs96,990</span></div>
               </Link>
            <Link to="/asustuf">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/71-Fx3Vfq5L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">ASUS TUF Gaming F15</span>
                   <span className="price">Rs76,990</span></div>
               </Link>
            <Link to="/asusvivo">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/71O7BvBJc8L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">ASUS Vivobook 16x</span>
                   <span className="price">Rs59,999</span></div>
               </Link>
            <Link to="/dell14">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/617yvpfxOpL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">Dell 14</span>
                   <span className="price">Rs39,990</span></div>
               </Link>
            </div>
            </div>
        <div className="carousel-slide">
    <div className="productdisplay">
       
    <Link to="/iphone14">
     <div className="product">
         <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
         <span className="name">Iphone 14 pro</span>
         <span className="price">Rs1,29,999</span>
        </div>
    </Link>
    <Link to="/oneplus11r">
    <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Oneplus 11R 5G</span>
        <span className="price">Rs39,999</span></div>
    </Link>
     <Link to="/galaxyZfold">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Galaxy Z Fold 4</span>
        <span className="price">Rs1,29,999</span></div>
    </Link>
     <Link to="/asuszephurs">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">ASUS Zephyrus G14</span>
        <span className="price">Rs1,49,999</span></div>
    </Link>
 <Link to="/PavillionX360">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pavillion x360</span>
        <span className="price">Rs57,900</span></div>
    </Link>
 <Link to="/dellalienware">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Dell Alienware M15</span>
        <span className="price">Rs2,49,999</span></div>
    </Link>
 <Link to="/macbook">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Macbook air M2</span>
        <span className="price">Rs1,14,999</span></div>
    </Link>
 <Link to="/boatheadphones">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Boat rockerz 450</span>
        <span className="price">Rs1,599</span></div>
    </Link>
 <Link to="/zebronics">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Zebronics Thunder</span>
        <span className="price">Rs799</span></div>
    </Link>
 <Link to="/noise">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Noise Buds VS104</span>
        <span className="price">Rs1,799</span></div>
    </Link>
 <Link to="/pebble">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pebble Cosmos prime</span>
        <span className="price">Rs3,899</span></div>
    </Link>
 <Link to="/fastrack">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Fastrack FS1 pro</span>
        <span className="price">Rs2,799</span></div>
    </Link>
    <Link to="/zebronics">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Zebronics Thunder</span>
           <span className="price">Rs799</span></div>
       </Link>
    <Link to="/noise">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Noise Buds VS104</span>
           <span className="price">Rs1,799</span></div>
       </Link>
    <Link to="/pebble">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Pebble Cosmos prime</span>
           <span className="price">Rs3,899</span></div>
       </Link>
    <Link to="/fastrack">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Fastrack FS1 pro</span>
           <span className="price">Rs2,799</span></div>
       </Link>
    </div>
    </div>
        <div className="carousel-slide">
    <div className="productdisplay">
       
    <Link to="/iphone14">
     <div className="product">
         <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
         <span className="name">Iphone 14 pro</span>
         <span className="price">Rs1,29,999</span>
        </div>
    </Link>
    <Link to="/oneplus11r">
    <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Oneplus 11R 5G</span>
        <span className="price">Rs39,999</span></div>
    </Link>
     <Link to="/galaxyZfold">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Galaxy Z Fold 4</span>
        <span className="price">Rs1,29,999</span></div>
    </Link>
     <Link to="/asuszephurs">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">ASUS Zephyrus G14</span>
        <span className="price">Rs1,49,999</span></div>
    </Link>
 <Link to="/PavillionX360">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pavillion x360</span>
        <span className="price">Rs57,900</span></div>
    </Link>
 <Link to="/dellalienware">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Dell Alienware M15</span>
        <span className="price">Rs2,49,999</span></div>
    </Link>
 <Link to="/macbook">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Macbook air M2</span>
        <span className="price">Rs1,14,999</span></div>
    </Link>
 <Link to="/boatheadphones">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Boat rockerz 450</span>
        <span className="price">Rs1,599</span></div>
    </Link>
 <Link to="/zebronics">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Zebronics Thunder</span>
        <span className="price">Rs799</span></div>
    </Link>
 <Link to="/noisevs104">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Noise Buds VS104</span>
        <span className="price">Rs1,799</span></div>
    </Link>
 <Link to="/pebble">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pebble Cosmos prime</span>
        <span className="price">Rs3,899</span></div>
    </Link>
 <Link to="/fastreflex">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Fastrack FS1 pro</span>
        <span className="price">Rs2,799</span></div>
    </Link>
    <Link to="/zebronics">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Zebronics Thunder</span>
           <span className="price">Rs799</span></div>
       </Link>
    <Link to="/noise">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Noise Buds VS104</span>
           <span className="price">Rs1,799</span></div>
       </Link>
    <Link to="/pebble">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Pebble Cosmos prime</span>
           <span className="price">Rs3,899</span></div>
       </Link>
    <Link to="/fastrack">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Fastrack FS1 pro</span>
           <span className="price">Rs2,799</span></div>
       </Link>
    </div>
    </div>
        <div className="carousel-slide">
    <div className="productdisplay">
       
    <Link to="/iphone14">
     <div className="product">
         <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
         <span className="name">Iphone 14 pro</span>
         <span className="price">Rs1,29,999</span>
        </div>
    </Link>
    <Link to="/oneplus11r">
    <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Oneplus 11R 5G</span>
        <span className="price">Rs39,999</span></div>
    </Link>
     <Link to="/galaxyZfold">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Galaxy Z Fold 4</span>
        <span className="price">Rs1,29,999</span></div>
    </Link>
     <Link to="/asuszephurs">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">ASUS Zephyrus G14</span>
        <span className="price">Rs1,49,999</span></div>
    </Link>
 <Link to="/PavillionX360">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pavillion x360</span>
        <span className="price">Rs57,900</span></div>
    </Link>
 <Link to="/dellalienware">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Dell Alienware M15</span>
        <span className="price">Rs2,49,999</span></div>
    </Link>
 <Link to="/macbook">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Macbook air M2</span>
        <span className="price">Rs1,14,999</span></div>
    </Link>
 <Link to="/boatheadphones">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Boat rockerz 450</span>
        <span className="price">Rs1,599</span></div>
    </Link>
 <Link to="/zebronics">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Zebronics Thunder</span>
        <span className="price">Rs799</span></div>
    </Link>
 <Link to="/noise">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Noise Buds VS104</span>
        <span className="price">Rs1,799</span></div>
    </Link>
 <Link to="/pebble">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pebble Cosmos prime</span>
        <span className="price">Rs3,899</span></div>
    </Link>
 <Link to="/fastrack">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Fastrack FS1 pro</span>
        <span className="price">Rs2,799</span></div>
    </Link>
    <Link to="/zebronics">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Zebronics Thunder</span>
           <span className="price">Rs799</span></div>
       </Link>
    <Link to="/noise">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Noise Buds VS104</span>
           <span className="price">Rs1,799</span></div>
       </Link>
    <Link to="/pebble">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Pebble Cosmos prime</span>
           <span className="price">Rs3,899</span></div>
       </Link>
    <Link to="/fastrack">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Fastrack FS1 pro</span>
           <span className="price">Rs2,799</span></div>
       </Link>
    </div>
    </div>
    </div>
    </div>
    <div className="productbuttons">
    <button    onClick={prevCarousel}>Previous</button>
    <button    onClick={nextCarousel}>Next</button>
    </div>
    </>
  )
}

export default Carousal2
