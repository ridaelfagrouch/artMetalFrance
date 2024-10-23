import React from "react";
import "./Footer.css";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { socialLinks } from "../../utils/constants";
interface ContactInfo {
  icon: React.ElementType;
  title: string;
  content: string;
}

interface FooterMenuItem {
  name: string;
  link: string;
}

const contactInfo: ContactInfo[] = [
  { icon: MapPinIcon, title: "Find us", content: "1010 Avenue, sw 54321, Chandigarh" },
  { icon: PhoneIcon, title: "Call us", content: "9876543210" },
  { icon: EnvelopeIcon, title: "Mail us", content: "mail@info.com" },
];

const footerMenuItems: FooterMenuItem[] = [
  { name: "Qui sommes-nous", link: "#about" },
  { name: "Expertise", link: "#expertises" },
  { name: "Produits", link: "#produits" },
  { name: "Réalisations", link: "#realisations" },
  { name: "Contact", link: "#contact" },
];

const Footer: React.FC = React.memo(() => {
  return (
    <footer className="footer-section">
      <div className="footer-cta pt-5 pb-5">
        <div className="footer-header">
          {contactInfo.map(({ icon: Icon, title, content }) => (
            <div key={title} className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <Icon className="h-6 w-6 text-[#fd3838]" />
                <div className="cta-text">
                  <h4>{title}</h4>
                  <span>{content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">ART METAL FRANCE</div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <div className="social-icons-container">
                  {socialLinks.map(({ link, className, icon: SocialIcon }) => (
                    <a
                      key={link}
                      href={link}
                      className={className}
                      aria-label={`Follow us on ${className}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="copyright-container">
          <div className="dev-container">
            <p>
              Développement{" "}
              <a
                href="https://www.linkedin.com/in/rida-el-fagrouch-13b566142/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rel-fagr
              </a>
            </p>
          </div>
          <div className="text-right">
            <div className="footer-menu">
              <ul>
                {footerMenuItems.map(({ name, link }) => (
                  <li key={name}>
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text-container">
        <div className="copyright-text">
          <p>Copyright &copy; 2024, All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
