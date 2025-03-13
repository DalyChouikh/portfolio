import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface SkillBoxProps {
  title: string;
  skills: string[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => {
  return (
    <div className="m-2.5">
      <div className="mb-7">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

function About() {
  const downloadResume = () => {
    window.open(
      "https://docs.google.com/document/d/1ztDrBPmVdI_80uhiYwTFzH5cMODkMXfAHyU0238fRLA/preview",
      "_blank"
    );
  };

  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srRight.reveal(".skills-box", { delay: 100 });

    return () => {
      srLeft.destroy();
      srRight.destroy();
    };
  }, []);

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "React",
    "NextJS",
  ];
  const backendSkills = ["Golang", "JAVA (SpringBoot)", "NestJS", "NextJS"];
  const databaseSkills = ["MySQL", "PostgreSQL", "MongoDB"];
  const toolsSkills = [
    "Docker",
    "Kubernetes",
    "Supabase",
    "Git & Github",
    "Linux",
    "Azure",
    "Redis",
    "Discord API",
  ];

  return (
    <section id="about" className="py-16 md:py-20 w-full">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-2xl font-semibold text-white mb-2">About Me</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12">
        <div className="flex w-full md:w-1/2">
          <div className="about-info relative flex justify-center flex-col items-center py-[30px] px-4 sm:px-5 pb-[70px] w-full bg-white rounded-[20px] shadow-custom">
            <h3 className="text-xl font-semibold text-primary mb-4">
              About me
            </h3>
            <p className="text-center text-[15px] text-gray-600">
              💻🚀 Hello, I am a Software Engineer, Aspiring Golang Developer
              and a DevOps Enthusiast, driven by a passion for solving complex
              problems through code. I love Golang and am enthusiastic about
              DevOps, continuously expanding my expertise in these fields. Feel
              free to connect with me – I'm always open to discussing new ideas,
              projects, or collaboration opportunities!
            </p>
            <div className="absolute right-5 bottom-5">
              <button
                className="btn btn-primary rounded-full flex items-center"
                onClick={downloadResume}
              >
                View Resume <i className="uil uil-file-alt ml-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 skills-box">
          <SkillBox title="Frontend" skills={frontendSkills} />
          <SkillBox title="Backend" skills={backendSkills} />
          <SkillBox title="Databases" skills={databaseSkills} />
          <SkillBox title="Tools" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
}

export default About;
