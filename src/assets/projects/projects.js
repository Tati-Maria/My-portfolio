import project1 from "../images/bloggy.png";
import project2 from "../images/mov.png";
import project3 from "../images/mylibrary.png";
import project4 from "../images/mobudget.png";
import project5 from "../images/dining.png";
import project6 from "../images/johanne.png";

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
        about: "Built a movie app utilizing the TMDB movie API to access a vast database of films. Utilized React, TailwindCSS, and React-Router-Dom to provide an engaging user experience. Users can easily browse and search for movies, plus view detailed information.",
        link: "https://popular-mov.vercel.app/",
        git: "https://github.com/Tati-Maria/movie-app",
        image: project2,
        tech: "React, Tailwindcss, React Router v6, and Axios."
    },
    {
        id: 3,
        name: "MyLibrary",
        about: "The app has a server-side component built with Node.js and Express, which provides a RESTful API that can be used to perform CRUD operations on MongoDB database. EJS (Embedded JavaScript) is used for templating and rendering the views on the client-side. Feel free to add your own books and delete them.",
        link: "https://maria-book-app.herokuapp.com/",
        git: "https://github.com/Tati-Maria/Book-app",
        image: project3,
        tech: "Nodejs, Expressjs, EJs and MongoDB."
    },
    {
        id: 4,
        name: "MoBudget",
        about: 'This project is built with React and React-Router-Dom allows users to keep track of their expenses. The app stores its data using local storage, which means that the information will be saved even if the user closes the browser window or navigates away from the page.',
        link: 'https://mobudget-app.vercel.app/',
        git: 'https://github.com/Tati-Maria/budget-app',
        image: project4,
        tech: 'React, React-Router-Dom@v6, CSS.'
    },
    {
        id: 5,
        name: 'E-commerce Website',
        about: 'A single page application mocking a real e-commerce website.  It includes a fully integrated products page, product detailed information, a cart, and checkout process using Stripe. The use of Redux Toolkit helps manage state across the application, while Tailwindcss and Material UI provide pre-built styling components to enhance the overall design and user experience.(The UI might have changed)',
        link: 'https://johanne-ecommerce.vercel.app/',
        git: 'https://github.com/Tati-Maria/johanne-ecommerce',
        image: project6,
        tech: 'React, Redux, Tailwindcss, React-Router, MUI , and Stripe'
    },
    {
        id: 6,
        name: "Steak'nDining",
        about: "Built with the latest technologies such as Tailwind and React, this landing page offers an easy-to-use interface that allows you to filter through menu options by category and price. Also, an additional reservention form with a confirmation message. This project showcases my ability to create functional, visually appealing web designs that enhance user engagement. Completely responsive.",
        link: "https://steakndining.netlify.app/",
        git: "https://github.com/Tati-Maria/steakndining-restaurant",
        image: project5,
        tech: "React and Tailwindcss."
    },
]