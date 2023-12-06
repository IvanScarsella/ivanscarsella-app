import bootstrap from "../../../assets/icons/bootstrap_icon.png";
import css from "../../../assets/icons/css.png";
import googleMaps from "../../../assets/icons/googleMaps_icon.png";
import html from "../../../assets/icons/html_icon.png";
import javascript from "../../../assets/icons/javascript_icon.png";
import next from "../../../assets/icons/next_icon.svg";
import postgresql from "../../../assets/icons/postgresql_icon.png";
import prisma from "../../../assets/icons/prisma_icon.png";
import react from "../../../assets/icons/react_icon.png";
import redux from "../../../assets/icons/redux_icon.png";
import tailwind from "../../../assets/icons/tailwind_icon.webp";
import typescript from "../../../assets/icons/typescript_icon.png";

import nikeLandingPage from "./projectImages/nikeLandingPage.png";
import zingoniPropiedades from "./projectImages/zingoniPropiedades.png";
import techTalentHub from "./projectImages/techTalentHub.png";
import conversor from "./projectImages/conversor.png";

export const programmingProjects = [
  {
    name: "Zingoni Propiedades",
    description:
      "Sitio web desarrollado para la inmobiliaria Zingoni Propiedades. Contiene filtros de búsqueda, carrusel con las propiedades destacadas, páginas de contacto con la posibilidad de enviar mails y geoubicación con Google Maps.",
    link: "https://zingonipropiedades.com.ar",
    techStack: [
      { src: javascript, name: "JavaScript" },
      { src: next, name: "Next Js" },
      { src: html, name: "HTML" },
      { src: css, name: "CSS" },
      { src: prisma, name: "Prisma" },
      { src: postgresql, name: "PostgreSQL" },
      { src: googleMaps, name: "Google Maps" },
    ],
    image: zingoniPropiedades,
  },
  {
    name: "Tech Talent Hub",
    description:
      "TechTalentHub fue el proyecto final del bootcamp Henry. Es una aplicación que busca crear vñinculos laborales entre empresas orientales y trabajadores latinoamericanos especiaizados en el rubro tecnológico.",
    link: "https://tech-talent-hub-actual-git-develop-equipo3henry.vercel.app/",
    techStack: [
      { src: javascript, name: "JavaScript" },
      { src: next, name: "Next Js" },
      { src: css, name: "CSS" },
      { src: html, name: "HTML" },
      { src: prisma, name: "Prisma" },
      { src: postgresql, name: "PostgreSQL" },
    ],
    image: techTalentHub,
  },
  {
    name: "Nike Landing Page",
    description:
      "Landing page de Nike trabajada en Next js y aplicando estilos con Tailwind.",
    link: "https://nike-tailwind-ivanscarsella.vercel.app/",
    techStack: [
      { src: javascript, name: "JavaScript" },
      { src: next, name: "Next Js" },
      { src: css, name: "CSS" },
      { src: tailwind, name: "Tailwind" },
    ],
    image: nikeLandingPage,
  },
  {
    name: "Conversor de Números Romanos",
    description:
      "Aplicación creada para traducir números decimales a romanos y viceversa.",
    link: "https://conversor-de-numeros-romanos-l7ms-ivanscarsella.vercel.app/",
    techStack: [
      { src: typescript, name: "TypeScript" },
      { src: next, name: "Next Js" },
      { src: bootstrap, name: "Bootstrap" },
      { src: css, name: "CSS" },
    ],
    image: conversor,
  },
  // {
  //   name: "Proyecto Individual para Henry - Countries",
  //   description: "Este proyecto lo realicé para el bootcamp de Henry, en donde pongo en práctica los recursos aprendidos para crear una aplicación en donde se ven distintos países vinculados a sus actividades turísticas.",
  //   link: "https://github.com/IvanScarsella/PI-Countries-IvanScarsella",
  //   techStack: [react, redux, javascript, css, html, postgresql],
  //   image: techTalentHub,
  // },
];
