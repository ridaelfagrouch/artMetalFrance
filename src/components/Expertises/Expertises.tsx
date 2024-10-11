import './Expertises.css';
import ExpertisesCard from './ui/ExpertisesCard';
import {
    ExpertisesImage1,
    ExpertisesImage2,
    ExpertisesImage3,
    ExpertisesImage4,
 } from '../../assets';

const ExpertisesCardData = [
    {
        alt: false,
        photo: ExpertisesImage1,
        author: "ART METAL FRANCE",
        features: ["Sécurité Expertisée", "Qualité Garantie", "Service Rapide"],
        phone: "01 34 12 34 56",
        title: "Serrurerie Générale",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."

    },
    {
        alt: true,
        photo: ExpertisesImage2,
        author: "ART METAL FRANCE",
        features: ["Artisanat Durable", "Créations Uniques", "Service Rapide", "Élégance et Qualité"],
        phone: "01 34 12 34 56",
        title: "Métallerie & Ferronnerie",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
    },
    {
        alt: false,
        photo: ExpertisesImage3,
        author: "ART METAL FRANCE",
        features: ["Éco-Efficacité", "Économie d'énergie", "Qualité Certifiée", "Innovation Durable"],
        phone: "01 34 12 34 56",
        title: "Menuiseries extérieures RGE",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."

    },
    {
        alt: true,
        photo: ExpertisesImage4,
        author: "ART METAL FRANCE",
        features: ["Technologie Avancée", "Sécurité Expertisée", "Service Rapide", "Installation Expert"],
        phone: "01 34 12 34 56",
        title: "Motorisation / Contrôle d’accès",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
    },
];

const Expertises = () => {
    return (
        <section className="expertises-section" id="expertises">
            <div className='container-Title'>
                <h2>Expertises</h2>
                <div className='enderline'/>
            </div>
            <div className='ExpertisesBody'>
                {ExpertisesCardData.map((card) => (
                    <ExpertisesCard
                        key={card.title}
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
}
 
export default Expertises;