import React from 'react';
import { useState, useEffect ,useRef,useCallback } from 'react';
import '../cssfiles/carousal1.css'

const Carousel1 = () => {

  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef(null);

  const plusSlides = useCallback((n) => {
    showSlides(slideIndex + n);
  }, [slideIndex]);

  const showSlides = useCallback((n) => {
    let newSlideIndex = n;
    let slides = slidesRef.current.getElementsByClassName("carousel_slide");

    if (newSlideIndex > slides.length) {
      newSlideIndex = 1;
    }
    if (newSlideIndex < 1) {
      newSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[newSlideIndex - 1].style.display = "block";

    setSlideIndex(newSlideIndex);
  }, [slidesRef, setSlideIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [plusSlides]);

  useEffect(() => {
    // Initial showSlides call
    showSlides(slideIndex);
  }, [slideIndex, showSlides]);



  return (
    <div>
      <div className="button-backwards">

      <ion-icon name="chevron-back-outline" id="button-backwards" className="button-backwards" onClick={() => plusSlides(-1)}></ion-icon>
      </div>
      <div className="poster">
        <ul className="carousel"  ref={slidesRef}>
          <li className="carousel_slide fade">
            <img src="https://m.media-amazon.com/images/G/31/img22/Laptops/Smartchoice/Laptops/Header/Revised/sep_1500x300" alt="" />
          </li>
          <li className="carousel_slide fade">
            <img src="https://m.media-amazon.com/images/G/31/imgg/boat/katana/blade/30th/nov/1500x300" alt="" />
          </li>
          <li className="carousel_slide fade">
            <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/Cathero/M34/D85723568_INWLD-WLD-Samsung-M34-NewLaunch_catpage_1400x800_3" alt="" />
          </li>
          <li className="carousel_slide fade">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/OP12_NewLaunch/Teaser/LP/PC/OP12_LP_DT_1.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className="button-forward">

      <ion-icon name="chevron-forward-outline" className="button-forward" onClick={() => plusSlides(1)}></ion-icon>
      </div>
    </div>
  );
}

export default Carousel1;
