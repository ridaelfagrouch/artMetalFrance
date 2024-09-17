
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Serviceslider.css";
import {
  BodySlider1,
  BodySlider2,
  BodySlider3,
  BodySlider4,
  BodySlider5,
  BodySlider6,
  BodySlider7,
  BodySlider8,
  BodySlider9,
  BodySlider10,
  
} from "../../assets";

interface SlideProps {
  imgSrc: string;
}

const Slide = ({ imgSrc }: SlideProps) => (
  <div className="slide">
    <img src={imgSrc} alt="Partner logo" />
  </div>
);

const Serviceslider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: BodySlider1,
    },
    {
      imgSrc: BodySlider2,
    },
    {
      imgSrc: BodySlider3,
    },
    {
      imgSrc: BodySlider4,
    },
    {
      imgSrc: BodySlider5,
    },
    {
      imgSrc: BodySlider6,
    },
    {
      imgSrc: BodySlider7,
    },
    {
      imgSrc: BodySlider8,
    },
    {
      imgSrc: BodySlider9,
    },
    {
      imgSrc: BodySlider10,
    }
  ];

  return (
    <div className="container">
      <Slider {...settings} className="customer-logos">
        {slides.map((slide, index) => (
            <Slide key={index} imgSrc={slide.imgSrc}/>
        ))}
      </Slider>
    </div>
  );
};

export default Serviceslider;
