import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Products.css";
import { navProduitsListMenuItems } from "../../utils/constants";

const flattenedNavProduitsListMenuItems = navProduitsListMenuItems.flat();

interface ProductItem {
    id: number;
    type: string;
    category: string;
    description: string;
    image: string[];
}

interface ProductCardProps {
    item: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.image.length);
        setIsImageLoaded(false);
    }, [item.image.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + item.image.length) % item.image.length);
        setIsImageLoaded(false);
    }, [item.image.length]);

    const handleImageLoad = useCallback(() => {
        setIsImageLoaded(true);
    }, []);

    useEffect(() => {
        if (item.image.length > 1) {
            const nextIndex = (currentImageIndex + 1) % item.image.length;
            const preloadImage = new Image();
            preloadImage.src = item.image[nextIndex];
        }
    }, [currentImageIndex, item.image]);

    return (
        <div className="ProductsCard" id={`product-${item.id}`}>
            <div className="ProductsCardImageContainer">
                {!isImageLoaded && (
                    <div className="image-placeholder" />
                )}
                <img
                    ref={imageRef}
                    src={item.image[currentImageIndex]}
                    alt={`${item.category} - ${currentImageIndex + 1}/${item.image.length}`}
                    loading={currentImageIndex === 0 ? "eager" : "lazy"}
                    onLoad={handleImageLoad}
                    style={{
                        opacity: isImageLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                    decoding="async"
                />
                {item.image.length > 1 && (
                    <>
                        <div className="image-navigation">
                            <button
                                className="prevButton"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                &lt;
                            </button>
                            <button
                                className="nextButton"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                &gt;
                            </button>
                        </div>
                        <div className="image-counter" aria-live="polite">
                            {currentImageIndex + 1}/{item.image.length}
                        </div>
                    </>
                )}
            </div>
            <div className="ProductsCardText">
                <h3>{item.category}</h3>
                <p>{item.description}</p>
            </div>
            <div className="ProductsCardIndex">
                <h3>{item.id} - {item.type}</h3>
            </div>
        </div>
    );
});

const Products: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);

    const checkScroll = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftScroll(scrollLeft > 0);
            setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
        }
    }, []);

    const handleScroll = useCallback((direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 260;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth',
            });
        }
    }, []);

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [checkScroll]);

    return (
        <section className="Products-section" id="produits">
            <div className="Products-wrapper">
                <div className="container-Title">
                    <h2>Produits</h2>
                    <div className="enderline" />
                </div>
                <div className="ProductsBodyWrapper">
                    {showLeftScroll && (
                        <button
                            className="scrollButton leftScroll"
                            onClick={() => handleScroll('left')}
                            aria-label="Scroll left"
                        >
                            &lt;
                        </button>
                    )}
                    <div
                        className="ProductsBody"
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                    >
                        {flattenedNavProduitsListMenuItems.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                    {showRightScroll && (
                        <button
                            className="scrollButton rightScroll"
                            onClick={() => handleScroll('right')}
                            aria-label="Scroll right"
                        >
                            &gt;
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Products;