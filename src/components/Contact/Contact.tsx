import './Contact.css';

const Contact = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row header-body align-center section-separator">
                    <h1 className="wow fadeInUp">
                        Experts en   <br />
                        <span>Rénovation et Réhabilitation de Bâtiments.</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Lorem ipsum dolor sit amet velit consectetur adipiscing elit eleifend.<br />
                        Mauris a eros ultrices nibh posuere velit.
                    </p>
                    <div className=" btn-header btn-box">
                        <a href="#" className=" btn-style-one">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Contact;