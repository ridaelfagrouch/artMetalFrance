import "./Footer.css";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { socialLinks } from "../../utils/constants"

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
  {
    icon: MapPinIcon,
    title: "Find us",
    content: "1010 Avenue, sw 54321, chandigarh",
  },
  { icon: PhoneIcon, title: "Call us", content: "9876543210 0" },
  { icon: EnvelopeIcon, title: "Mail us", content: "mail@info.com" },
];

const footerMenuItems: FooterMenuItem[] = [
  { name: "Qui sommes-nous", link: "#about" },
  { name: "Expertise", link: "#expertises" },
  { name: "Produits", link: "#produits" },
  { name: "Réalisations", link: "#realisations" },
  { name: "Contact", link: "#contact" },
];

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="footer-cta pt-5 pb-5">
          <div className="footer-header">
            {contactInfo.map((info) => (
              <div key={info.title} className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <info.icon className="h-6 w-6 text-[#fd3838]" />
                  <div className="cta-text">
                    <h4>{info.title}</h4>
                    <span>{info.content}</span>
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
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet consectetur adipisicing
                    elit, sed do eiusmod tempor incididuntut consec tetur
                    adipisicing elit.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>

                  <div className="social-icons-container">
                    {socialLinks.map((social) => (
                      <a
                        key={social.link}
                        href={social.link}
                        className={social.className}
                      >
                        <social.icon />
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
                {footerMenuItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.link}>{item.name}</a>
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
};

export default Footer;
