import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 
            p-3 rounded-full 
            bg-primary hover:bg-primary-hover
            text-white shadow-custom
            transition-all duration-300 ease-in-out
            transform hover:scale-110
            animate-fade-in
          `}
          aria-label="Scroll to top"
        >
          <i className="uil uil-arrow-up text-xl"></i>
        </button>
      )}
    </>
  );
}
