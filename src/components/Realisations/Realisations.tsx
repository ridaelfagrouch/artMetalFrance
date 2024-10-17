import { useState, useEffect } from "react";
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
  ExpertisesImage1,
  ExpertisesImage2,
  ExpertisesImage3,
  ExpertisesImage4,
  BodyHeaderImage1,
  BodyHeaderImage2,
  BodyHeaderImage3,
  BodyHeaderImage4,
  BodyHeaderImage5,
  BodyHeaderImage6,
} from "../../assets";
import "./Realisations.css";

const AllImages = [
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
  ExpertisesImage1,
  ExpertisesImage2,
  ExpertisesImage3,
  ExpertisesImage4,
  BodyHeaderImage1,
  BodyHeaderImage2,
  BodyHeaderImage3,
  BodyHeaderImage4,
  BodyHeaderImage5,
  BodyHeaderImage6,
];

const RealisationsData = [
  { id: 1, Width: "32%", Height: "450px" },
  { id: 2, Width: "32%", Height: "300px" },
  { id: 3, Width: "32%", Height: "250px" },
  { id: 4, Width: "32%", Height: "260px" },
  { id: 5, Width: "32%", Height: "250px" },
  { id: 6, Width: "32%", Height: "400px" },
  { id: 7, Width: "32%", Height: "300px" },
  { id: 8, Width: "32%", Height: "310px" },
  { id: 9, Width: "32%", Height: "350px" },
  { id: 10, Width: "32%", Height: "220px" },
  { id: 11, Width: "32%", Height: "450px" },
  { id: 12, Width: "32%", Height: "240px" },
];

type RealisationsCardProps = {
  imgSrc: string;
  Width: string;
  Height: string;
};

const RealisationsCard = ({ imgSrc, Width, Height }: RealisationsCardProps) => {
  return (
    <div className="RealisationsCard" style={{ width: Width, height: Height }}>
      <img src={imgSrc} alt="Realisation" />
    </div>
  );
};

const Realisations = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % AllImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageForIndex = (index: number) => {
    const totalImages = AllImages.length;
    const adjustedIndex = (currentImageIndex + index) % totalImages;
    return AllImages[adjustedIndex];
  };

  return (
    <section className="realisations-section" id="realisations">
      <div className="container-Title">
        <h2>Realisations</h2>
        <div className="enderline" />
      </div>
      <div className="RealisationsBody">
        {RealisationsData.map((item, index) => (
          <RealisationsCard
            key={item.id}
            imgSrc={getImageForIndex(index)}
            Width={item.Width}
            Height={item.Height}
          />
        ))}
      </div>
    </section>
  );
};

export default Realisations;
