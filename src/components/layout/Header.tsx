import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const downloadResume = () => {
    window.open(
      "https://docs.google.com/document/d/1ztDrBPmVdI_80uhiYwTFzH5cMODkMXfAHyU0238fRLA/preview",
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed flex justify-between items-center w-full px-[5vw] md:px-[9vw] transition-all duration-300 bg-background z-50
        ${
          scrolled ? "h-[60px] md:h-[70px] shadow-md" : "h-[80px] md:h-[90px]"
        }`}
    >
      <div className="relative">
        <p className="text-2xl sm:text-2xl md:text-[22px] lg:text-3xl font-semibold text-primary">
          Daly
        </p>
        <span className="absolute -top-[80%] md:-top-[90%] lg:-top-[90%] -right-3 sm:-right-3 md:-right-3 lg:-right-4 text-6xl sm:text-6xl md:text-6xl lg:text-7xl text-textSecondary">
          .
        </span>
      </div>

      <div
        className={`nav-menu ${menuOpen ? "responsive" : ""} 
        ${
          menuOpen
            ? "fixed top-[60px] md:top-[70px] left-0 flex-col justify-center items-center bg-white/70 backdrop-blur-lg w-full min-h-[450px] h-[90vh] transition-all duration-300 z-50"
            : "hidden md:flex items-center h-full"
        }`}
      >
        <ul
          className={`flex ${
            menuOpen
              ? "flex-col items-center gap-6 pt-10"
              : "items-center md:gap-1 lg:gap-3"
          }`}
        >
          <li className="list-none relative">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-textSecondary font-medium px-2 md:px-2 lg:px-3 mx-1 md:mx-1 lg:mx-2 no-underline hover:text-primary cursor-pointer transition-colors duration-300 text-sm md:text-[15px] lg:text-base"
              activeClass="!text-primary font-medium relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-12px] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-primary after:rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="list-none relative">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="text-textSecondary font-medium px-2 md:px-2 lg:px-3 mx-1 md:mx-1 lg:mx-2 no-underline hover:text-primary cursor-pointer transition-colors duration-300 text-sm md:text-[15px] lg:text-base"
              activeClass="!text-primary font-medium relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-12px] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-primary after:rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="list-none relative">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="text-textSecondary font-medium px-2 md:px-2 lg:px-3 mx-1 md:mx-1 lg:mx-2 no-underline hover:text-primary cursor-pointer transition-colors duration-300 text-sm md:text-[15px] lg:text-base"
              activeClass="!text-primary font-medium relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-12px] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-primary after:rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="list-none relative">
            <Link
              to="hobbies"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="text-textSecondary font-medium px-2 md:px-2 lg:px-3 mx-1 md:mx-1 lg:mx-2 no-underline hover:text-primary cursor-pointer transition-colors duration-300 text-sm md:text-[15px] lg:text-base"
              activeClass="!text-primary font-medium relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-12px] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-primary after:rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Hobbies
            </Link>
          </li>
          <li className="list-none relative">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="text-textSecondary font-medium px-2 md:px-2 lg:px-3 mx-1 md:mx-1 lg:mx-2 no-underline hover:text-primary cursor-pointer transition-colors duration-300 text-sm md:text-[15px] lg:text-base"
              activeClass="!text-primary font-medium relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-12px] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-primary after:rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center">
        <button
          className="btn flex items-center py-1 md:py-1.5 px-3 md:px-3 h-auto text-black text-nowrap text-xs md:text-xs lg:text-sm"
          onClick={downloadResume}
        >
          View Resume <i className="uil uil-file-alt ml-2"></i>
        </button>
      </div>

      <div className="flex items-center justify-center md:hidden">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Header;
