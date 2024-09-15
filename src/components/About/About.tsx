import React from "react";
import "./About.css";
import { AboutImage1, AboutImage2 } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDraftingCompass,
    faBuilding,
    faUsers,
    faUserShield,
    faHome,
} from "@fortawesome/free-solid-svg-icons";

const AboutSpecialist = [
    {
        title: "Architectes",
        icon: <FontAwesomeIcon icon={faDraftingCompass} />,
    },
    {
        title: "Institutionnels et Tertiaires",
        icon: <FontAwesomeIcon icon={faBuilding} />,
    },
    {
        title: "Particuliers",
        icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
        title: "Administrateurs de Biens",
        icon: <FontAwesomeIcon icon={faUserShield} />,
    },
    {
        title: "Propriétaires d'Immeubles",
        icon: <FontAwesomeIcon icon={faHome} />,
    },
];

const About = () => {
    return (
        <section className="about-section">
            <div className="containe h-full">
                <div className="flex w-full h-full  ">
                    <div className="content-column  order-2 w-1/2 h-full">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>
                                    Nous sommes leaders sur <br />
                                    le marché industriel depuis 1992.
                                </h2>
                            </div>
                            <div className="text">
                                Nous sommes spécialisés dans l'Entretien, la Rénovation et la
                                Réhabilitation d’immeubles ou d’ouvrages existants. Nos
                                interventions sur Paris et la région Parisienne auprès des.
                            </div>
                            <div className="text">
                                Depuis 4 générations, les administrateurs de biens, les
                                architectes, les institutionnels et une large clientèle de
                                particuliers nous font confiance pour l'entretien de leur parc
                                immobilier.
                            </div>
                            <ul className="list-style-one">
                                <li>Lorem Ipsum is simply dummy tex</li>
                                <li>Consectetur adipisicing elit</li>
                                <li>Sed do eiusmod tempor incididunt</li>
                            </ul>
                            <div className="specialist-box">
                                {AboutSpecialist.map(({ title, icon }, key) => (
                                    <div key={key} className="single-specialist-container ">
                                        <div className="single-specialist">{icon}</div>
                                        <div>
                                            <h3>{title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="btn-box">
                                <a href="#" className=" btn-style-one">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="image-column w-1/2 h-full">
                        <div className="inner-column wow fadeInLeft ">
                            <figure className="image-1">
                                <a href="#" className="lightbox-image" data-fancybox="images">
                                    <img src={AboutImage1} alt="" />
                                </a>
                            </figure>
                            <figure className="image-2 ">
                                <a href="#" className="lightbox-image" data-fancybox="images">
                                    <img src={AboutImage2} alt="" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
