import './Expertises.css';
import ExpertisesCard from './ui/ExpertisesCard';

const ExpertisesCardData = [
    {
        alt: false,
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
        author: "ART METAL FRANCE",
        features: ["Sécurité Expertisée", "Qualité Garantie", "Service Rapide"],
        phone: "01 34 12 34 56",
        title: "Serrurerie Générale",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."

    },
    {
        alt: true,
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
        author: "ART METAL FRANCE",
        features: ["Artisanat Durable", "Créations Uniques", "Service Rapide", "Élégance et Qualité"],
        phone: "01 34 12 34 56",
        title: "Métallerie & Ferronnerie",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
    },
    {
        alt: false,
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
        author: "ART METAL FRANCE",
        features: ["Éco-Efficacité", "Économie d'énergie", "Qualité Certifiée", "Innovation Durable"],
        phone: "01 34 12 34 56",
        title: "Menuiseries extérieures RGE",
        subtitle: "Lorem ipsum dolor sit amet,",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."

    },
    {
        alt: true,
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
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
        <section className="expertises-section">
            <div className='container-Title'>
                <h2>Expertises</h2>
                <div className='enderline'/>
            </div>
            <div className='ExpertisesBody'>
                {ExpertisesCardData.map((card, index) => (
                    <ExpertisesCard
                        key={index}
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