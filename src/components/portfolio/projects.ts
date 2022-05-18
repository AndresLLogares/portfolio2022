import Nextlingo from '../../assets/portfolio/NextLingo.webp';
import Fairview from '../../assets/portfolio/Fairview.svg';
import Nile from '../../assets/portfolio/Nile.svg';
export const projects = [
    {
        id: 1,
        type: "personal",
        name: "Nextlingo",
        image: Nextlingo,
        description: "This project is a small translation application that uses some basic exercises like Duolingo does to practice Next.js. I hope you enjoy it.",
        spanish: "Este proyecto es una pequeña aplicación de traducción que utiliza algunos ejercicios básicos como hace Duolingo para practicar Next.js. Espero que lo disfrutes.",
        link: "https://nextlingo.vercel.app/",
        github: "https://github.com/AndresLLogares/nextlingofront"
    },
    {
        id: 2,
        type: "personal",
        name: "Fairview",
        image: Fairview,
        description: "This is a small website created using the opensea API, although it is a small site with only a few arts loaded, it is fully functional and you can make transactions through it. I hope you enjoy it",
        spanish: "Este es un pequeño sitio web creado usando la API de opensea, aunque es un sitio pequeño con sólo unos pocos artes cargados, es completamente funcional y puedes hacer transacciones a través de él.",
        link: "https://fairviewgallery.netlify.app/",
        github: "https://github.com/AndresLLogares/fairviewFrontend"
    },
    {
        id: 3,
        type: "professional",
        name: "Nile",
        image: Nile,
        description: "This website is a landpage created to be able to join the waiting list of the Nile DAO project.",
        spanish: "Esta página web es una landpage creada para poder apuntarse a la lista de espera del proyecto Nile DAO." ,
        link: "https://www.niledao.io/",
        github: ""
    },
]