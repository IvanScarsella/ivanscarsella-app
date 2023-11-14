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

export const programmingProjects = [
  {
    name: "Zingoni Propiedades",
    description: "Sitio web desarrollado para la inmobiliaria Zingoni Propiedades. Contiene filtros de búsqueda, carrusel con las propiedades destacadas, páginas de contacto con la posibilidad de enviar mails y geoubicación con Google Maps.",
    link: "zingonipropiedades.com.ar",
    techStack: [javascript, next, html, css, prisma, postgresql, googleMaps],
    image: zingoniPropiedades,
  },
  {
    name: "Nike Landing Page",
    description: "Landing page de Nike trabajada en Next js y aplicando estilos con Tailwind.",
    link: "https://nike-tailwind-ivanscarsella.vercel.app/",
    techStack: [javascript, next, css, tailwind],
    image: nikeLandingPage,
  },
];
