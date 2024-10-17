import "./Contact.css";
import { ContactImage } from "../../assets";

const Contact = () => {
  return (
    <section
      className="header"
      id="contact"
      style={{ backgroundImage: `url(${ContactImage})` }}
    >
      <div className="container">
        <div className="row header-body align-center section-separator">
          <h1 className="wow fadeInUp">
            Experts en <br />
            <span>Rénovation et Réhabilitation de Bâtiments.</span>
          </h1>
          <p className="wow fadeInUp" data-wow-delay="0.3s">
            Lorem ipsum dolor sit amet velit consectetur adipiscing elit
            eleifend.
            <br />
            Mauris a eros ultrices nibh posuere velit.
          </p>
          <div className=" btn-header btn-box">
            <button
              className="btn-style-one"
              onClick={() =>
                (window.location.href = "mailto:contact@example.com")
              }
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
