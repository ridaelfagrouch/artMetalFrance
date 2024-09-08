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
      category: " ⁠Famille : Structures métalliques pour espaces publics",
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
  navListItem?: { label: string; icon: any; link: string }
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
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {navListData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-4">
          {category.map(({ id, category, description }) => (
            <a href="#" key={id} className="hover:bg-gray-100 rounded-lg transition-colors">
              <MenuItem className="flex flex-col items-start p-2">
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {category}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
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
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} className="hidden lg:block">
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <a href={navListItem?.link} className="flex items-center gap-2">
                {React.createElement(navListItem?.icon, { className: "h-[18px] w-[18px] text-blue-gray-500" })}
                <span className="text-lg font-bold">{navListItem?.label}</span>
              </a>
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[64rem] overflow-visible lg:block p-4">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid  h-60 w-full place-items-center rounded-lg"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          {renderItems}
        </MenuList>
      </Menu>

      {/* Mobile version */}
      <div className="lg:hidden h-full">
        <MenuItem
          className="flex items-center justify-between font-medium text-blue-gray-900  h-[50px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <a href={navListItem?.link} className="flex items-center gap-2">
            {React.createElement(navListItem?.icon, { className: "h-[18px] w-[18px] text-blue-gray-500" })}
            <span className="text-lg font-bold">{navListItem?.label}</span>
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
    <ul className=" flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      <NavListMenu navListData={navProduitsListMenuItems} navListItem={{ label: "Produits", icon: CubeIcon, link: "/produits" }} />
      <NavListMenu navListData={navServicesListMenuItems} navListItem={{ label: "Services", icon: WrenchIcon, link: "/services" }} />
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="a"
          href={link}
          variant="small"
          color="gray"
          className="font-bold text-lg text-blue-gray-500 "
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full h-[50px]">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
            <span className="text-gray-900">{label}</span>
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
    <Navbar className="mx-auto w-full max-w-7xl p-y-8 lg:rounded-full lg:pl-8">
      <div className="relative mx-auto flex items-center w-full h-[70px] justify-between text-black">
        <a href="#" className="flex items-center font-bold text-lg ">
          ART METAL FRANCE
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

export default ComplexNavbar;