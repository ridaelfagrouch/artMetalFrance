

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
  keywords: "Art metal France, Rénovation, Réhabilitation, Bâtiments, Paris, France",
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
                <Suspense fallback={<div></div>}>
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
