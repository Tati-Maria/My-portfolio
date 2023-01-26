import project1 from "../images/bloggy.png";
import project2 from "../images/mov.png";
import project3 from "../images/curly.png";
import project4 from "../images/fruti.png"
import project5 from "../images/dining.png";

export const projects = [
    {
        id: 1,
        name: "Bloggy",
        about: "A dynamic and user-friendly blog platform built with Firebase and Nextjs. Utilizing Firebase's powerful database and user authentication features, users are able to create, edit, and delete their own posts, as well as interact with other users' content in a protected enviroment. Also, implemented dark and light mode using next-theme.",
        link: "https://bloggy-rouge.vercel.app/",
        git: "https://github.com/Tati-Maria/Bloggy",
        image: project1,
        tech: "Next.js, Tailwindcss, and Firebase."
    },
    {
        id: 2,
        name: "Popular Mov",
        about: "Built a movie app utilizing the TMDB movie API to access a vast database of films. Utilized React, TailwindCSS, and React-Router-Dom to provide an engaging user experience. Users can easily browse and search for movies, view detailed information, and stay up to date with the latest releases.",
        link: "https://popular-mov.vercel.app/",
        git: "https://github.com/Tati-Maria/movie-app",
        image: project2,
        tech: "React, Tailwindcss, React Router v6, and Axios."
    },
    {
        id: 3,
        name: "Curly Salon",
        about: "Using Next.js and Tailwindcss, I created a visually stunning and responsive website for a fictional hair salon. Clean and modern design, plus an easy navegation. I added a service page and shopping cart where users can add, remove and increase the quantity of the products they wish to buy.",
        link: "https://curly-salon-website.vercel.app/",
        git: "https://github.com/Tati-Maria/curly-salon-website",
        image: project3,
        tech: "Next.js, Tailwindcss, and Context API."
    },
    {
        id: 4,
        name: "FrutiMarket",
        about: "It is a fictional fruit store where users can browse and purchase different types of fruits. The focus of the project was primarily on the implementation of the logic and functionality, rather than the visual design.",
        link: "https://fruittymarket.netlify.app/",
        git: "https://github.com/Tati-Maria/fruit-market",
        image: project4,
        tech: "React, Typescript, Redux Toolkit and SCSS."
    },
    {
        id: 5,
        name: "Steak'nDining",
        about: "Built with the latest technologies such as Tailwind and React, this landing page offers an easy-to-use interface that allows you to filter through menu options by category and price. Also, an additional reservention form with a confirmation message. This project showcases my ability to create functional, visually appealing web designs that enhance user engagement. Completely responsive",
        link: "https://steakndining.netlify.app/",
        git: "https://github.com/Tati-Maria/steakndining-restaurant",
        image: project5,
        tech: "React and Tailwindcss."
    },
]