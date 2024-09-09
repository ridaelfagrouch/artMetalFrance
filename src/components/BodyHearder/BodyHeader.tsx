// BlogSlider.tsx
import React, { useState, useEffect } from 'react';
import './style.css';

interface BlogSlide {
    imgSrc: string;
    code: string;
    title: string;
    text: string;
}

const blogSlides: BlogSlide[] = [
    {
        imgSrc: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp",
        code: "26 December 2019 1",
        title: "Lorem Ipsum Dolor 1",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? 1",
    },
    {
        imgSrc: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp",
        code: "26 December 2019 2",
        title: "Lorem Ipsum Dolor 2",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? 2",
    },
    {
        imgSrc: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp",
        code: "26 December 2019 3",
        title: "Lorem Ipsum Dolor 3",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? 3",
    },
];

const BodyHeader = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % blogSlides.length);
                setIsTransitioning(false);
            }, 500);
        }
    };

    const goToSlide = (index: number) => {
        if (index !== currentSlide && !isTransitioning) {
            setIsTransitioning(true);
            const isNext = index > currentSlide;
            document.documentElement.style.setProperty('--slide-direction', isNext ? '1' : '-1');

            setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
            }, 500);
        }
    };



    return (
        <div className='blog-slider-container'>
        <div className="blog-slider ">
            <div className="swiper-wrapper">
                {blogSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`blog-slider__item ${index === currentSlide ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                    >
                        <div className="blog-slider__img">
                            <img src={slide.imgSrc} alt="" />
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">{slide.code}</span>
                            <div className="blog-slider__title">{slide.title}</div>
                            <div className="blog-slider__text">{slide.text}</div>
                            <a href="#" className="blog-slider__button">READ MORE</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="blog-slider__pagination">
                {blogSlides.map((_, index) => (
                    <span
                        key={index}
                        className={`blog-slider__pagination-bullet ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
        </div>
    );
};

export default BodyHeader;