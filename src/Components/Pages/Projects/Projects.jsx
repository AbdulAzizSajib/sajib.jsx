const projects = [
  {
    title: "home decoration ecommerce website",
    description:
      " I developed a comprehensive e-commerce platform catering to individuals seeking modern home decor items to enhance their living spaces. Leveraging the MERN stack MongoDB, Express.js,React.js, Node.js  along with Tailwind CSS and other custom components, I created a seamless and visually appealing online shopping experience.",
    Technologies:
      " Frontend: React.js, Tailwind CSS, JavaScript Backend: Node.js, Express.js Database: MongoDB Payment Gateway: Stripe API Other: Axios (for HTTP requests),JWT (for authentication)",
    image: "https://i.ibb.co/r5G6NMq/localhost-5173.png",
  },
  {
    title: "KFC Restaurant Clone",
    description:
      " I developed a comprehensive e-commerce platform catering to individuals seeking modern home decor items to enhance their living spaces. Leveraging the MERN stack MongoDB, Express.js,React.js, Node.js  along with Tailwind CSS and other custom components, I created a seamless and visually appealing online shopping experience.",
    Technologies:
      " Frontend: React.js, Tailwind CSS, JavaScript Backend: Node.js, Express.js Database: MongoDB Payment Gateway: Stripe API Other: Axios (for HTTP requests),JWT (for authentication)",
    image: "https://i.ibb.co/G2XymYs/localhost-5173-3.png",
    liveLink: "https://kfcbysajib.web.app",
  },
  {
    title: "Restaurant Website",
    description:
      " I developed a comprehensive e-commerce platform catering to individuals seeking modern home decor items to enhance their living spaces. Leveraging the MERN stack MongoDB, Express.js,React.js, Node.js  along with Tailwind CSS and other custom components, I created a seamless and visually appealing online shopping experience.",
    Technologies:
      " Frontend: React.js, Tailwind CSS, JavaScript Backend: Node.js, Express.js Database: MongoDB Payment Gateway: Stripe API Other: Axios (for HTTP requests),JWT (for authentication)",
    image: "https://i.ibb.co/hLt28xq/localhost-5173-5.png",
    liveLink: "https://rich-food-restaurant.web.app",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen bg-base-200">
      <h2 className="p-4 text-lg font-bold text-center text-blue-800 uppercase">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className=" hero">
          <div className="flex-col hero-content lg:flex-row">
            <div className="relative flex justify-center ">
              <div className="object-cover rounded-2xl shadow-lg lg:w-[700px] overflow-auto h-[500px]">
                <img src={project.image} alt="" />
              </div>
            </div>
            <div className="lg:pl-8 lg:pr-4">
              <h1 className="text-xl font-semibold capitalize lg:text-3xl">
                {project.title}
              </h1>
              <p className="py-4 text-sm text-justify text-neutral-600 lg:py-6 lg:text-base">
                {project.description}
              </p>
              <p className="py-4 font-bold text-justify lg:py-6 lg:text-base">
                Technologies Used
              </p>
              <p className="py-4 text-justify text-neutral-600 lg:py-6 lg:text-base">
                {project.Technologies}
              </p>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uppercase btn-xs lg:btn-md btn btn-outline lg:text-base">
                    Live Preview
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
