import "./Expertises.css";
import ExpertisesCard from "./ui/ExpertisesCard";
import {
  ExpertisesImage5,
  ExpertisesImage6,
  ExpertisesImage7,
} from "../../assets";

interface ExpertiseCard {
  alt: boolean;
  photo: string;
  author: string;
  features: string[];
  phone: string;
  title: string;
  subtitle: string;
  description: string;
}

const ExpertisesCardData: ExpertiseCard[] = [
  {
    alt: false,
    photo: ExpertisesImage5,
    author: "ART METAL FRANCE",
    features: ["Sécurité Expertisée", "Qualité Garantie"],
    phone: "+33 1 48 63 11 59",
    title: "Serrurerie Générale",
    subtitle: "Votre sécurité, notre priorité",
    description:
      "Une solution complète pour tous vos besoins en serrurerie. Installation, réparation et dépannage de serrures, portes et systèmes de sécurité.",
  },
  {
    alt: true,
    photo: ExpertisesImage6,
    author: "ART METAL FRANCE",
    features: [
      "Artisanat Durable",
      "Créations Uniques",
      "Qualité",
    ],
    phone: "+33 1 48 63 11 59",
    title: "Métallerie",
    subtitle: "L'art du métal sur mesure",
    description:
      "Création et fabrication sur mesure d'ouvrages métalliques. De l'escalier au portail, nous donnons vie à vos projets avec précision et style.",
  },
  {
    alt: false,
    photo: ExpertisesImage7,
    author: "ART METAL FRANCE",
    features: [
      "Haute durabilité",
      "Finitions personnalisables",
      "Profilés sur mesure",
      "Large choix de couleurs RAL",
    ],
    phone: "+33 1 48 63 11 59",
    title: "Menuiseries métalliques",
    subtitle: "La force du métal, l'élégance du design",
    description:
      "Conception et pose de structures en aluminium et acier. Fenêtres, portes et façades métalliques alliant robustesse et esthétique moderne.",
  },
];

const Expertises: React.FC = () => {
  return (
    <section className="expertises-section" id="expertises">
      <div className="container-Title">
        <h2>Expertises</h2>
        <div className="enderline" />
      </div>
      <div className="ExpertisesBody">
        {ExpertisesCardData.map((card, index) => (
          <ExpertisesCard
            key={`${card.title}-${index}`}
            alt={card.alt}
            photo={card.photo}
            author={card.author}
            features={card.features}
            phone={card.phone}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertises;
