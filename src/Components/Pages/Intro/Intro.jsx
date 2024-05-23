import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import pic from "../../../assets/3.jpg";
import jwt from "../../../assets/json-web-tokens-jwt-io-seeklogo.svg";

const Intro = () => {
  const skillsCollection = [
    { skill: "https://skillicons.dev/icons?i=html" },
    { skill: "https://skillicons.dev/icons?i=css" },
    { skill: "https://skillicons.dev/icons?i=js" },
    { skill: "https://skillicons.dev/icons?i=tailwind" },
    { skill: "https://skillicons.dev/icons?i=mongodb" },
    { skill: "https://skillicons.dev/icons?i=express" },
    { skill: "https://skillicons.dev/icons?i=react" },
    { skill: "https://skillicons.dev/icons?i=nodejs" },
    { skill: "https://skillicons.dev/icons?i=vite" },
    { skill: "https://skillicons.dev/icons?i=firebase" },
    { skill: jwt },
    { skill: "https://skillicons.dev/icons?i=figma" },
    { skill: "https://skillicons.dev/icons?i=git" },
    { skill: "https://skillicons.dev/icons?i=github" },
  ];
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen mx-auto bg-base-200"
    >
      {/* 1st Div */}

      <div>
        <div className="flex-col hero-content lg:flex lg:flex-row-reverse">
          <div className="flex justify-center w-full lg:w-1/2">
            <img src={pic} className="object-cover morph-image" />
          </div>
          <div className="w-full px-4 space-y-4 lg:w-1/2 lg:px-0">
            <h1 className="font-semibold   text-black text-center lg:text-left lg:text-[55px] md:text-5xl sm:text-4xl">
              Front-End React Developer
            </h1>

            <p className="mt-2 font-light text-center lg:text-start lg:text-lg md:text-base sm:text-sm">
              Hi there, I&apos;m Sajib Abdul Aziz. A passionate Front-end React
              Developer based in Dhaka, Bangladesh 📍
            </p>
            {/* 2nd div */}
            <div className="flex items-center justify-center mt-2 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/abdulazizsajib2023/"
                data-tippy="LinkedIn"
              >
                <CiLinkedin className="text-3xl transition duration-300 transform hover:text-blue-600 hover:scale-110"></CiLinkedin>
              </a>
              <a href="https://github.com/AbdulAzizSajib" data-tippy="GitHub">
                <FiGithub className="text-2xl transition duration-300 transform hover:text-blue-600 hover:scale-110 "></FiGithub>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2 p-4 ">
          <div className="flex items-center">
            <h1 className="font-bold">Tech Stack</h1>
            <div className="w-8 rotate-90 h-[1px] border-t-2 border-black"></div>
          </div>

          {skillsCollection.map((allSkill, index) => (
            <div key={index}>
              <img
                className={`transition duration-300 transform hover:scale-110 ${
                  index === 10 && "w-[46px] bg-[#242938] p-0.5 rounded-md"
                }`}
                src={allSkill.skill}
                alt="HTML Icon"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
