import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  useEffect(() => {
    // Top origin reveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    
    // Left origin reveal
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    
    // Right origin reveal
    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    
    // Headers
    sr.reveal('.top-header', {});
    
    // Home section
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });
    
    // Education section
    sr.reveal('.education-item', { interval: 200 });
    
    // Experience section
    sr.reveal('.experience-item', { interval: 200 });
    
    // Projects section
    sr.reveal('.project-box', { interval: 200 });
    
    // Hobbies section
    sr.reveal('.hobbies-box', { interval: 200 });
    
    // About section
    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });
    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });
    
    return () => {
      sr.destroy();
      srLeft.destroy();
      srRight.destroy();
    };
  }, []);
};

export default useScrollReveal;
