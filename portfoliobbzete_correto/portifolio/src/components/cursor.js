// ===== CUSTOM CURSOR =====
export function initCursor() {
  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (!cursor || !dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let dotX = -100, dotY = -100;
  let ringX = -100, ringY = -100;

  const dotSpeed = 1;
  const ringSpeed = 0.12;

  function animate() {
    dotX = mouseX;
    dotY = mouseY;
    ringX += (mouseX - ringX) * ringSpeed;
    ringY += (mouseY - ringY) * ringSpeed;

    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hover effects on interactive elements
  const interactives = 'a, button, [data-cursor-hover], .bento-tile, .skill-card, .p-card, .contact-tile, .social-link, .nav-dot';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  animate();
}
