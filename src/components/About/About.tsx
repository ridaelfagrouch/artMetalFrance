import { FC, memo } from "react";
import "./About.css";
import { AboutImage1, AboutImage2 } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faBuilding,
  faUsers,
  faUserShield,
  faHome,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface SpecialistItem {
  title: string;
  icon: IconDefinition;
}

const AboutSpecialist: SpecialistItem[] = [
  {
    title: "Architectes",
    icon: faDraftingCompass,
  },
  {
    title: "Entreprises générales du bâtiment",
    icon: faBuilding,
  },
  {
    title: "Institutionnels et Tertiaires",
    icon: faUsers,
  },
  {
    title: "Travaux Public",
    icon: faUserShield,
  },
  {
    title: "Syndicat",
    icon: faHome,
  },
];

interface SpecialistProps {
  title: string;
  icon: IconDefinition;
}

const Specialist: FC<SpecialistProps> = memo(({ title, icon }) => (
  <div className="single-specialist-container">
    <div className="single-specialist">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>
      <h3>{title}</h3>
    </div>
  </div>
));

interface ImageDimensions {
  width: number;
  height: number;
}

const IMAGE_DIMENSIONS: Record<string, ImageDimensions> = {
  aboutImage1: {
    width: 570,
    height: 570,
  },
  aboutImage2: {
    width: 450,
    height: 350,
  },
};

const About: FC = () => {
  const handleContact = (): void => {
    window.location.href = "mailto:contact@artmetalfrance.fr";
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="content-column">
          <div className="inner-column">
            <div className="sec-title">
              <h2>
                ART METAL FRANCE <br />
              </h2>
            </div>

            <div className="text">
              Est une entreprise spécialisée en métallerie et serrurerie de bâtiment.
              Nous concevons, fabriquons et
              installons des portes, garde-corps,
              mains courantes, et chasse-roues
              en acier de haute qualité.
            </div>

            <div className="text">
              Nous
              offrons des solutions sur mesure, alliant un savoir-faire artisanal, pour répondre aux besoins de nos clients.
              Notre engagement est de fournir :
            </div>

            <ul className="list-style-one">
              <li>Produits durables</li>
              <li>Produits Esthetiques</li>
              <li>Produits sécurisés</li>
            </ul>

            <div className="specialist-box">
              {AboutSpecialist.map((specialist) => (
                <Specialist
                  key={specialist.title}
                  title={specialist.title}
                  icon={specialist.icon}
                />
              ))}
            </div>

            <div className="btn-box">
              <button
                type="button"
                className="btn-style-one"
                onClick={handleContact}
                aria-label="Contact us"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>

        <div className="image-column">
          <div className="inner-column">
            <figure className="image-1">
              <div className="lightbox-image" data-fancybox="images">
                <img
                  src={AboutImage1}
                  alt="About 1"
                  loading="lazy"
                  srcSet={`${AboutImage1} 1x, ${AboutImage1} 2x`}
                  sizes="(max-width: 768px) 100vw, 570px"
                  style={{ aspectRatio: `${IMAGE_DIMENSIONS.aboutImage1.width}/${IMAGE_DIMENSIONS.aboutImage1.height}` }}
                />
              </div>
            </figure>
            <figure className="image-2">
              <div className="lightbox-image" data-fancybox="images">
                <img
                  src={AboutImage2}
                  alt="About 2"
                  loading="lazy"
                  srcSet={`${AboutImage2} 1x, ${AboutImage2} 2x`}
                  sizes="(max-width: 768px) 100vw, 570px"
                  style={{ aspectRatio: `${IMAGE_DIMENSIONS.aboutImage2.width}/${IMAGE_DIMENSIONS.aboutImage2.height}` }}
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);