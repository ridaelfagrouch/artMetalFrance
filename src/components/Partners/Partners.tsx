import "./Partners.css";
import {
  PartnersImage1,
  PartnersImage2,
  PartnersImage3,
  PartnersImage4,
} from "../../assets";

const PartnersData = [
  {
    id: 1,
    image: PartnersImage1,
  },
  {
    id: 2,
    image: PartnersImage2,
  },
  {
    id: 3,
    image: PartnersImage3,
  },
  {
    id: 4,
    image: PartnersImage4,
  },
];

const Partners = () => {
  return (
    <section className="Partners-section">
      <div className="Partners-wrapper">
        <div className="container-Title">
          <h2>Partenaires</h2>
          <div className="enderline" />
        </div>
        <div className="PartnersBody">
          <div className="title-body">
            <div className="PartnersHeader">
              <h3>ÉQUIPE.</h3>
              <h3>CLIENT.</h3>
              <h3>COMMUNAUTÉ.</h3>
            </div>
            <div className="title-subBody">
              <h2>Nous travaillons avec les meilleurs partenaires.</h2>
              <p>
                En tant qu'experts de la métallerie et serrurerie, nous collaborons avec les plus grandes marques du secteur. Notre réseau de partenaires de confiance nous permet de vous garantir des produits et solutions de haute qualité, aux normes les plus exigeantes du marché.
              </p>
            </div>
          </div>
          <div className="PartnersLogos">
            {PartnersData.map((item) => {
              return (
                <div key={item.id} className="PartnersLogo">
                  <img src={item.image} alt="PartnersLogo" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
