import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselArt() {
  return (
   <>
   <div> from carousel </div>
    <Carousel fade variant="dark">

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://havetimedrinktea.github.io/w03_portfolio_with_bootstrap/images/webdeveloper_peiwang_teanamu_dot_com.png"
          alt="Second slide"
        />

      </Carousel.Item>      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/_UXRUHn7uCZAuWJy93a7xeZ6_FNIsIEogheuyalagekwI7M9Q13dk9EAQrx0BcLqmDU=w1200-h1200-p"
          alt="First slide"
        />

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </>
  );
}
