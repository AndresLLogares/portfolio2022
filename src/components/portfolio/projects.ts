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
        link: "https://nextlingo.vercel.app/",
        github: "https://github.com/AndresLLogares/nextlingofront"
    },
    {
        id: 2,
        type: "personal",
        name: "Fairview",
        image: Fairview,
        description: "This is a small website created using the opensea API, although it is a small site with only a few arts loaded, it is fully functional and you can make transactions through it. I hope you enjoy it",
        link: "https://fairviewgallery.netlify.app/",
        github: "https://github.com/AndresLLogares/fairviewFrontend"
    },
    {
        id: 3,
        type: "professional",
        name: "Nile",
        image: Nile,
        description: "This website is a landpage created to be able to join the waiting list of the Nile DAO project.",
        link: "https://www.niledao.io/",
        github: ""
    },
]