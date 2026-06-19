(function () {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let width, height, particles = [];
  const COUNT = isTouchDevice ? 30 : 110;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:0;';
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.15;
      this.vy = (Math.random() - 0.5) * 0.12;
      this.size = Math.random() * 1.6 + 0.4;
      this.alpha = Math.random() * 0.25 + 0.05;
      this.isGold = Math.random() > 0.85;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -20) this.x = width + 20;
      if (this.x > width + 20) this.x = -20;
      if (this.y < -20) this.y = height + 20;
      if (this.y > height + 20) this.y = -20;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.isGold
        ? 'rgba(196,165,74,' + (this.alpha * 1.2) + ')'
        : 'rgba(255,255,255,' + this.alpha + ')';
      ctx.fill();
    }
  }

  function init() { particles = Array.from({ length: COUNT }, () => new Particle()); }
  function loop() {
    ctx.fillStyle = '#07070b';
    ctx.fillRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); loop();

  if (!isTouchDevice) {
    const light = document.createElement('div');
    light.style.cssText = 'position:fixed;width:500px;height:500px;background:radial-gradient(circle,rgba(255,255,255,0.02) 0%,transparent 70%);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:left 0.05s,top 0.05s;';
    document.body.appendChild(light);
    document.addEventListener('mousemove', e => { light.style.left = e.clientX + 'px'; light.style.top = e.clientY + 'px'; });
  }

  if (!isTouchDevice) {
    document.querySelectorAll('.tilt-enabled').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg)';
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('page-enter'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  document.querySelectorAll('a:not([target])').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease';
        setTimeout(() => { window.location.href = href; }, 220);
      }
    });
  });

  function resetOpacity() {
    document.body.style.opacity = '1';
    document.body.style.transition = '';
  }

  window.addEventListener('pageshow', resetOpacity);
  document.addEventListener('DOMContentLoaded', resetOpacity);
  resetOpacity();
  setTimeout(resetOpacity, 50);
  setTimeout(resetOpacity, 150);
  // ── MATRIX SCROLL ANIMATION ── //
  const matrixSection = document.getElementById('matrix-section');
  const redPath = document.getElementById('red-path');
  const bluePath = document.getElementById('blue-path');
  const splitSection = document.getElementById('split-section');
  const redPane = document.getElementById('red-pane');
  const bluePane = document.getElementById('blue-pane');

  if (matrixSection && redPath && bluePath) {
    const matrixImg = document.querySelector('.matrix-hero-img');
    let redLength = 0;
    let blueLength = 0;

    function updatePathCoordinates() {
      if (!matrixImg) return;
      const sRect = matrixSection.getBoundingClientRect();
      const iRect = matrixImg.getBoundingClientRect();
      
      // Calculate exact pixel position of hands inside the image
      // Left hand is ~30% X, ~76% Y. Right hand is ~70% X, ~76% Y
      const rx = (iRect.left - sRect.left) + iRect.width * 0.30;
      const ry = (iRect.top - sRect.top) + iRect.height * 0.76;
      const bx = (iRect.left - sRect.left) + iRect.width * 0.70;
      const by = (iRect.top - sRect.top) + iRect.height * 0.76;

      // Convert to viewBox percentages (0-100)
      const rXp = (rx / sRect.width) * 100;
      const rYp = (ry / sRect.height) * 100;
      const bXp = (bx / sRect.width) * 100;
      const bYp = (by / sRect.height) * 100;

      // Update paths dynamically
      redPath.setAttribute('d', `M ${rXp} ${rYp} C ${rXp - 5} 50, 20 65, 15 85`);
      bluePath.setAttribute('d', `M ${bXp} ${bYp} C ${bXp + 5} 50, 80 65, 85 85`);

      // 1. Initialize SVG Path Lengths for stroke-dash animation
      redLength = redPath.getTotalLength();
      blueLength = bluePath.getTotalLength();

      redPath.style.strokeDasharray = redLength;
      redPath.style.strokeDashoffset = redLength;
      bluePath.style.strokeDasharray = blueLength;
      bluePath.style.strokeDashoffset = blueLength;
      
      // Force initial scroll check
      handleScroll();
    }

    // 2. Step A: Fluid Scroll Lines (Fountain effect)
    function handleScroll() {
      if (redLength === 0) return; // Not initialized yet
      const sectionRect = matrixSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start animation when top of section enters viewport, end near the bottom
      const scrollStart = viewportHeight;
      const scrollDistance = sectionRect.height - viewportHeight * 0.4;
      
      let scrollProgress = (scrollStart - sectionRect.top) / scrollDistance;
      scrollProgress = Math.max(0, Math.min(1, scrollProgress)); // Clamp 0 to 1

      // Draw the lines dynamically
      redPath.style.strokeDashoffset = redLength * (1 - scrollProgress);
      bluePath.style.strokeDashoffset = blueLength * (1 - scrollProgress);
    }

    window.addEventListener('resize', updatePathCoordinates);
    window.addEventListener('load', updatePathCoordinates);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once initially just in case load already fired
    setTimeout(updatePathCoordinates, 100);

    // 3. Step B: Delayed Text Drop (IntersectionObserver)
    if (splitSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Un-hide the blocks when they finally enter the viewport
            redPane.classList.add('reveal-active');
            bluePane.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.3 // Triggers when 30% of the text container is visible
      });

      observer.observe(splitSection);
    }
  }
})();

