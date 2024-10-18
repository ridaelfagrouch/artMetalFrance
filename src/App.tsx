import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  ComplexNavbar,
  BodyHeader,
  Serviceslider,
  About,
  Expertises,
  Partners,
  Contact,
  Questions,
  Quote,
  Realisations,
  Footer,
} from "./components";

import { ReactNode } from "react";

const Section = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`w-full flex justify-center items-center ${className}`}>
    <div className="w-full h-full max-w-[1300px] flex flex-col ">{children}</div>
  </div>
);

function App() {
  const classStyle = "bg-gray-100";

  const sections = [
    { id: "body-header", Component: BodyHeader, className: "" },
    { id: "service-slider", Component: Serviceslider, className: "" },
    // { id: "about", Component: About, className: classStyle },
    // { id: "expertises", Component: Expertises, className: "" },
    // { id: "partners", Component: Partners, className: classStyle },
    // { id: "realisations", Component: Realisations, className: "" },
    // { id: "questions", Component: Questions, className: classStyle },
    // { id: "contact", Component: Contact, className: "" },
    // { id: "quote", Component: Quote, className: "" },
    // { id: "footer", Component: Footer, className: classStyle },
  ];

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <main className="flex-grow mt-[110px]">
        <div className="w-full flex flex-col justify-center items-center gap-12 ">
          {sections.map(({ id, Component, className }) => (
            <Section key={id} className={className}>
              <Component />
            </Section>
          ))}
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
