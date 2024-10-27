import { useState, useEffect, FC, memo } from "react";
import {
  RealisationsImage1,
  RealisationsImage2,
  RealisationsImage3,
  RealisationsImage4,
  RealisationsImage5,
  RealisationsImage6,
  RealisationsImage7,
  RealisationsImage8,
  RealisationsImage10,
  RealisationsImage11,
  RealisationsImage12,
  RealisationsImage13,
} from "../../assets";
import "./Realisations.css";

interface RealisationItem {
  readonly id: number;
  readonly width: string;
  readonly height: string;
  readonly alt: string;
}

interface RealisationsCardProps {
  imgSrc: string;
  width: string;
  height: string;
  alt: string;
}

const ROTATION_INTERVAL = 5000;

const ALL_IMAGES: readonly string[] = [
  RealisationsImage1,
  RealisationsImage2,
  RealisationsImage3,
  RealisationsImage4,
  RealisationsImage5,
  RealisationsImage6,
  RealisationsImage7,
  RealisationsImage8,
  RealisationsImage10,
  RealisationsImage11,
  RealisationsImage12,
  RealisationsImage13,
] as const;

const REALISATIONS_DATA: readonly RealisationItem[] = [
  { id: 1, width: "32%", height: "300px", alt: "Realisation 1" },
  { id: 2, width: "32%", height: "350px", alt: "Realisation 2" },
  { id: 3, width: "32%", height: "300px", alt: "Realisation 3" },
  { id: 4, width: "32%", height: "310px", alt: "Realisation 4" },
  { id: 5, width: "32%", height: "250px", alt: "Realisation 5" },
  { id: 6, width: "32%", height: "350px", alt: "Realisation 6" },
  { id: 7, width: "32%", height: "340px", alt: "Realisation 7" },
  { id: 8, width: "32%", height: "320px", alt: "Realisation 8" },
  { id: 9, width: "32%", height: "350px", alt: "Realisation 9" },
  { id: 10, width: "32%", height: "270px", alt: "Realisation 10" },
  { id: 11, width: "32%", height: "350px", alt: "Realisation 11" },
  { id: 12, width: "32%", height: "290px", alt: "Realisation 12" },
] as const;

const RealisationsCard: FC<RealisationsCardProps> = memo(({ imgSrc, width, height, alt }) => (
  <div
    className="RealisationsCard"
    style={{ width, height }}
  >
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        img.src = 'fallback-image.jpg';
      }}
      srcSet={`${imgSrc}?w=300 300w, ${imgSrc}?w=600 600w, ${imgSrc}?w=900 900w`}
      sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
    />
  </div>
));

RealisationsCard.displayName = "RealisationsCard";

const Title: FC = memo(() => (
  <div className="container-Title">
    <h2>Realisations</h2>
    <div className="enderline" />
  </div>
));

Title.displayName = "Title";

const useImageRotation = (imagesLength: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [imagesLength]);

  return currentImageIndex;
};

const getImageForIndex = (currentIndex: number, index: number, totalImages: number): string => {
  const adjustedIndex = (currentIndex + index) % totalImages;
  return ALL_IMAGES[adjustedIndex];
};

const Realisations: FC = () => {
  const currentImageIndex = useImageRotation(ALL_IMAGES.length);

  return (
    <section
      className="realisations-section"
      id="realisations"
      aria-label="Our Realisations"
    >
      <Title />
      <div className="RealisationsBody">
        {REALISATIONS_DATA.map((item, index) => (
          <RealisationsCard
            key={item.id}
            imgSrc={getImageForIndex(currentImageIndex, index, ALL_IMAGES.length)}
            width={item.width}
            height={item.height}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
};

const withLoading = (WrappedComponent: FC): FC => {
  return () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div className="loading">Loading realisations...</div>;
    }

    return <WrappedComponent />;
  };
};

const RealisationsWithLoading = withLoading(() => <Realisations />);

export default memo(RealisationsWithLoading);