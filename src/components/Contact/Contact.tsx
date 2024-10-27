import "./Contact.css";
import { ContactImage } from "../../assets";

const Contact = () => {
  return (
    <section
      className="header"
      id="contact"
      style={{ backgroundImage: `url(${ContactImage})` }}
    >
        <div className="header-body">
          <h1 className="">
            Experts en <br />
          <span>Métallerie et Serrurerie de Bâtiment</span>
          </h1>
          <p className="" data-wow-delay="0.3s">
          Solutions innovantes et savoir-faire artisanal pour tous vos projets métalliques.
            <br />
          Qualité, fiabilité et excellence technique garanties.
          </p>
          <div className=" btn-box">
            <button
              className="btn-style-one"
              onClick={() =>
                (window.location.href = "mailto:contact@artmetalfrance.fr")
              }
            >
              Contactez-nous
            </button>
          </div>
        </div>
    </section>
  );
};

export default Contact;
