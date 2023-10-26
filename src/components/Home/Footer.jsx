const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-medium text-slate-400 hover:text-gray-300 focus-visible:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          Figma{" "}
        </a>
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-gray-300 focus-visible:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-gray-300 focus-visible:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-gray-300 focus-visible:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-gray-300 focus-visible:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-gray-300 focus-visible:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
