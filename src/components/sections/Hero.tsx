import { useEffect } from "react";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";
import { ReactTyped } from "react-typed";
import avatar from "../../../public/avatar.png";

function Hero() {
  const downloadResume = () => {
    window.open(
      "https://docs.google.com/document/d/1ztDrBPmVdI_80uhiYwTFzH5cMODkMXfAHyU0238fRLA/preview",
      "_blank"
    );
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".hero-text-card", {});
    sr.reveal(".hero-name", { delay: 100 });
    sr.reveal(".hero-text-info", { delay: 200 });
    sr.reveal(".hero-btn-group", { delay: 200 });
    sr.reveal(".social-icons", { delay: 200 });
    sr.reveal(".hero-image", { delay: 300 });

    return () => sr.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center min-h-[700px] h-screen pt-16 md:pt-0 w-full"
    >
      <div className="relative flex flex-col justify-center min-h-[40vh] md:min-h-[80vh] w-full md:w-[60%] px-1 sm:px-3 md:px-0 order-2 md:order-1 mt-8 md:mt-0 z-10">
        <div className="hero-text-card">
          <span className="bg-tertiary text-white px-2 py-0.5 text-xs rounded">
            Mohamed Ali CHOUIKH
          </span>
        </div>

        <div className="hero-name my-5">
          <p className="text-3xl md:text-[40px] lg:text-[50px] font-semibold text-textSecondary">
            I'm a{" "}
            <ReactTyped
              strings={["Software Engineer", "Web Developer", "Freelancer"]}
              typeSpeed={100}
              backSpeed={80}
              backDelay={2000}
              loop
              className="capitalize text-primary"
            />
          </p>
        </div>

        <div className="hero-text-info mb-7">
          <p className="text-sm">
            Software Engineer @ISSATSO | Golang | NestJS | DevOps Enthusiast |
            Open for New Opportunities 🔍💻
          </p>
        </div>

        <div className="hero-btn-group flex flex-wrap gap-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-primary flex items-center"
          >
            Contact Me <i className="uil uil-message ml-2"></i>
          </Link>
          <button
            className="btn flex items-center text-black"
            onClick={downloadResume}
          >
            View Resume <i className="uil uil-file-alt ml-2"></i>
          </button>
        </div>

        <div className="social-icons flex gap-7 mt-10 md:mt-20">
          <a
            href="https://www.instagram.com/dali.chouikh"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-10 h-10 text-black bg-white rounded-full shadow-md cursor-pointer hover:text-primary"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/in/mohamedali-chouikh"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-10 h-10 text-black bg-white rounded-full shadow-md cursor-pointer hover:text-primary"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/DalyChouikh"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-10 h-10 text-black bg-white rounded-full shadow-md cursor-pointer hover:text-primary"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>

      <div className="hero-image flex justify-center items-center min-h-[30vh] md:min-h-[80vh] w-full md:w-[40%] order-1 md:order-2 mt-16 md:mt-0">
        <div className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] rounded-[55%_45%_55%_45%] overflow-hidden animate-float">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex justify-center items-center w-[150px] h-[50px] gap-1 no-underline text-primary bg-white font-bold rounded-[30px] shadow-md cursor-pointer"
        >
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
