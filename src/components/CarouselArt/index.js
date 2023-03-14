import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

export default function CarouselArt() {
  return (
   <>
   <div className="rhsPortfolioArt">
    <Carousel fade variant="dark" center>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh5.googleusercontent.com/RdlfAR1YyrpjRmMbvVOONzffZqnRV9h0PzLgJNsTEA6PJgDqEUJsVCucJ1cUxL-M0vc=w600-h600-p"
          alt="boymonk"
        />

      </Carousel.Item>      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/_UXRUHn7uCZAuWJy93a7xeZ6_FNIsIEogheuyalagekwI7M9Q13dk9EAQrx0BcLqmDU=w600-h600-p"
          alt="snowtea"
        />

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh5.googleusercontent.com/1ILlRDQsNVHhBmSoIEOnX2eSgSRC1yK_8X1JKEwzv_AAXsLJzLIHh-Qgnok5ZCXqk9Y=w600-h600-p"
          alt="easter"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh6.googleusercontent.com/gEbAkY_5pDNH0w4bYqHH4s9IPZdv9G6uYu3pZ8sRupLX0hiZAlv4c4RFx1YnmUspn8Y=w600-h600-p"
          alt="inthemoment"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh5.googleusercontent.com/FlJp1IjsDBasbrI3dMQPkhBUkrwXU6ZnFgN5-r474cRqSCcGYCDGLSCZqCGhqGw5lts=w600-h600-p"
          alt="apple"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh5.googleusercontent.com/GogmxlpIMmNOUpc__luUjvBRFb56vkskuTw_faYpgi-6UpOeP9k28Z517XF4Um7xY40=w600-h600-p"
          alt="teaLeaf"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/WsURn5Rx2RZJUIHkmM49umUv53cdww3ANWeP0bZNmOonwRSEgpVo4FPtYie8uwvsULc=w600-h600-p"
          alt="toastingtea"
        />

      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}
