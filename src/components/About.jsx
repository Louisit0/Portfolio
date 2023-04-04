import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import avatar from "../assets/img/avatar.jpeg";

const About = () => {
  return (
    <section id="About" className="flex flex-col md:w-1/2 mx-auto mb-36">
      <div className="flex flex-row w-1/2 mb-10 ">
        <h2 className="text-warning mt-auto mr-2">01.</h2>
        <h2 className="text-2xl text-slate-200 font-bold border-b border-warning">
          About me
        </h2>
      </div>
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:order-1 mb-4 md:text-lg">
          <p className="mb-4 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            iste dolores, assumenda magnam odio maxime maiores delectus
            exercitationem voluptas corrupti at excepturi blanditiis! Totam
            autem numquam deleniti quae, repudiandae laudantium!
          </p>
          <p className="mb-4 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimosiste dolores. Dignissimos iste dolores.
          </p>
        </div>

        <div className="md:w-1/2 md:order-2">
          <div className="avatar relative flex flex-row rounded-full w-32 md:w-60 bg-base-100 mx-auto">
            <div className="w-32 md:w-60 rounded ring ring-gray-400 ring-offset-base-100 ring-offset-2">
              <img
                src={avatar}
                alt="avatar"
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
