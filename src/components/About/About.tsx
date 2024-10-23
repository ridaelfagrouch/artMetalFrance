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
    title: "Institutionnels et Tertiaires",
    icon: faBuilding,
  },
  {
    title: "Particuliers",
    icon: faUsers,
  },
  {
    title: "Administrateurs de Biens",
    icon: faUserShield,
  },
  {
    title: "Propriétaires d'Immeubles",
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

const About: FC = () => {
  const handleContact = (): void => {
    window.location.href = "mailto:contact@example.com";
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="content-column">
          <div className="inner-column">
            <div className="sec-title">
              <h2>
                Nous sommes leaders sur <br />
                le marché industriel depuis 1992.
              </h2>
            </div>

            <div className="text">
              Nous sommes spécialisés dans l'Entretien, la Rénovation et la
              Réhabilitation d'immeubles ou d'ouvrages existants. Nos
              interventions sur Paris et la région Parisienne auprès des.
            </div>

            <div className="text">
              Depuis 4 générations, les administrateurs de biens, les
              architectes, les institutionnels et une large clientèle de
              particuliers nous font confiance pour l'entretien de leur parc
              immobilier.
            </div>

            <ul className="list-style-one">
              <li>Lorem Ipsum is simply dummy tex</li>
              <li>Consectetur adipisicing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
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
                <img src={AboutImage1} alt="About 1" loading="lazy" />
              </div>
            </figure>
            <figure className="image-2">
              <div className="lightbox-image" data-fancybox="images">
                <img src={AboutImage2} alt="About 2" loading="lazy" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);