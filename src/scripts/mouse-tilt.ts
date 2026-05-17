export function initMouseTilt(selector = '[data-tilt]', intensity = 10) {
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    el.addEventListener('pointerenter', () => {
      // Override .sr's 0.9s transform transition so tilt is instantaneous
      el.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
    });

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`;
    });

    el.addEventListener('pointerleave', () => {
      // Short smooth reset, then clear inline transition so .sr can take over again
      el.style.transition = 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
      setTimeout(() => { el.style.transition = ''; }, 320);
    });
  });
}
