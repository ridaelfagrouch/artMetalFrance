import QuestionAccordion from "./ui/QuestionAccordion";
import "./Questions.css";

const Questions = () => {
  const questions = [
    {
      title:
        "Quelle est l'expertise de Art Metal France en serrurerie générale ?",
      content:
        "Spécialiste de la métallerie et serrurerie, Art Metal France vous accompagne de la conception à la réalisation de vos projets. Notre expertise technique et notre savoir-faire artisanal nous permettent de créer des ouvrages métalliques sur mesure, alliant esthétique et durabilité.",
    },
    {
      title:
        "Comment Art Metal France personnalisent-ils les projets de métallerie ?",
      content:
        "Nous réalisons des créations sur mesure en métallerie, en adaptant nos designs et matériaux pour répondre aux besoins spécifiques de chaque client.",
    },
    {
      title: "Quels types de matériaux utilisez-vous ?",
      content: "Nous travaillons principalement l'acier, l'aluminium et l'inox, sélectionnés auprès de fournisseurs certifiés pour garantir qualité et durabilité."
    },
    {
      title: "Vos réalisations sont-elles garanties ?",
      content: "Tous nos travaux sont garantis, avec une durée variable selon le type d'intervention. Nos installations bénéficient d'une garantie décennale."
    },
    {
      title: "Intervenez-vous dans quelle zone géographique ?",
      content: "France métropolitaine"
    },
    {
      title: " Peut-on personnaliser les finitions ?",
      content: "Absolument. Nous proposons un large choix de finitions : différentes teintes RAL, traitements de surface spécifiques, et textures variées pour personnaliser votre projet."
    },
    {
      title: "Réalisez-vous des études techniques préalables ?",
      content: " Pour chaque projet d'envergure, nous effectuons une étude technique détaillée incluant plans, calculs de charge et contraintes spécifiques."
    }
  ];

  return (
    <section className="questions-section bg-gray-100">
      <div className="questions-wrapper">
        <div className="container-Title">
          <h2>Questions</h2>
          <div className="enderline" />
        </div>
        <div className="questionsBody">
          <QuestionAccordion questions={questions} />
        </div>
      </div>
    </section>
  );
};

export default Questions;
