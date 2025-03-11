import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  courses: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  period,
  courses,
}) => {
  return (
    <div className="education-item relative flex flex-col justify-center items-center p-[20px_30px] bg-white rounded-[10px] shadow-custom overflow-hidden text-center w-full">
      <h3 className="education-title text-xl font-semibold text-primary mb-0">
        {institution}
      </h3>
      <p className="education-details font-semibold text-textSecondary mb-[5px]">
        {degree} | {period}
      </p>
      <ul className="education-description list-disc list-inside mt-2 text-textSecondary w-4/5">
        <li>
          <b>Relevant Coursework:</b> {courses}
        </li>
      </ul>
    </div>
  );
};

function Education() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".education-item", { interval: 200 });

    return () => sr.destroy();
  }, []);

  return (
    <section id="education" className="py-20">
      <div className="text-center mb-20">
        <h1 className="text-2xl font-semibold text-white mb-2">Education</h1>
      </div>

      <div className="education-section bg-background flex w-full gap-5 flex-wrap justify-center">
        <EducationItem
          institution="Higher Institute of Applied Sciences and Technology of Sousse"
          degree="Engineering Degree in Computer Science & Software Engineering"
          period="2024 - 2027"
          courses="Software Engineering; Operating Systems; Advanced Algorithms; Data Structures; Databases; Database Administration; Networks"
        />

        <EducationItem
          institution="Higher Institute of Applied Sciences and Technology of Sousse"
          degree="Bachelor's Degree in Computer Science"
          period="2021 - 2024"
          courses="Intro to CS and Algorithms; Operating Systems; Algorithms; Data Structures; Databases; Database Administration; Intro to Networks"
        />
      </div>
    </section>
  );
}

export default Education;
