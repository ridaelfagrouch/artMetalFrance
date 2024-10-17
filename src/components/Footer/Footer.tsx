import "./Footer.css";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  content: string;
}

interface SocialLink {
  icon: React.ElementType;
  link: string;
  className: string;
}

interface FooterMenuItem {
  name: string;
  link: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
    link: "#",
    className: "facebook-bg p-2 h-[40px] w-[40px]",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    link: "#",
    className: "twitter-bg p-2 h-[40px] w-[40px]",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
    link: "#",
    className: "google-bg p-2 h-[40px] w-[40px]",
  },
];

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
      <div className="container">
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
