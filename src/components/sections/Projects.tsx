import React, { useEffect } from "react";
import { IconType } from "react-icons";
import ScrollReveal from "scrollreveal";

interface ProjectBoxProps {
  icon: IconType | React.ReactNode;
  title: string;
  description: string;
  links: {
    text: string;
    url: string;
  }[];
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  icon: Icon,
  title,
  description,
  links,
}) => {
  return (
    <div className="project-box relative flex justify-center items-center flex-col text-center w-[100%] sm:w-[80%] md:w-[47%] lg:w-[30%] h-[300px] bg-white rounded-[20px] shadow-custom overflow-hidden mb-6">
      {typeof Icon === "function" ? (
        <Icon className="text-[50px] text-primary" />
      ) : (
        <div className="text-[50px] text-primary">{Icon}</div>
      )}
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-[15px] text-textSecondary max-w-[80%]">
        {description}
      </p>

      {links.length === 1 ? (
        <a
          href={links[0].url}
          className="text-primary font-medium mt-auto mb-[10px] hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {links[0].text}
        </a>
      ) : (
        <span className="text-[15px] text-textSecondary mt-auto mb-[10px]">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.url}
                className="text-primary font-medium hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {link.text}
              </a>
              {index < links.length - 1 && " | "}
            </React.Fragment>
          ))}
        </span>
      )}
    </div>
  );
};

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".project-box", { interval: 200 });

    return () => sr.destroy();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-20 w-full">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-2xl font-semibold text-white mb-2">Projects</h1>
      </div>

      <div className="project-container flex w-full justify-center gap-4 md:gap-5 flex-wrap">
        <ProjectBox
          icon={<i className="uil uil-link-alt"></i>}
          title="URL Shortener"
          description="Developed an URL Shortener for my university club Google Developer Groups on Campus ISSAT Sousse to share links professionally."
          links={[
            {
              text: "Github",
              url: "https://github.com/DalyChouikh/url-shortener",
            },
            { text: "View Project", url: "https://gdgc-issatso.tech" },
          ]}
        />

        <ProjectBox
          icon={<i className="uil uil-music"></i>}
          title="Music Discord bot"
          description="A discord bot made to serve some functionalities such as playing music and creating playlists."
          links={[
            {
              text: "Github",
              url: "https://github.com/DalyChouikh/discord-bot-deli",
            },
          ]}
        />

        <ProjectBox
          icon={<i className="uil uil-schedule"></i>}
          title="Taskflow"
          description="It is an Android app that offers a user-friendly task management platform with enhanced security and data persistence."
          links={[
            { text: "Github", url: "https://github.com/DalyChouikh/todo-app" },
            {
              text: "Demo",
              url: "https://drive.google.com/file/d/11JFZtPTqhcAzUSG69zDVSKb8BxZSn4n9/view?usp=sharing",
            },
          ]}
        />

        <ProjectBox
          icon={<i className="uil uil-play"></i>}
          title="Mr Labloub"
          description={`A Unity game I developed called "Mr.Labloub" for a university project, where you collect garbage and plant trees in an attempt to spread awareness to preserve our planet.`}
          links={[
            {
              text: "Demo",
              url: "https://drive.google.com/file/d/1RG7SgHhwAirw-OWgWUqlohP4o_pEbIVP/view?usp=sharing",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
