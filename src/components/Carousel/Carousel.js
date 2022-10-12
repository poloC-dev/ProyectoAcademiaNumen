import React from 'react';
import "./carousel.css";
import Slider from "react-slick";
import imagen from "./imagesCarousel/food1-01.jpg";
import imagen2 from "./imagesCarousel/food2.jpg";
import imagen3 from "./imagesCarousel/food3-01.jpg";
import imagen4 from "./imagesCarousel/food4-01.jpg";
import imagen5 from "./imagesCarousel/food5-01.jpg";
import imagen6 from "./imagesCarousel/food6-01.jpg";
import imagen7 from "./imagesCarousel/food7-01.jpg";
import imagen8 from "./imagesCarousel/food8-01.jpg";
import imagen9 from "./imagesCarousel/food9-01.jpg";
import imagen10 from "./imagesCarousel/food10-01.jpg";

// FLECHAS:

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange"  }}
      onClick={onClick}
    />
  );
}

// IMAGENES:

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
    <div className="carouselSeccion">
      <div>
        <span className='titlesC'>
          <p className='titleC'>@PremiumBakeryQuality </p>
          <p className='titleC2'> on Instagram</p>
        </span>
          <Slider {...settings} className="carousel">
            <div>
              <div style={{ backgroundImage: `url(${imagen})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen2})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen3})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen4})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen5})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen6})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen7})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen8})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen9})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${imagen10})`, width: 186, height: 186, backgroundSize: 156, backgroundPosition: "center"}} className="imageCarousel"></div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Carousel