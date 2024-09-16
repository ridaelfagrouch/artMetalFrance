import React from 'react';
import '../Expertises.css';
import {
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ExpertisesCardProps {
    alt?: boolean;
    photo: string;
    author: string;
    features: string[];
    phone: string;
    title: string;
    subtitle: string;
    description: string;
}

const ExpertisesCard: React.FC<ExpertisesCardProps> = ({
    alt,
    photo,
    author,
    features,
    phone,
    title,
    subtitle,
    description
}) => {
    return (
        <div className={`expertises-card ${alt ? 'alt' : ''}`}>
            <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
                <ul className="details">
                    <li className="author">{author}</li>
                    <a href="#" className="blog-slider__button"><FontAwesomeIcon icon={faPhone} />  {phone}</a>
                </ul>
            </div>
            <div className="description">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <div className='features-container'>
                    <ul className="features">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <p className="read-more">
                    <a href="#">Read More</a>
                </p>
            </div>
        </div>
    );
};

export default ExpertisesCard;