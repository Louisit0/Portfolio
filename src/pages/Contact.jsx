const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center text-start mx-8 md:mx-auto h-main-screen"
    >
      <h3 className="text-4xl md:text-5xl font-extrabold">Get in touch.</h3>
      <p className="my-6 text-lg">
        Or shoot me an email directly on{" "}
        <span className="font-extrabold">lrangarita7@gmail.com</span>
      </p>
      <form action="POST">
        <div className="flex flex-col gap-8">
          <input
            type="text"
            className="px-5 p-3 rounded-md bg-white border border-black"
            placeholder="Name"
          />
          <input
            type="text"
            className="px-5 p-3 rounded-md bg-white border border-black"
            placeholder="Email"
          />
          <textarea
            type="text"
            className="px-5 pt-2 pb-20 rounded-md bg-white border border-black"
            placeholder="Message"
          />
          <button className="p-4 bg-black rounded-md md:w-1/3 text-white">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
