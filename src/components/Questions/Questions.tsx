import QuestionAccordion from './ui/QuestionAccordion';
import './Questions.css';

const Questions = () => {
    const questions = [
        { title: "Quelle est l'expertise de Art Metal France en serrurerie générale ?", content: "Art Metal France offre une vaste gamme de services en serrurerie générale, incluant l'installation, la réparation et la maintenance de serrures, portes blindées, et systèmes de sécurité pour résidences et commerces." },
        { title: "Comment Art Metal France personnalisent-ils les projets de métallerie et ferronnerie ?", content: "Nous réalisons des créations sur mesure en métallerie et ferronnerie, en adaptant nos designs et matériaux pour répondre aux besoins spécifiques de chaque client, qu'il s'agisse de portails, de balustrades ou de décorations." },
        { title: "Quels systèmes de motorisation et contrôle d'accès Art Metal France propose-t-il ?", content: "Nous proposons des solutions avancées en motorisation de portails, portes de garage et systèmes de contrôle d'accès, alliant technologie de pointe et facilité d'utilisation pour une sécurité optimale." },
        { title: "Quels matériaux sont utilisés pour les menuiseries extérieures RGE de Art Metal France ?", content: "Nous privilégions des matériaux durables et certifiés RGE pour nos menuiseries extérieures, tels que le bois, l'aluminium et le PVC, garantissant une isolation thermique et phonique de qualité." },
        { title: "Quels sont les avantages des menuiseries extérieures RGE proposées par Art Metal France ?", content: "Nos menuiseries extérieures RGE offrent une éco-efficacité optimale, permettant des économies d'énergie significatives, une qualité certifiée et une innovation durable pour un confort et une durabilité accrus." },
    ];

    return (
        <section className="questions-section bg-gray-100">
            <div className="questions-wrapper">
                <div className='container-Title'>
                    <h2>Questions</h2>
                    <div className='enderline' />
                </div>
                <div className='questionsBody'>
                    <QuestionAccordion questions={questions} />
                </div>
            </div>
        </section>
    );
};

export default Questions;