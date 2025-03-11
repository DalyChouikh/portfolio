import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { IconType } from "react-icons";

interface HobbyBoxProps {
  icon: IconType | React.ReactNode;
  title: string;
  description: string;
}

const HobbyBox: React.FC<HobbyBoxProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="hobbies-box relative flex justify-center items-center flex-col text-center w-[100%] sm:w-[80%] md:w-[47%] lg:w-[30%] h-[300px] bg-white rounded-[20px] shadow-custom overflow-hidden mb-6">
      {typeof Icon === "function" ? (
        <Icon className="text-[50px] text-primary" />
      ) : (
        <div className="text-[50px] text-primary">{Icon}</div>
      )}
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-[15px] text-textSecondary max-w-[80%]">
        {description}
      </p>
    </div>
  );
};

function Hobbies() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".hobbies-box", { interval: 200 });

    return () => sr.destroy();
  }, []);

  return (
    <section id="hobbies" className="py-16 md:py-20 w-full">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Hobbies & Interests
        </h1>
      </div>

      <div className="hobbies-container flex w-full justify-center gap-4 md:gap-5 flex-wrap">
        <HobbyBox
          icon={<i className="uil uil-music"></i>}
          title="Playing music"
          description="I love playing music, I play the guitar and the piano"
        />

        <HobbyBox
          icon={<i className="uil uil-headphones"></i>}
          title="Gaming"
          description="I enjoy playing video games."
        />

        <HobbyBox
          icon={<i className="uil uil-dumbbell"></i>}
          title="Practising sports"
          description="I like to practice sports, especially going to the gym, swimming and playing football."
        />
      </div>
    </section>
  );
}

export default Hobbies;
