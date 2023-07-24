import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center text-start mx-6 md:mx-8 lg:mx-0"
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
              className="px-5 p-3 rounded-md bg-white dark:bg-black border border-black dark:border-white"
              placeholder="Name"
            />
            <input
              type="text"
              className="px-5 p-3 rounded-md bg-white dark:bg-black border border-black dark:border-white"
              placeholder="Email"
            />
            <textarea
              type="text"
              className="px-5 pt-2 pb-20 rounded-md bg-white dark:bg-black border border-black dark:border-white"
              placeholder="Message"
            />
            <button className="p-4 md:w-1/3 bg-black text-white dark:border dark:border-white">
              Send Message
            </button>
          </div>
        </form>
        <div className="w-full mt-10 pb-4">
          <Link
            to={"/"}
            className=" select-none cursor-pointer transition-all font-bold"
          >
            <div className="flex flex-row w-full justify-start">
              <p className="mr-4 text-sm self-center">Go back home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
