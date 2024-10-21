import React from "react";
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Collapse,
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
import { socialLinks } from "../../utils/constants"

import { navProduitsListMenuItems } from "../../utils/constants"

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

  const handleItemClick = () => {
    if (setIsNavOpen) {
      setIsNavOpen(false);
    }
  };

  const renderItems = (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 px-0">
      {navListData.map((category) => (
        <div
          key={`category-${category[0].id}`}
          className="flex flex-col gap-4 justify-between mb-2 "
        >
          {category.map(({ id, category, description }) => (
            <button
              key={id}
              className="bg-gray-100 hover:bg-white rounded-lg h-full transition-colors duration-300 text-left"
              onClick={handleItemClick}
            >
              <MenuItem
                className="flex flex-col h-full items-start "
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {category}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {description}
                </Typography>
              </MenuItem>
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
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <MenuItem
              className="hidden items-center gap-2 text-black lg:flex lg:rounded-md py-4 px-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <a href={navListItem?.link} className="flex items-center gap-2 w-full">
                {navListItem?.icon &&
                  React.createElement(navListItem.icon, {
                    className: "h-[18px] w-[18px]",
                  })}
                <span>{navListItem?.label}</span>
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </a>
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden w-[64rem] overflow-visible lg:block p-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {renderItems}
        </MenuList>
      </Menu>

      {/* Mobile version */}
      <div className="lg:hidden w-full">
        <Typography
          as="div"
          variant="small"
          className="font-medium w-full"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <MenuItem
            className="flex items-center justify-between text-black py-4 px-3 w-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <a href={navListItem?.link} className="flex items-center gap-2 w-full">
              {navListItem?.icon &&
                React.createElement(navListItem.icon, {
                  className: "h-[18px] w-[18px] flex-shrink-0",
                })}
              <span className="truncate">{navListItem?.label}</span>
            </a>
            <ChevronDownIcon
              strokeWidth={2}
              className={`h-3 w-3 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
            />
          </MenuItem>
        </Typography>
        <Collapse open={isMobileMenuOpen}>
          <div className="py-4 px-7 flex w-full flex-col gap-1 max-h-[50vh] overflow-y-auto ">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ setIsNavOpen }: { setIsNavOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleItemClick = () => {
    if (setIsNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-0 px-0 w-full gap-2 ">
      {navListItems.map(({ label, icon, link }) =>
        label === "Produits" ? (
          <li key={label} className="w-ful bg-white lg:shadow-none shadow-lg rounded-md">
            <NavListMenu
              navListData={navProduitsListMenuItems}
              navListItem={{ label, icon, link }}
              setIsNavOpen={setIsNavOpen}
            />
          </li>
        ) : (
          <li key={label} className="w-full">
            <Typography
              as="div"
              variant="small"
              className="font-medium w-full"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <MenuItem
                  className="flex items-center gap-2 py-4 px-3 w-full bg-white lg:shadow-none shadow-lg rounded-md"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={handleItemClick}
              >
                <a href={link} className="flex items-center gap-2 text-black w-full ">
                  {React.createElement(icon, { className: "h-[18px] w-[18px] flex-shrink-0" })}
                  <span className="truncate">{label}</span>
                </a>
              </MenuItem>
            </Typography>
          </li>
        )
      )}
    </ul>
  );
}

const ComplexNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => {
    console.log("Toggle function called, current state:", isNavOpen);
    setIsNavOpen((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full flex flex-col min-h-4">
      <div className="bg-white shadow-lg">
        <Navbar
          className="max-w-[1300px] w-full mx-auto px-0 shadow-none "
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="relative flex items-center w-full h-[40px] justify-between text-black">
            <button className="flex items-center font-medium text-lg bg-transparent border-none cursor-pointer pl-3">
              ART METAL FRANCE
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
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {isNavOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars2Icon className="h-6 w-6 " />
              )}
            </IconButton>
          </div>
        </Navbar>
      </div>
      {isNavOpen && (
        <div className="lg:hidden flex flex-col gap-8 h-screen z-50 bg-gray-200 py-10 px-3 overflow-auto">
          <NavList setIsNavOpen={setIsNavOpen} />
          <div className="footer-social-icon">
            <span>Follow us</span>

            <div className="social-icons-container mb-10">
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
  )
}
    </div >
  );
};

export default ComplexNavbar;