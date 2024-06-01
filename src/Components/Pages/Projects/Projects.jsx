import { FaGithub } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import useTheme from "../../Hooks/useTheme";

const projects = [
  {
    title: "KFC Website Replica",
    description:
      "Developed a responsive and feature-rich clone of the KFC website using the MERN stack and Tailwind CSS. Implemented Firebase for user authentication and developed an admin panel for managing content.User Authentication with Firebase (registration, login, role management).Responsive design using Tailwind CSS, ensuring a seamless experience across devices.Admin panel for managing menu items, orders, and users with CRUD operations",
    Technologies:
      "React, Node.js, Express.js, MongoDB, Firebase Authentication, Tailwind CSS",
    image: "https://i.ibb.co/G2XymYs/localhost-5173-3.png",
    liveLink: "https://kfcbysajib.web.app",
    github: "https://github.com/AbdulAzizSajib/Kfc_Clone",
  },
  {
    title: "Restaurant Website",
    description:
      "I developed a full-featured restaurant website that allows users to browse the menu, place orders, and make payments online. The project utilizes the MERN stack along with JWT for secure authentication and Stripe for seamless payment integration.User Authentication with Firebase and JWT (registration, login, role management).Stripe integration for secure and efficient payment processing.Admin panel for managing menu items, orders, and users with CRUD operations.Shopping cart and checkout functionalities with integrated payment gateway",
    Technologies:
      "React, Node.js, Express.js, MongoDB, Firebase Authentication, JWT, Stripe, Tailwind CSS",
    image: "https://i.ibb.co/hLt28xq/localhost-5173-5.png",
    liveLink: "https://rich-food-restaurant.web.app",
    github: "https://github.com/AbdulAzizSajib/restaurant_website",
  },
  {
    title: "Home Decor E-commerce Platform",
    description:
      "Developed a responsive and a  Home Decor  website using the MERN stack and Tailwind CSS. Implemented Firebase for user authentication and developed an admin panel for managing content.User Authentication with Firebase (registration, login, role management) Responsive design using Tailwind CSS, ensuring a seamless experience across devices.Dynamic menu display and real-time order tracking",
    Technologies:
      " Frontend: React.js, Tailwind CSS, JavaScript Backend: Node.js, Express.js Database: MongoDB Payment Gateway: Stripe API Other: Axios (for HTTP requests),Firebase (for authentication)",
    image: "https://i.ibb.co/r5G6NMq/localhost-5173.png",
    liveLink: "https://homedeco-d4499.web.app",
    github: "https://github.com/AbdulAzizSajib/HomeDeco_Ecommerce",
  },
];
const Projects = () => {
  const { theme } = useTheme();
  return (
    <div
      id="projects"
      className={`w-full min-h-screen py-16 ${
        theme === "light" ? "bg-base-200 text-black" : "bg-zinc-950 text-white"
      } `}
    >
      <h2 className="p-4 text-lg font-bold text-center text-blue-800 uppercase">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className=" hero">
          <div className="flex-col hero-content lg:flex-row">
            <div className="relative flex justify-center ">
              <div className="object-cover rounded-2xl shadow-lg lg:w-[700px] overflow-auto scr h-[500px]">
                <img src={project.image} alt="" />
              </div>
            </div>
            <div className="lg:pl-8 lg:pr-4">
              <h1 className="text-xl font-semibold capitalize lg:text-3xl">
                {project.title}
              </h1>
              <p
                className={`py-4 text-sm text-justify  lg:text-base ${
                  theme === "light" ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                {project.description}
              </p>

              <p
                className={`py-2 text-justify text-neutral-600 lg:text-base ${
                  theme === "light" ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                <h2
                  className={`font-semibold  capitalize ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  Technologies Used
                </h2>
                {project.Technologies}
              </p>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button" type="button">
                    <span className="button__text">Live Preview</span>
                    <span className="button__icon">
                      <TiArrowForward className="text-xl"></TiArrowForward>
                    </span>
                  </button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button" type="button">
                    <span className="button__text">Github Link</span>
                    <span className="button__icon">
                      <FaGithub className="text-xl"></FaGithub>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
