import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface ExperienceItemProps {
  jobTitle: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  jobTitle,
  company,
  period,
  responsibilities,
}) => {
  return (
    <div className="experience-item relative flex flex-col justify-center items-center p-[20px_30px] bg-white rounded-[10px] shadow-custom overflow-hidden">
      <h3 className="job-title text-xl font-semibold text-primary mb-0">
        {jobTitle}
      </h3>
      <p className="company-details font-semibold text-textSecondary mb-[5px] mt-1">
        {company} | {period}
      </p>
      <ul className="job-description list-disc list-inside mt-2 text-textSecondary">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

function Experience() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".experience-item", { interval: 200 });

    return () => sr.destroy();
  }, []);

  return (
    <section id="experiences" className="py-20">
      <div className="text-center mb-20">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Professional Experiences
        </h1>
      </div>

      <div className="experience-section bg-background flex w-full gap-5 flex-wrap justify-center">
        <ExperienceItem
          jobTitle="Backend Developer Intern"
          company="Proxym IT"
          period="Feb 2024 - Jun 2024"
          responsibilities={[
            "Developed and maintained backend services for a Crowdfunding platform for startups",
            "Participated in code reviews and implemented feedback from senior developers",
            "Gained hands-on experience with modern backend frameworks and tools",
          ]}
        />
      </div>
    </section>
  );
}

export default Experience;
