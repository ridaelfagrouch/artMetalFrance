import { useState, useEffect, useCallback, FC, memo } from "react";
import "./BodyHeader.css";
import {
  BodyHeaderImage1,
  BodyHeaderImage2,
  BodyHeaderImage3,
  BodyHeaderImage4,
  BodyHeaderImage5,
  BodyHeaderImage6,
} from "../../assets";

interface BlogSlide {
  id: string;
  imgSrc: {
    default: string;
    small: string;
    medium: string;
    large: string;
  };
  date: string;
  title: string;
  text: string;
}

// Constants
const SLIDE_TRANSITION_DELAY = 500;
const AUTO_SLIDE_INTERVAL = 5000;

const blogSlides: readonly BlogSlide[] = [
  {
    id: "slide-1",
    imgSrc: {
      default: BodyHeaderImage1,
      small: `${BodyHeaderImage1}?w=300`,
      medium: `${BodyHeaderImage1}?w=600`,
      large: `${BodyHeaderImage1}?w=900`,
    },
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor 1",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 1",
  },
  {
    id: "slide-2",
    imgSrc: {
      default: BodyHeaderImage2,
      small: `${BodyHeaderImage2}?w=300`,
      medium: `${BodyHeaderImage2}?w=600`,
      large: `${BodyHeaderImage2}?w=900`,
    },
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor 2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 2",
  },
  {
    id: "slide-3",
    imgSrc: {
      default: BodyHeaderImage3,
      small: `${BodyHeaderImage3}?w=300`,
      medium: `${BodyHeaderImage3}?w=600`,
      large: `${BodyHeaderImage3}?w=900`,
    },
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor 3",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 3",
  },
  {
    id: "slide-4",
    imgSrc: {
      default: BodyHeaderImage4,
      small: `${BodyHeaderImage4}?w=300`,
      medium: `${BodyHeaderImage4}?w=600`,
      large: `${BodyHeaderImage4}?w=900`,
    },
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor 4",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 4",
  },
  {
    id: "slide-5",
    imgSrc: {
      default: BodyHeaderImage5,
      small: `${BodyHeaderImage5}?w=300`,
      medium: `${BodyHeaderImage5}?w=600`,
      large: `${BodyHeaderImage5}?w=900`,
    },
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor 5",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 5",
  },
  {
    id: "slide-6",
    imgSrc: {
      default: BodyHeaderImage6,
      small: `${BodyHeaderImage6}?w=300`,
      medium: `${BodyHeaderImage6}?w=600`,
      large: `${BodyHeaderImage6}?w=900`,
    },
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor 6",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 6",
  }
] as const;

interface SlideProps {
  slide: BlogSlide;
  isActive: boolean;
  isTransitioning: boolean;
}

const Slide: FC<SlideProps> = memo(({ slide, isActive, isTransitioning }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`blog-slider__item ${isActive ? "active" : ""} ${isTransitioning ? "transitioning" : ""
        }`}
    >
      <div className={`blog-slider__img ${isLoading ? "loading" : ""}`}>
        <img
          src={slide.imgSrc.default}
          srcSet={`
            ${slide.imgSrc.small} 300w,
            ${slide.imgSrc.medium} 600w,
            ${slide.imgSrc.large} 900w
          `}
          sizes="(max-width: 600px) 300px,
                 (max-width: 900px) 600px,
                 900px"
          alt={slide.title}
          loading={isActive ? "eager" : "lazy"}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">{slide.date}</span>
        <div className="blog-slider__title">{slide.title}</div>
        <div className="blog-slider__text">{slide.text}</div>
      </div>
    </div>
  );
});

Slide.displayName = "Slide";

interface PaginationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

const Pagination: FC<PaginationProps> = memo(
  ({ currentSlide, totalSlides, onSlideChange }) => (
    <div className="blog-slider__pagination">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={`pagination-${index}`}
          className={`blog-slider__pagination-bullet ${index === currentSlide ? "active" : ""
            }`}
          onClick={() => onSlideChange(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-pressed={index === currentSlide}
        />
      ))}
    </div>
  )
);

Pagination.displayName = "Pagination";

const BodyHeader: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleSlideTransition = useCallback(
    (nextIndex: number) => {
      if (nextIndex !== currentSlide && !isTransitioning) {
        setIsTransitioning(true);
        document.documentElement.style.setProperty(
          "--slide-direction",
          nextIndex > currentSlide ? "1" : "-1"
        );

        setTimeout(() => {
          setCurrentSlide(nextIndex);
          setIsTransitioning(false);
        }, SLIDE_TRANSITION_DELAY);
      }
    },
    [currentSlide, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      const nextIndex = (currentSlide + 1) % blogSlides.length;
      handleSlideTransition(nextIndex);
    }
  }, [currentSlide, isTransitioning, handleSlideTransition]);

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="blog-slider-container">
      <section className="blog-slider" aria-label="Image Slider">
        <div className="swiper-wrapper">
          {blogSlides.map((slide) => (
            <Slide
              key={slide.id}
              slide={slide}
              isActive={blogSlides[currentSlide].id === slide.id}
              isTransitioning={isTransitioning}
            />
          ))}
        </div>
        <Pagination
          currentSlide={currentSlide}
          totalSlides={blogSlides.length}
          onSlideChange={handleSlideTransition}
        />
      </section>
    </section>
  );
};

export default memo(BodyHeader);