import { useState, useRef } from "react";
import "./Products.css";
import { navProduitsListMenuItems } from "../../utils/constants";

const flattenedNavProduitsListMenuItems = navProduitsListMenuItems.flat();

interface ProductItem {
    id: number;
    category: string;
    description: string;
    image: string[];
}

const ProductCard = ({ item }: { item: ProductItem }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % item.image.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + item.image.length) % item.image.length
        );
    };

    return (
        <div className="ProductsCard">
            <div className="ProductsCardImageContainer">
                <img src={item.image[currentImageIndex]} alt="Product" />
                <button className="prevButton" onClick={prevImage}>&lt;</button>
                <button className="nextButton" onClick={nextImage}>&gt;</button>
            </div>
            <div className="ProductsCardText">
                <h3>{item.category}</h3>
                <p>{item.description}</p>
            </div>
            <div className="ProductsCardIndex">
                <h3>{item.id}</h3>
            </div>
        </div>
    );
};

const Products = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust this value as needed
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="Products-section" id="produits">
            <div className="Products-wrapper">
                <div className="container-Title">
                    <h2>Produits</h2>
                    <div className="enderline" />
                </div>
                <div className="ProductsBodyWrapper">
                    <button className="scrollButton leftScroll" onClick={() => handleScroll('left')}>&lt;</button>
                    <div className="ProductsBody" ref={scrollContainerRef}>
                        {flattenedNavProduitsListMenuItems.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                    <button className="scrollButton rightScroll" onClick={() => handleScroll('right')}>&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
