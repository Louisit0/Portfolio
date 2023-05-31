import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeFill,
  BsFillPinFill,
} from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact" className="flex flex-col md:w-1/2 mx-auto pb-5">
      <div className="flex flex-row">
        <h2 className="text-2xl text-slate-200 font-bold">Contact</h2>
      </div>
      <div className="md:mx-0 mb-16">
        <h3 className="text-xl font-bold text-slate-200 md:text-xl my-4">
          Don't be shy! Get in touch! 👇
        </h3>
        <div className="grid grid-cols-2 gap-3 mt-5 ">
          <div className="flex flex-row justify-center py-2 border-2 border-white rounded-2xl">
            <BsFillEnvelopeFill size="1.2rem" />
            <h3 className="ml-2">Mail</h3>
          </div>
          <div className="flex flex-row justify-center py-2 border-2 border-white rounded-2xl">
            <BsLinkedin size="1.2rem" />
            <h3 className="ml-2">Linkedin</h3>
          </div>
          <div className="flex flex-row justify-center py-2 border-2 border-white rounded-2xl">
            <BsGithub size="1.2rem" />
            <h3 className="ml-2">Github</h3>
          </div>
          <div className="flex flex-row justify-center py-2 border-2 border-white rounded-2xl">
            <BsFillPinFill size="1.2rem" />
            <h3 className="ml-2">Buenos Aires</h3>
          </div>
        </div>
      </div>
      {/* <div className="mt-10">
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
      </div> */}
      <p className="mt-8 text-center text-sm">Made by Luis Ramirez</p>
    </section>
  );
};

export default Contact;
