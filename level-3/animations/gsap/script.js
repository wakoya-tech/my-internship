import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animate on scroll
gsap.utils.toArray('.animate-on-scroll').forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Interactive hover effects
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { scale: 1, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' });
  });
});