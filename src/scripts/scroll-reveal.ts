export function initScrollReveal(selector = '.sr, .sr-left, .sr-scale') {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(selector).forEach((el) => obs.observe(el));
}
