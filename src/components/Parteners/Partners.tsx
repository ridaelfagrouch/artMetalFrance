
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css";

interface SlideProps {
  imgSrc: string;
}

const Slide = ({ imgSrc }: SlideProps) => (
  <div className="slide">
    <img src={imgSrc} alt="Partner logo" />
  </div>
);

const Partners = () => {
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
      imgSrc:
        "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
    },
    {
      imgSrc: "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
    },
    {
      imgSrc:
        "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
    },
    {
      imgSrc:
        "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
    },
    {
      imgSrc:
        "https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg",
    },
    {
      imgSrc:
        "https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg",
    },
    {
      imgSrc:
        "https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg",
    },
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

export default Partners;
