import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center text-start mx-6 md:mx-8 lg:mx-0 mt-20 pb-4"
    >
      <div className="flex flex-col mx-2 md:mx-8 lg:mx-0 ">
        <h3 className="text-3xl md:text-4xl font-extrabold">Get in touch.</h3>
        <p className="my-6 text-base md:text-lg">
          Or shoot me an email directly on{" "}
          <span className="font-extrabold">lrangarita7@gmail.com</span>
        </p>
        <form action="POST">
          <div className="flex flex-col gap-8">
            <input
              type="text"
              className="px-5 p-3 md:w-3/4 rounded-md bg-white dark:bg-black border border-black dark:border-white"
              placeholder="Name"
            />
            <input
              type="text"
              className="px-5 p-3 md:w-3/4 rounded-md bg-white dark:bg-black border border-black dark:border-white"
              placeholder="Email"
            />
            <textarea
              type="text"
              className="px-5 pt-2 md:w-3/4 pb-20 rounded-md bg-white dark:bg-black border border-black dark:border-white"
              placeholder="Message"
            />
            <button className="p-4 md:w-1/3 bg-black text-white dark:border dark:border-white dark:bg-white dark:text-black">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
