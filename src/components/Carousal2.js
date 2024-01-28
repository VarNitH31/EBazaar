import React from 'react'
import { useState , useRef , useEffect} from 'react';
import '../cssfiles/carousal2.css'



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
               
            <a href="productpages/iphone14.html">
             <div className="product">
                 <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
                 <span className="name">Iphone 14 pro</span>
                 <span className="price">Rs1,29,999</span>
                </div>
            </a>
            <a href="productpages/oneplus11r.html">
            <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Oneplus 11R 5G</span>
                <span className="price">Rs39,999</span></div>
            </a>
             <a href="productpages/galaxyZfold.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Galaxy Z Fold 4</span>
                <span className="price">Rs1,29,999</span></div>
            </a>
             <a href="productpages/asuszephurs.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">ASUS Zephyrus G14</span>
                <span className="price">Rs1,49,999</span></div>
            </a>
         <a href="productpages/PavillionX360.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Pavillion x360</span>
                <span className="price">Rs57,900</span></div>
            </a>
         <a href="productpages/dellalienware.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Dell Alienware M15</span>
                <span className="price">Rs2,49,999</span></div>
            </a>
         <a href="productpages/macbook.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Macbook air M2</span>
                <span className="price">Rs1,14,999</span></div>
            </a>
         <a href="productpages/boatheadphones.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Boat rockerz 450</span>
                <span className="price">Rs1,599</span></div>
            </a>
         <a href="productpages/zebronics.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Zebronics Thunder</span>
                <span className="price">Rs799</span></div>
            </a>
         <a href="productpages/noise.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Noise Buds VS104</span>
                <span className="price">Rs1,799</span></div>
            </a>
         <a href="productpages/pebble.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Pebble Cosmos prime</span>
                <span className="price">Rs3,899</span></div>
            </a>
         <a href="productpages/fastrack.html">
             <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                <span className="name">Fastrack FS1 pro</span>
                <span className="price">Rs2,799</span></div>
            </a>
            <a href="productpages/asusrog.html">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/71m7XVxRD-L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">ASUS Rog Strix G15</span>
                   <span className="price">Rs96,990</span></div>
               </a>
            <a href="productpages/asustuf.html">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/71-Fx3Vfq5L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">ASUS TUF Gaming F15</span>
                   <span className="price">Rs76,990</span></div>
               </a>
            <a href="productpages/asusvivo.html">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/71O7BvBJc8L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">ASUS Vivobook 16x</span>
                   <span className="price">Rs59,999</span></div>
               </a>
            <a href="productpages/fastrack.html">
                <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
                   <span className="name">Fastrack FS1 pro</span>
                   <span className="price">Rs2,799</span></div>
               </a>
            </div>
            </div>
        <div className="carousel-slide">
    <div className="productdisplay">
       
    <a href="productpages/iphone14.html">
     <div className="product">
         <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
         <span className="name">Iphone 14 pro</span>
         <span className="price">Rs1,29,999</span>
        </div>
    </a>
    <a href="productpages/oneplus11r.html">
    <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Oneplus 11R 5G</span>
        <span className="price">Rs39,999</span></div>
    </a>
     <a href="productpages/galaxyZfold.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Galaxy Z Fold 4</span>
        <span className="price">Rs1,29,999</span></div>
    </a>
     <a href="productpages/asuszephurs.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">ASUS Zephyrus G14</span>
        <span className="price">Rs1,49,999</span></div>
    </a>
 <a href="productpages/PavillionX360.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pavillion x360</span>
        <span className="price">Rs57,900</span></div>
    </a>
 <a href="productpages/dellalienware.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Dell Alienware M15</span>
        <span className="price">Rs2,49,999</span></div>
    </a>
 <a href="productpages/macbook.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Macbook air M2</span>
        <span className="price">Rs1,14,999</span></div>
    </a>
 <a href="productpages/boatheadphones.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Boat rockerz 450</span>
        <span className="price">Rs1,599</span></div>
    </a>
 <a href="productpages/zebronics.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Zebronics Thunder</span>
        <span className="price">Rs799</span></div>
    </a>
 <a href="productpages/noise.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Noise Buds VS104</span>
        <span className="price">Rs1,799</span></div>
    </a>
 <a href="productpages/pebble.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pebble Cosmos prime</span>
        <span className="price">Rs3,899</span></div>
    </a>
 <a href="productpages/fastrack.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Fastrack FS1 pro</span>
        <span className="price">Rs2,799</span></div>
    </a>
    <a href="productpages/zebronics.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Zebronics Thunder</span>
           <span className="price">Rs799</span></div>
       </a>
    <a href="productpages/noise.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Noise Buds VS104</span>
           <span className="price">Rs1,799</span></div>
       </a>
    <a href="productpages/pebble.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Pebble Cosmos prime</span>
           <span className="price">Rs3,899</span></div>
       </a>
    <a href="productpages/fastrack.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Fastrack FS1 pro</span>
           <span className="price">Rs2,799</span></div>
       </a>
    </div>
    </div>
        <div className="carousel-slide">
    <div className="productdisplay">
       
    <a href="productpages/iphone14.html">
     <div className="product">
         <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
         <span className="name">Iphone 14 pro</span>
         <span className="price">Rs1,29,999</span>
        </div>
    </a>
    <a href="productpages/oneplus11r.html">
    <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Oneplus 11R 5G</span>
        <span className="price">Rs39,999</span></div>
    </a>
     <a href="productpages/galaxyZfold.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Galaxy Z Fold 4</span>
        <span className="price">Rs1,29,999</span></div>
    </a>
     <a href="productpages/asuszephurs.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">ASUS Zephyrus G14</span>
        <span className="price">Rs1,49,999</span></div>
    </a>
 <a href="productpages/PavillionX360.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pavillion x360</span>
        <span className="price">Rs57,900</span></div>
    </a>
 <a href="productpages/dellalienware.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Dell Alienware M15</span>
        <span className="price">Rs2,49,999</span></div>
    </a>
 <a href="productpages/macbook.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Macbook air M2</span>
        <span className="price">Rs1,14,999</span></div>
    </a>
 <a href="productpages/boatheadphones.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Boat rockerz 450</span>
        <span className="price">Rs1,599</span></div>
    </a>
 <a href="productpages/zebronics.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Zebronics Thunder</span>
        <span className="price">Rs799</span></div>
    </a>
 <a href="productpages/noise.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Noise Buds VS104</span>
        <span className="price">Rs1,799</span></div>
    </a>
 <a href="productpages/pebble.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pebble Cosmos prime</span>
        <span className="price">Rs3,899</span></div>
    </a>
 <a href="productpages/fastrack.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Fastrack FS1 pro</span>
        <span className="price">Rs2,799</span></div>
    </a>
    <a href="productpages/zebronics.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Zebronics Thunder</span>
           <span className="price">Rs799</span></div>
       </a>
    <a href="productpages/noise.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Noise Buds VS104</span>
           <span className="price">Rs1,799</span></div>
       </a>
    <a href="productpages/pebble.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Pebble Cosmos prime</span>
           <span className="price">Rs3,899</span></div>
       </a>
    <a href="productpages/fastrack.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Fastrack FS1 pro</span>
           <span className="price">Rs2,799</span></div>
       </a>
    </div>
    </div>
        <div className="carousel-slide">
    <div className="productdisplay">
       
    <a href="productpages/iphone14.html">
     <div className="product">
         <img src=" https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>
         <span className="name">Iphone 14 pro</span>
         <span className="price">Rs1,29,999</span>
        </div>
    </a>
    <a href="productpages/oneplus11r.html">
    <div className="product"> <img src="https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Oneplus 11R 5G</span>
        <span className="price">Rs39,999</span></div>
    </a>
     <a href="productpages/galaxyZfold.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Galaxy Z Fold 4</span>
        <span className="price">Rs1,29,999</span></div>
    </a>
     <a href="productpages/asuszephurs.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/81m-xYfxznL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">ASUS Zephyrus G14</span>
        <span className="price">Rs1,49,999</span></div>
    </a>
 <a href="productpages/PavillionX360.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61yI6BW+wbL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pavillion x360</span>
        <span className="price">Rs57,900</span></div>
    </a>
 <a href="productpages/dellalienware.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51dooiy0IvL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Dell Alienware M15</span>
        <span className="price">Rs2,49,999</span></div>
    </a>
 <a href="productpages/macbook.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Macbook air M2</span>
        <span className="price">Rs1,14,999</span></div>
    </a>
 <a href="productpages/boatheadphones.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Boat rockerz 450</span>
        <span className="price">Rs1,599</span></div>
    </a>
 <a href="productpages/zebronics.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Zebronics Thunder</span>
        <span className="price">Rs799</span></div>
    </a>
 <a href="productpages/noise.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Noise Buds VS104</span>
        <span className="price">Rs1,799</span></div>
    </a>
 <a href="productpages/pebble.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Pebble Cosmos prime</span>
        <span className="price">Rs3,899</span></div>
    </a>
 <a href="productpages/fastrack.html">
     <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
        <span className="name">Fastrack FS1 pro</span>
        <span className="price">Rs2,799</span></div>
    </a>
    <a href="productpages/zebronics.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61smYWXWx9L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Zebronics Thunder</span>
           <span className="price">Rs799</span></div>
       </a>
    <a href="productpages/noise.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/51apXDsv2CL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Noise Buds VS104</span>
           <span className="price">Rs1,799</span></div>
       </a>
    <a href="productpages/pebble.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/61Jayni-kPL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Pebble Cosmos prime</span>
           <span className="price">Rs3,899</span></div>
       </a>
    <a href="productpages/fastrack.html">
        <div className="product"> <img src="https://m.media-amazon.com/images/I/613-tICaGQL._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
           <span className="name">Fastrack FS1 pro</span>
           <span className="price">Rs2,799</span></div>
       </a>
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
