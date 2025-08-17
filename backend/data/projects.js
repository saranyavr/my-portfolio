const projects = [
    {
        id: 1,
        name: "E-commerce Website",
        description: `E-commerce website built with MERN stack. users can add products to cart, 
        make payments, and manage their orders. store data in MongoDB database. authentication is handled using JWT.
         session management is done using cookies.`,
        technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB","Tailwind CSS","cloudinary", "Stripe"],
        mainLink: "https://github.com/saranyavr/e-commerce-MERN-application.git"
    },
    {
        id: 2,
        name: "Personal Portfolio",
        description: `A personal portfolio website to showcase my work. Built with React and Node.js.
         it features a responsive design and smooth user experience. `,
        technologies: ["React", "Node.js", "Express"],
        mainLink: "N/A"
    },
    {
        id: 3,
        name: "Keeper App",
        description: `To-Do-manager App. Users can create, update, and delete tasks. 
        It uses a RESTful API built with Node.js and Express.`,
        technologies: ["React", "Node.js","Express", "mongoDB"],
        mainLink: "https://github.com/saranyavr/KeeperApp-using-ReactJs-nodeJs-mongoDB.git"

        
    },
    {

        id: 4,
        name: "Secret Game App",
        description: `playing secret game to find the secret. Users can sign in with Google OAuth2.0 and play the game. 
        session management is done using cookies.`,
        technologies: ["EJS","HTML", "CSS", "Node.js", "Express", "googleOAuth2.o", "postgreSQL"],
        mainLink: "https://github.com/saranyavr/Secrets-APP-using-node-express-ejs-postgreSQL.git"
    }
];

export default projects;
