import { FC, memo, useState } from "react";
import Slider, { Settings } from "react-slick";
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

interface Slide {
  readonly id: number;
  readonly imgSrc: string;
  readonly alt: string;
}

interface SlideProps {
  imgSrc: string;
  alt: string;
}

const slides: readonly Slide[] = [
  {
    id: 1,
    imgSrc: BodySlider1,
    alt: "Partner logo 1",
  },
  {
    id: 2,
    imgSrc: BodySlider2,
    alt: "Partner logo 2",
  },
  {
    id: 3,
    imgSrc: BodySlider3,
    alt: "Partner logo 3",
  },
  {
    id: 4,
    imgSrc: BodySlider4,
    alt: "Partner logo 4",
  },
  {
    id: 5,
    imgSrc: BodySlider5,
    alt: "Partner logo 5",
  },
  {
    id: 6,
    imgSrc: BodySlider6,
    alt: "Partner logo 6",
  },
  {
    id: 7,
    imgSrc: BodySlider7,
    alt: "Partner logo 7",
  },
  {
    id: 8,
    imgSrc: BodySlider8,
    alt: "Partner logo 8",
  },
  {
    id: 9,
    imgSrc: BodySlider9,
    alt: "Partner logo 9",
  },
  {
    id: 10,
    imgSrc: BodySlider10,
    alt: "Partner logo 10",
  },
] as const;

const Slide: FC<SlideProps> = memo(({ imgSrc, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
  };

  return (
    <div className={`slide ${isLoading ? 'loading' : ''}`}>
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className={isLoaded ? 'loaded' : ''}
        onLoad={handleImageLoad}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
});

Slide.displayName = "Slide";

const ServiceSlider: FC = () => {
  const settings: Settings = {
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

  return (
    <div className="slide-container">
      <Slider {...settings} className="customer-logos">
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            imgSrc={slide.imgSrc}
            alt={slide.alt}
          />
        ))}
      </Slider>
    </div>
  );
};

export default memo(ServiceSlider);