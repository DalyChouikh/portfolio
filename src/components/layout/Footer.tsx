import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center flex-col gap-7 bg-gray-100 py-[40px_60px]">
      <div className="top-footer mt-12">
        <p className="text-2xl text-black font-semibold">
          Mohamed Ali CHOUIKH.
        </p>
      </div>

      <div className="middle-footer">
        <ul className="flex">
          <li className="list-none">
            <Link
              to="home"
              className="text-textSecondary font-medium mx-5 cursor-pointer no-underline hover:text-primary"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="about"
              className="text-textSecondary font-medium mx-5 cursor-pointer no-underline hover:text-primary"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="projects"
              className="text-textSecondary font-medium mx-5 cursor-pointer no-underline hover:text-primary"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="contact"
              className="text-textSecondary font-medium mx-5 cursor-pointer no-underline hover:text-primary"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-social-icons flex gap-7">
        <a
          href="https://www.instagram.com/dali.chouikh"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center w-10 h-10 bg-primary text-white rounded-full shadow-md hover:bg-primary-hover"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://linkedin.com/in/mohamedali-chouikh"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center w-10 h-10 bg-primary text-white rounded-full shadow-md hover:bg-primary-hover"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a
          href="https://github.com/DalyChouikh"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center w-10 h-10 bg-primary text-white rounded-full shadow-md hover:bg-primary-hover"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>

      <div className="bottom-footer text-sm mt-2.5 mb-12">
        <p className="text-black flex flex-col sm:flex-row items-center justify-center">
          <span>Copyright &copy; {currentYear} Made with ❤️</span>
          <span className="sm:ml-1">
            by
            <Link
              to="home"
              className="text-textSecondary font-medium ml-1 cursor-pointer no-underline hover:text-primary"
              spy={true}
              smooth={true}
              duration={500}
            >
              Mohamed Ali CHOUIKH
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
