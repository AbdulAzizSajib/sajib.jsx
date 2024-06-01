import { FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import useTheme from "../../Hooks/useTheme";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRef } from "react";

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef();

  const [state, handleSubmit] = useForm("xdoqrebw");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message Sent Successfully");
      //clear the form
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div>
      <section
        id="contact"
        className={`py-6  ${
          theme === "light"
            ? "bg-base-100 text-black"
            : "bg-zinc-900 text-white"
        }`}
      >
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="flex flex-col justify-center py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaLocationDot className="mr-2 text-lg"></FaLocationDot>
                <span>Dhaka Bangladesh</span>
              </p>
              <p className="flex items-center">
                <MdLocalPhone className="mr-2 text-lg"></MdLocalPhone>
                <span>01782521705</span>
              </p>
              <p className="flex items-center">
                <MdEmail className="mr-2 text-lg"></MdEmail>
                <span>abdulazizsajib@gmail.com</span>
              </p>
              <p className="flex items-center">
                <FiInstagram className="mr-2 text-lg "></FiInstagram>
                <span>sajib_abdulaziz</span>
              </p>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <p className="font-light capitalize ">
              Fill in the form to start a conversation
            </p>
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                className="block w-full rounded-md shadow-sm input-bordered input "
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=""
                className="block w-full rounded-md shadow-sm input-bordered input "
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>

              <textarea
                rows="3"
                id="name"
                name="text"
                className="block w-full rounded-md textarea-bordered textarea "
                data-gramm="false"
              ></textarea>
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="button"
            >
              <span className="button__text">Send</span>
              <span className="button__icon">
                <IoMdArrowForward className="text-xl text-black"></IoMdArrowForward>
              </span>
            </button>
          </form>
        </div>
        <ToastContainer theme="dark" position="bottom-right"></ToastContainer>
      </section>
    </div>
  );
};

export default Contact;
