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
              Junior Full Stack Web Developer based in Dhaka, Bangladesh 📍
            </p>
            <p
              className={`text-justify  ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Hi there! 👋 I&apos;m Sajib, a junior full stack web developer
              passionate about creating innovative and user-centric web
              applications. I specialize in the MERN stack with strong skills in
              HTML, CSS, JavaScript, React, Node.js, and Express.js. I also work
              with MongoDB, Firebase, Git, GitHub, npm, Yarn, JWT, and Tailwind
              CSS. I deploy my projects on Vercel. As a continuous learner,
              I&apos;m always exploring new technologies and best practices.
              I&apos;m eager to contribute to impactful projects and collaborate
              with like-minded professionals. Let&apos;s connect!
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
