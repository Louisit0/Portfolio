import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeOpenFill,
  BsFillPinFill,
} from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact" className="flex flex-col md:w-1/2 mx-auto pb-5">
      <div className="flex flex-row">
        <h2 className="text-warning mt-auto mr-2">03.</h2>
        <h2 className="text-2xl text-slate-200 font-bold border-b border-warning">
          Contact
        </h2>
      </div>
      <div className="mx-auto md:mx-0 mb-16">
        <h3 className="text-xl font-bold text-slate-200 md:text-xl my-4">
          Don't be shy! Get in touch! 👇
        </h3>
        <div className="md:flex md:flex-row">
          <p className="mb-4 md:mb-0 md:w-1/2">
            Let's connect! I'm open to discussing new opportunities,
            collaborations, or just having a chat! 🙌
          </p>
          <div className="flex flex-row items-center mx-auto">
            <BsFillEnvelopeOpenFill size="2rem" />
            <div className="flex flex-col">
              <h3 className="ml-4 font-bold">Mail</h3>
              <p className="ml-4">Lrangarita7@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex flex-wrap gap-16  justify-center">
          <li>
            <BsGithub size="1.5rem" className="hover:fill-warning" />
          </li>
          <li>
            <BsLinkedin size="1.5rem" className=" hover:fill-warning" />
          </li>
          <li>
            <BsInstagram size="1.5rem" className=" hover:fill-warning" />
          </li>
          <li>
            <BsTwitter size="1.5rem" className=" hover:fill-warning" />
          </li>
        </ul>
      </div>
      <p className="mt-8 text-center text-sm">
        Designed & Build by Luis Ramirez ❤️
      </p>
    </section>
  );
};

export default Contact;
