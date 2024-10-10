import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
  Collapse
} from "@material-tailwind/react";
import {
  CubeIcon,
  WrenchIcon,
  BuildingStorefrontIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

// nav list menu
const navProduitsListMenuItems = [
  [
    {
      id: 1,
      category: "Famille : Portes métalliques",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      id: 2,
      category: "⁠Famille : Garde-corps",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      id: 3,
      category: "⁠Famille : Mains courantes",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ],
  [
    {
      id: 4,
      category: "⁠Famille : Clôtures et portails métalliques",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
    {
      id: 5,
      category: "⁠Famille : Escaliers métalliques",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
    {
      id: 6,
      category: "Famille : Accessoires de fixation et quincaillerie",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ],
  [
    {
      id: 7,
      category: "⁠Famille : Menuiserie métallique sur mesure",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
    {
      id: 8,
      category: "⁠Famille : Chasse-roues et dispositifs de sécurité routière",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
    {
      id: 9,
      category: "⁠Famille : Structures métalliques pour espaces publics",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ]
];

const navServicesListMenuItems = [
  [
    {
      id: 1,
      category: "Famille : Portes métalliques",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      id: 2,
      category: "⁠Famille : Garde-corps",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      id: 3,
      category: "⁠Famille : Mains courantes",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ],
  [
    {
      id: 4,
      category: "⁠Famille : Clôtures et portails métalliques",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
    {
      id: 5,
      category: "⁠Famille : Escaliers métalliques",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
    {
      id: 6,
      category: "Famille : Accessoires de fixation et quincaillerie",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ],
];

interface NavListMenuProps {
  navListData: Array<{ id: number; category: string; description: string }[]>;
  navListItem?: { label: string; icon: React.ElementType; link: string }
}

// nav list component
const navListItems = [
  {
    label: "Marchés",
    icon: BuildingStorefrontIcon,
    link: "/marches"
  },
  {
    label: "Contact",
    icon: EnvelopeIcon,
    link: "/contact"
  },
];

function NavListMenu({ navListData, navListItem }: NavListMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 px-0">
      {navListData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-4">
          {category.map(({ id, category, description }) => (
            <a href="#" key={id} className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
              <MenuItem className="flex flex-col items-start" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography variant="h6" color="blue-gray" className="mb-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {category}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  {description}
                </Typography>
              </MenuItem>
            </a>
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
          <Typography as="div" variant="small" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <MenuItem className="hidden items-center gap-2 text-black lg:flex lg:rounded-full px-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <a href={navListItem?.link} className="flex items-center gap-2">
                {navListItem?.icon && React.createElement(navListItem.icon, { className: "h-[18px] w-[18px] text-black" })}
                <span className="font-medium">{navListItem?.label}</span>
              </a>
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[64rem] overflow-visible lg:block p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Card color="blue" shadow={false} variant="gradient" className="col-span-3 grid h-60 w-full place-items-center rounded-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          {renderItems}
        </MenuList>
      </Menu>

      {/* Mobile version */}
      <div className="lg:hidden h-full">
        <MenuItem
          className="flex items-center justify-between font-medium text-black h-[50px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <a href={navListItem?.link} className="flex items-center gap-2">
            {navListItem?.icon && React.createElement(navListItem.icon, { className: "h-[18px] w-[18px] text-black" })}
            <span className="text-md font-bold">{navListItem?.label}</span>
          </a>
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-3 w-3 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
          />
        </MenuItem>
        <Collapse open={isMobileMenuOpen}>
          <div className="ml-6 flex w-full flex-col gap-1">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center gap-5 px-0">
      <NavListMenu navListData={navProduitsListMenuItems} navListItem={{ label: "Produits", icon: CubeIcon, link: "/produits" }} />
      <NavListMenu navListData={navServicesListMenuItems} navListItem={{ label: "Services", icon: WrenchIcon, link: "/services" }} />
      {navListItems.map(({ label, icon, link }) => (
        <Typography key={label} as="a" href={link} variant="small" className="text-black"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <MenuItem className="flex items-center gap-2 lg:rounded-full px-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
            <span className="text-black font-medium">{label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const ComplexNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <div className="flex w-full justify-center items-center fixed top-0 z-50 bg-white px-3">
      <Navbar className="shadow-none px-0 rounded-none max-w-[1300px]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="w-full px-0">
          <div className="relative flex items-center w-full h-[50px] justify-between text-black px-0">
            <a href="#" className="flex items-center font-medium text-lg pl-2">
              ART METAL FRANCE
            </a>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              size="sm"
              color="black"
              variant="text"
              onClick={toggleIsNavOpen}
              className="ml-auto mr-2 lg:hidden" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <Bars2Icon className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList />
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default ComplexNavbar;
