import { FiDownload } from "react-icons/fi";
import aboutPic from "../../../assets/abt.jpg";
import "./about.css";
import useTheme from "../../Hooks/useTheme";

const About = () => {
  const { theme } = useTheme();
  return (
    <div id="about" className="flex justify-center w-full min-h-screen ">
      <div
        className={` hero ${
          theme === "light"
            ? "bg-base-100 text-black"
            : "bg-zinc-900 text-white"
        } `}
      >
        <div className="flex-col hero-content lg:flex-row">
          <div className="relative">
            <img
              src={aboutPic}
              className="object-cover h-full rounded-lg shadow-2xl lg:max-w-xl"
            />
          </div>
          <div className="">
            <h1 className="text-lg font-bold text-blue-800 ">ABOUT ME</h1>
            <p className="py-6 text-2xl font-bold ">
              Front-end Developer based in Dhaka, Bangladesh 📍
            </p>
            <p
              className={`text-justify  ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Hey, my name is Sajib, and I&apos;m a Frontend Developer. My
              passion is to create and develop a clean UI/UX for my users. My
              main stack currently is React/Next.js in combination with Tailwind
              CSS and TypeScript.
            </p>
            <br />
            <p className="font-bold">Education</p>
            <p
              className={`text-justify ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              I completed my bachelor of science in Computer Science and
              Engineering from American International University of Bangladesh.
              Afterward, I took a Mern Stack web development course on
              <span className="font-bold uppercase gradient-text ">
                {" "}
                programming hero
              </span>
              , instructed by <span className="font-bold">jhankar mahbub</span>,
              where I gained more knowledge about web development, explored more
              content, and experienced many new things.
            </p>
            <div className="mt-8">
              <a href="https://flowcv.com/resume/gubs48fk1v" target="_blank">
                <button className="button" type="button">
                  <span className="button__text">Download CV</span>
                  <span className="button__icon">
                    <FiDownload className="text-xl text-black animate-bounce"></FiDownload>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
