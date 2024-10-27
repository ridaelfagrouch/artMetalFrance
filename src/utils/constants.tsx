import {
  ProductImage2,
  ProductImage6,
  ProductImage7,
  ProductImage8,
  ProductImage9,
  PortesMetalliques2,
  PortesMetalliques3,
  GardeCorps1,
  MainsCourantes1,
  MainsCourantes2,
  Clôtures1,
  Clôtures2,
  Clôtures3,
  EscaliersMetalliques1,
  EscaliersMetalliques2,
  
 }  from "../assets";
interface SocialLink {
  icon: React.ElementType;
  link: string;
  className: string;
  id?: string;
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
    id: "facebook",

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
    id: "twitter",
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
    id: "google",
  },
];

const navProduitsListMenuItems = [
  [
    {
      id: 1,
      image: [ PortesMetalliques2, PortesMetalliques3],
      type: "Famille",
      category: "Portes métalliques",
      description:
        "Portes robustes en acier et aluminium, alliant sécurité maximale et design contemporain. Solutions sur mesure pour espaces résidentiels et professionnels.",
    },
    {
      id: 2,
      image: [ProductImage2, GardeCorps1],
      type: "Famille",
      category: "⁠Garde-corps",
      description:
        "Systèmes de protection élégants et conformes aux normes. Fabrication personnalisée pour balcons, terrasses et escaliers.",
    },
    {
      id: 3,
      image: [MainsCourantes1, MainsCourantes2],
      type: "Famille",
      category: "⁠Mains courantes",
      description:
        "Supports ergonomiques en métal, conjuguant sécurité et esthétique. Installation précise pour tout type d'espace.",
    },
  ],
  [
    {
      id: 4,
      image: [Clôtures1, Clôtures2, Clôtures3],
      type: "Famille",
      category: "⁠Clôtures et portails métalliques",
      description:
        "Délimitations et accès sécurisés en métal. Design moderne et durable, adaptable à vos espaces extérieurs.",
    },
    {
      id: 5,
      image: [EscaliersMetalliques1, EscaliersMetalliques2],
      type: "Famille",
      category: "⁠Escaliers métalliques",
      description:
        "Structures hélicoïdales ou droites en métal. Conception architecturale alliant solidité et élégance.",
    },
    {
      id: 6,
      image: [ProductImage6],
      type: "Famille",
      category: "Accessoires de fixation et quincaillerie",
      description:
        "Gamme complète d'éléments de fixation et accessoires métalliques. Solutions techniques pour tous types d'assemblages.",
    },
  ],
  [
    {
      id: 7,
      image: [ProductImage7],
      type: "Famille",
      category: "⁠Menuiserie métallique sur mesure",
      description:
        "Réalisations métalliques personnalisées selon vos spécifications. Expertise technique pour projets uniques.",
    },
    {
      id: 8,
      image: [ProductImage8],
      type: "Famille",
      category: "⁠Chasse-roues et dispositifs de sécurité routière",
      description:
        "Équipements de protection et de guidage en métal. Solutions durables pour la sécurisation des zones de circulation.",
    },
    {
      id: 9,
      image: [ProductImage9],
      type: "Famille",
      category: "⁠Structures métalliques pour espaces publics",
      description: "Aménagements urbains en métal, adaptés aux contraintes collectives. Mobilier robuste pour espaces publics.",
    },
  ],
];

export { socialLinks, navProduitsListMenuItems };