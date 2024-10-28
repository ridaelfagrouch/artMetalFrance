import React from "react";
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeIcon,
  WrenchIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  Bars2Icon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { socialLinks, navProduitsListMenuItems } from "../../utils/constants";
import { Logo } from "../../assets";

interface NavListMenuProps {
  navListData: Array<{ id: number; category: string; description: string }[]>;
  navListItem?: { label: string; icon: React.ElementType; link: string };
  setIsNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const navListItems = [
  {
    label: "qui sommes-nous",
    icon: UserGroupIcon,
    link: "#about",
  },
  {
    label: "Expertise",
    icon: WrenchIcon,
    link: "#expertises",
  },
  {
    label: "Produits",
    icon: CubeIcon,
    link: "#produits",
  },
  {
    label: "Réalisations",
    icon: PhotoIcon,
    link: "#realisations",
  },
  {
    label: "Contact",
    icon: EnvelopeIcon,
    link: "#contact",
  },
];

function NavListMenu({ navListData, navListItem, setIsNavOpen }: Readonly<NavListMenuProps>) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleItemClick = (link: string) => {
    if (setIsNavOpen) {
      setIsNavOpen(false);
    }
    document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderItems = (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 px-0" role="menu">
      {navListData.map((category) => (
        <div
          key={`category-${category[0].id}`}
          className="flex flex-col gap-4 justify-between mb-2 w-[100%]"
          role="none"
        >
          {category.map(({ id, category, description }) => (
            <button
              key={`product-${id}`}
              className="bg-gray-100 hover:bg-white rounded-lg h-[170px] transition-colors duration-300 text-left"
              onClick={() => handleItemClick(`#product-${id}`)}
              role="menuitem"
              tabIndex={0}
            >
              <div className="flex flex-col h-full items-start p-4">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {category}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                  placeholder={undefined}
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}
                >
                  {description}
                </Typography>
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <React.Fragment>
      {/* Desktop version */}
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <button
            className="hidden items-center gap-2 text-black lg:flex lg:rounded-md py-4 px-3 group"
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleItemClick(navListItem?.link || '');
      }}
    >
      <a
        href={navListItem?.link}
        className="flex items-center gap-2 w-full"
      >
            {navListItem?.icon &&
              React.createElement(navListItem.icon, {
                className: "h-[18px] w-[18px] text-base group-hover:text-[#fd3838] transition-colors duration-300",
                "aria-hidden": "true"
              })}
            <span className="text-base group-hover:text-[#fd3838] transition-colors duration-300">
              {navListItem?.label}
            </span>
            <ChevronDownIcon
              strokeWidth={2}
              className={`text-base h-3 w-3 transition-transform group-hover:text-[#fd3838] ${isMenuOpen ? "rotate-180" : ""
                }`}
              aria-hidden="true"
            />
          </a>
        </button>
      </MenuHandler>
        <MenuList
          className="hidden w-[64rem] overflow-visible lg:block p-4 mt-[5px]"
          role="menu"
          aria-orientation="vertical"
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {renderItems}
        </MenuList>
      </Menu>

      {/* Mobile version */}
      <div className="lg:hidden w-full" role="navigation bg-red-100">
        <button
          className="flex items-center justify-between text-black py-4 px-3 w-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-haspopup="true"
        >
          <a
            href={navListItem?.link}
            className="flex items-center gap-2 w-full"
          >
            {navListItem?.icon &&
              React.createElement(navListItem.icon, {
                className: "h-[18px] w-[18px] flex-shrink-0 ",
                "aria-hidden": "true"
              })}
            <span className="truncate">{navListItem?.label}</span>
          </a>
          <ChevronDownIcon
            strokeWidth={2}
            className={` h-3 w-3 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        <Collapse open={isMobileMenuOpen}>
          <div
            className="py-4 px-7 flex w-full flex-col gap-1 max-h-[50vh] overflow-y-auto "
            role="menu"
            aria-orientation="vertical"
          >
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ setIsNavOpen }: Readonly<{ setIsNavOpen?: React.Dispatch<React.SetStateAction<boolean>> }>) {
  const handleItemClick = (link: string) => {
    if (setIsNavOpen) {
      setIsNavOpen(false);
    }

    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="flex flex-col lg:flex-row lg:items-center lg:gap-0 px-0 w-full gap-2"
      aria-label="Main navigation"
    >
      {navListItems.map(({ label, icon, link }) =>
        label === "Produits" ? (
          <div key={label} className="w-full bg-white lg:shadow-none shadow-lg rounded-md">
            <NavListMenu
              navListData={navProduitsListMenuItems}
              navListItem={{ label, icon, link }}
              setIsNavOpen={setIsNavOpen}
            />
          </div>
        ) : (
          <div key={label} className="w-full">
            <button
              className="flex items-center gap-2 py-4 px-3 w-full bg-white lg:shadow-none shadow-lg rounded-md group"
              onClick={() => handleItemClick(link)}
            >
              <a
                href={link}
                className="flex items-center gap-2 text-black w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(link);
                }}
              >
                {React.createElement(icon, {
                  className: "h-[18px] w-[18px] flex-shrink-0 text-base group-hover:text-[#fd3838]",
                  "aria-hidden": "true"
                })}
                  <span className="truncate text-base group-hover:text-[#fd3838]">{label}</span>
              </a>
            </button>
          </div>
        )
      )}
    </nav>
  );
}

const ComplexNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );

    return () => {
      window.removeEventListener("resize", () => setIsNavOpen(false));
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="fixed top-0 z-50 w-full flex flex-col min-h-4">
      <div className="bg-white shadow-lg">
        <Navbar
          className="max-w-[1300px] w-full mx-auto px-0 shadow-none"
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="relative flex items-center w-full h-[40px] justify-between text-black">
            <button
              className="flex items-center font-medium text-lg bg-transparent border-none cursor-pointer pl-3"
              onClick={handleLogoClick}
              aria-label="Go to homepage"
            >
              <img
                src={Logo}
                alt="Art Metal France"
                className="h-16 w-20"
              />
            </button>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              size="sm"
              color="black"
              variant="text"
              onClick={toggleIsNavOpen}
              className="lg:hidden mr-3"
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isNavOpen}
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {isNavOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars2Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </IconButton>
          </div>
        </Navbar>
      </div>
      {isNavOpen && (
        <div
          className="lg:hidden flex flex-col gap-8 h-screen z-50 bg-gray-200 py-10 px-3 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <NavList setIsNavOpen={setIsNavOpen} />
          <div className="footer-social-icon">
            <Typography
              variant="h6"
              className="mb-4"
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Follow us
            </Typography>

            <div className="social-icons-container mb-10">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className={social.className}
                  aria-label={`Follow us on ${social.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.createElement(social.icon, {
                    "aria-hidden": "true"
                  })}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplexNavbar;