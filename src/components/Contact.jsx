import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact" className="flex flex-col md:w-1/2 mx-auto pb-5">
      <div className="flex flex-row mx-auto">
        <h2 className="text-warning mt-auto mr-2">
          03. <span className="font-semibold">What's next?</span>
        </h2>
        {/* <h2 className="text-2xl text-slate-200 font-bold border-b border-warning">
          What's next?
        </h2> */}
      </div>
      <div className="text-center md:w-4/5 mx-auto mb-24">
        <h3 className="text-4xl font-bold text-slate-200 md:text-5xl my-5">
          Get In Touch
        </h3>
        <p className="mb-4 text-justify">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a
          href="#"
          className="btn btn-outline btn-warning w-1/2 mx-auto mt-10 md:my-auto md:w-auto"
        >
          Say hello
        </a>
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
        <p className="mt-8 text-center text-sm">
          Designed & Build by Luis Ramirez ❤️
        </p>
      </div>
    </section>
  );
};

export default Contact;
