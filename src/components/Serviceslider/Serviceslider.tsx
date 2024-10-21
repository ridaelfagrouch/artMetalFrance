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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const slides = [
    {
      id: 1,
      imgSrc: BodySlider1,
    },
    {
      id: 2,
      imgSrc: BodySlider2,
    },
    {
      id: 3,
      imgSrc: BodySlider3,
    },
    {
      id: 4,
      imgSrc: BodySlider4,
    },
    {
      id: 5,
      imgSrc: BodySlider5,
    },
    {
      id: 6,
      imgSrc: BodySlider6,
    },
    {
      id: 7,
      imgSrc: BodySlider7,
    },
    {
      id: 8,
      imgSrc: BodySlider8,
    },
    {
      id: 9,
      imgSrc: BodySlider9,
    },
    {
      id: 10,
      imgSrc: BodySlider10,
    },
  ];

  return (
    <div className="slide-container">
      <Slider {...settings} className="customer-logos">
        {slides.map((slide) => (
          <Slide key={slide.id} imgSrc={slide.imgSrc} />
        ))}
      </Slider>
    </div>
  );
};

export default Serviceslider;
