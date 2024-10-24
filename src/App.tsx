

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, ReactNode } from "react";
import ComplexNavbar from "./components/Navbar/ComplexNavbar";
import Footer from "./components/Footer/Footer";

// Lazy load the components
const BodyHeader = lazy(() => import("./components/BodyHearder/BodyHeader"));
const Serviceslider = lazy(() => import("./components/Serviceslider/Serviceslider"));
const About = lazy(() => import("./components/About/About"));
const Expertises = lazy(() => import("./components/Expertises/Expertises"));
const Products = lazy(() => import("./components/Products/Products"));
const Realisations = lazy(() => import("./components/Realisations/Realisations"));
const Partners = lazy(() => import("./components/Partners/Partners"));
const Quote = lazy(() => import("./components/Quote/Quote"));
const Questions = lazy(() => import("./components/Questions/Questions"));
const Contact = lazy(() => import("./components/Contact/Contact"));

// SEO metadata configuration
const seoConfig = {
  title: "Art metal France - Rénovation et Réhabilitation de Bâtiments.",
  description:
    "Nous sommes spécialisés dans l'Entretien, la Rénovation et la Réhabilitation d'immeubles ou d'ouvrages existants.",
  keywords:
    "la Rénovation , la Réhabilitation d'immeubles, ouvrages existants, Serrurerie Générale, Métallerie & Ferronnerie, Menuiseries extérieures RGE, Motorisation / Contrôle d’accès, Portes métalliques, ⁠Garde-corps, ⁠Mains courantes, Clôtures et portails métalliques, Escaliers métalliques, Accessoires de fixation et quincaillerie, ⁠Menuiserie métallique sur mesure, Chasse-roues et dispositifs de sécurité routière, Structures métalliques pour espaces publics,rénovation bâtiment, réhabilitation immobilière, restauration bâtiment ancien, rénovation complète, travaux de rénovation, entreprise rénovation, rénovation maison, rénovation appartement, transformation bâtiment, modernisation bâtiment, rénovation énergétique, isolation thermique, ravalement façade, réfection toiture, rénovation intérieure, aménagement combles, extension maison, remise aux normes, rénovation électrique, plomberie rénovation, diagnostic bâtiment, étude technique, maîtrise d'œuvre, coordination travaux, suivi chantier, gestion projet construction, bureaux d'études techniques, audit énergétique, expertise bâtiment, conformité normes, restauration patrimoine, rénovation monuments historiques, bâtiments classés, architecture ancienne, rénovation pierre, charpente traditionnelle, rénovation écologique, rénovation durable, bâtiment basse consommation, bâtiment passif, devis rénovation, prix rénovation, coût réhabilitation, artisan rénovation, entreprise locale rénovation, rénovation professionnelle, rénovateur agréé, certification RGE, permis de construire, autorisation travaux, aides rénovation, subventions travaux, crédit rénovation, assurance décennale, garantie travaux, architecte rénovation, économies énergie, performance énergétique, comment rénover une maison ancienne, prix au m2 rénovation complète, entreprise rénovation tout corps d'état, rénovation maison avec architecte, rénovation écologique maison ancienne, réhabilitation bâtiment industriel en logement, transformation local commercial en habitation, rénovation énergétique bâtiment collectif, diagnostic avant rénovation maison, isolation thermique extérieure, VMC double flux, pompe à chaleur rénovation, domotique rénovation, smart building, matériaux écologiques, rénovation BBC, RT 2020, RE 2020, certification environnementale, rénovation tous corps d'état, rénovation clé en main, rénovation haut de gamme, rénovation sur mesure, rénovation éco-responsable, rénovation appartement ancien, rénovation maison traditionnelle, rénovation qualité professionnelle, rénovation grand projet, rénovation petit budget,rénovation bâtiment, réhabilitation immobilière, restauration bâtiment ancien, rénovation complète, travaux de rénovation, entreprise rénovation, rénovation maison, rénovation appartement, transformation bâtiment, modernisation bâtiment, rénovation énergétique, isolation thermique, ravalement façade, réfection toiture, rénovation intérieure, aménagement combles, extension maison, remise aux normes, rénovation électrique, plomberie rénovation, diagnostic bâtiment, étude technique, maîtrise d'œuvre, coordination travaux, suivi chantier, gestion projet construction, bureaux d'études techniques, audit énergétique, expertise bâtiment, conformité normes, restauration patrimoine, rénovation monuments historiques, bâtiments classés, architecture ancienne, rénovation pierre, charpente traditionnelle, rénovation écologique, rénovation durable, bâtiment basse consommation, bâtiment passif, devis rénovation, prix rénovation, coût réhabilitation, artisan rénovation, entreprise locale rénovation, rénovation professionnelle, rénovateur agréé, certification RGE, permis de construire, autorisation travaux, aides rénovation, subventions travaux, crédit rénovation, assurance décennale, garantie travaux, architecte rénovation, économies énergie, performance énergétique, aménagement intérieur, décoration rénovation, rénovation cuisine, rénovation salle de bain, rénovation bureau, rénovation commerce, rénovation industrielle, rénovation logement, rénovation copropriété, rénovation immeubles, rénovation façades, rénovation toitures, rénovation fenêtres, rénovation portes, rénovation sols, rénovation murs, rénovation plafonds, rénovation cave, rénovation grenier, rénovation terrasse, rénovation balcon, rénovation piscine, rénovation garage, rénovation véranda, rénovation isolation, rénovation chauffage, rénovation climatisation, rénovation ventilation, rénovation plomberie, rénovation électricité, rénovation domotique, rénovation sécurité, rénovation accessibilité, rénovation PMR, rénovation ascenseur, rénovation escalier, rénovation menuiserie, rénovation serrurerie, rénovation carrelage, rénovation parquet, rénovation peinture, rénovation papier peint, rénovation enduit, rénovation crépi, rénovation pierre apparente, rénovation bois, rénovation métal, rénovation béton, rénovation zinc, rénovation ardoise, rénovation tuile, rénovation étanchéité, rénovation isolation phonique, rénovation isolation thermique, rénovation acoustique, rénovation thermique, rénovation énergétique RT2012, rénovation passive, rénovation bioclimatique, rénovation écologique, rénovation durable, rénovation responsable, rénovation verte, rénovation développement durable, rénovation bas carbone, rénovation zéro carbone, rénovation circulaire, rénovation recyclage, rénovation récupération, rénovation réemploi, rénovation patrimoine historique, rénovation bâtiment classé, rénovation monument historique, rénovation architecture ancienne, rénovation style haussmannien, rénovation maison bourgeoise, rénovation château, rénovation manoir, rénovation villa, rénovation loft, rénovation studio, rénovation duplex, rénovation triplex, rénovation résidence secondaire, rénovation gîte, rénovation chambre d'hôtes, rénovation local commercial, rénovation boutique, rénovation restaurant, rénovation hôtel, rénovation bureau professionnel, rénovation cabinet médical, rénovation cabinet dentaire, rénovation cabinet avocat, rénovation école, rénovation crèche, rénovation maison de retraite, rénovation établissement de santé, rénovation établissement recevant du public, rénovation ERP, rénovation accessibilité handicapés, rénovation normes sécurité, rénovation normes incendie, rénovation normes électriques, rénovation normes gaz, rénovation normes assainissement, rénovation tout corps d'état, rénovation clés en main, rénovation sur mesure, rénovation haut de gamme, rénovation luxe, rénovation prestige, rénovation qualité, rénovation professionnelle, rénovation artisanale, rénovation traditionnelle, rénovation moderne, rénovation contemporaine, rénovation design, rénovation tendance, rénovation style industriel, rénovation style scandinave, rénovation style moderne, rénovation style contemporain, rénovation style authentique, rénovation petit prix, rénovation low cost, rénovation économique, rénovation rapide, rénovation express, rénovation urgente, rénovation progressive, rénovation par étapes, rénovation partielle, rénovation totale, rénovation globale, diagnostic énergétique DPE, audit énergétique, bilan thermique, étude thermique, simulation thermique dynamique, test d'infiltrométrie, test étanchéité à l'air, caméra thermique, thermographie infrarouge, modélisation 3D bâtiment, BIM rénovation, maquette numérique, scan 3D bâtiment, permis de construire rénovation, déclaration préalable travaux, autorisation travaux ERP, attestation accessibilité, certification Qualibat, certification RGE, certification Qualit'EnR, certification NF habitat, label BBC rénovation, label HPE rénovation, label rénovation responsable, MaPrimeRénov, CEE certificats économie énergie, aide ANAH, crédit d'impôt rénovation, TVA réduite rénovation, éco-prêt à taux zéro, prime énergie, prime rénovation globale, aide isolation, aide chauffage, aide fenêtres, financement rénovation, prêt rénovation, assurance dommage ouvrage, garantie décennale, garantie biennale, garantie parfait achèvement, rénovation Île-de-France, rénovation Paris, rénovation Lyon, rénovation Marseille, rénovation Lille, rénovation Toulouse, rénovation Nice, rénovation Nantes, rénovation Strasbourg, rénovation Montpellier, rénovation Bordeaux, rénovation Rennes, rénovation Grand Est, rénovation Occitanie, rénovation Nouvelle-Aquitaine, rénovation Auvergne-Rhône-Alpes, rénovation Provence-Alpes-Côte d'Azur, rénovation Hauts-de-France, rénovation Normandie, rénovation Bretagne, rénovation Pays de la Loire, rénovation Centre-Val de Loire, rénovation Bourgogne-Franche-Comté, MaPrimeRénov, aide rénovation France, CEE France, crédit d'impôt rénovation France, aide isolation France, prime énergie France, aide fenêtre France, aide chauffage France, éco-PTZ, aide ANAH France, aide rénovation énergétique France, aide département rénovation, aide régionale rénovation, aide communale rénovation, aide CAF rénovation, Action Logement rénovation, prime éco-rénovation, aide isolation combles France, aide pompe à chaleur France, aide chaudière France, certification RGE France, Qualibat France, Qualit'EnR, certification NF Habitat, label BBC rénovation France, label HPE rénovation, Effinergie rénovation, certification Qualitel, Pro de la performance énergétique, certification RGE Eco Artisan, certification RGE Qualibat, certification Qualificat, Handibat, certification Céquami, label Reconnu Garant de l'Environnement, rénovation appartement haussmannien, rénovation maison bourgeoise, rénovation longère bretonne, rénovation mas provençal, rénovation charentaise, rénovation maison alsacienne, rénovation bastide, rénovation corps de ferme, rénovation château France, rénovation bâtiment classé France, rénovation monument historique France, rénovation HLM, rénovation copropriété France, rénovation logement social France, rénovation style haussmannien, rénovation Art Déco, rénovation style provençal, rénovation style alsacien, rénovation style breton, rénovation style basque, rénovation style normand, rénovation style méditerranéen, rénovation style rustique français, rénovation style contemporain français",
  ogTitle: "Art metal France - Rénovation et Réhabilitation de Bâtiments",
  ogDescription:
    "Spécialistes de la rénovation et réhabilitation à Paris et en région Parisienne.",
  ogImage: "", // Update this with a valid URL
  twitterCard: "summary_large_image",
  canonicalUrl: "https://www.artmetalfrance.works/",
};

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`w-full flex justify-center items-center ${className}`}>
    <div className="w-full h-full max-w-[1300px] flex flex-col">{children}</div>
  </div>
);

function App() {
  const sections = [
    { id: "body-header", Component: BodyHeader, className: "" },
    { id: "service-slider", Component: Serviceslider, className: "" },
    { id: "about", Component: About, className: "bg-gray-100" },
    { id: "expertises", Component: Expertises, className: "" },
    { id: "products", Component: Products, className: "bg-gray-100" },
    { id: "realisations", Component: Realisations, className: "" },
    { id: "partners", Component: Partners, className: "bg-gray-100" },
    { id: "quote", Component: Quote, className: "" },
    { id: "questions", Component: Questions, className: "bg-gray-100" },
    { id: "contact", Component: Contact, className: "" },
    { id: "footer", Component: Footer, className: "bg-gray-100" },
  ];

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>{seoConfig.title}</title>
          <meta name="description" content={seoConfig.description} />
          <meta name="keywords" content={seoConfig.keywords} />
          <meta property="og:title" content={seoConfig.ogTitle} />
          <meta property="og:description" content={seoConfig.ogDescription} />
          <meta property="og:image" content={seoConfig.ogImage} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seoConfig.canonicalUrl} />
          <meta name="twitter:card" content={seoConfig.twitterCard} />
          <meta name="twitter:title" content={seoConfig.ogTitle} />
          <meta name="twitter:description" content={seoConfig.ogDescription} />
          <meta name="twitter:image" content={seoConfig.ogImage} />
          <link rel="canonical" href={seoConfig.canonicalUrl} />
        </Helmet>

        <ComplexNavbar />

        <main className="flex-grow mt-[110px]">
          <div className="w-full flex flex-col justify-center items-center gap-12">
            {sections.map(({ id, Component, className }) => (
              <Section key={id} className={className}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              </Section>
            ))}
          </div>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
