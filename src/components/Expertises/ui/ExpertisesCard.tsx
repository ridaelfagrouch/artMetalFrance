import React, { useCallback } from "react";
import "../Expertises.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ExpertisesCardProps {
  alt: boolean;
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
  description,
}) => {

  const myPhone = phone.replace(/ /g, "");

  const handlePhoneClick = useCallback(() => {
    window.location.href = `tel:${myPhone}`;
  }, [myPhone]);

  return (
    <div className={`expertises-card ${alt ? "alt" : ""}`}>
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
        <ul className="details">
          <li className="author">{author}</li>
          <button
            className="blog-slider__button"
            onClick={handlePhoneClick}
          >
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </button>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <div className="features-container">
          <ul className="features">
            {features.map((feature, index) => (
              <li key={`${feature}-${index}`}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpertisesCard;
