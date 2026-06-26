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
})();


/* ── Pill Popup Logic ── */
function togglePill(color) {
  var popup  = document.getElementById(color + '-popup');
  var btn    = document.getElementById(color + '-pill-btn');
  var other  = color === 'red' ? 'blue' : 'red';
  var oPopup = document.getElementById(other + '-popup');
  var oBtn   = document.getElementById(other + '-pill-btn');

  // Close the other popup first
  if (oPopup)  oPopup.classList.remove('open');
  if (oBtn)    oBtn.setAttribute('aria-expanded', 'false');

  // Toggle this popup
  if (!popup) return;
  var isOpen = popup.classList.contains('open');
  if (isOpen) {
    popup.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  } else {
    popup.classList.add('open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

function closePill(color) {
  var popup = document.getElementById(color + '-popup');
  var btn   = document.getElementById(color + '-pill-btn');
  if (popup) popup.classList.remove('open');
  if (btn)   btn.setAttribute('aria-expanded', 'false');
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePill('red');
    closePill('blue');
  }
});

// Close popups when clicking outside the matrix hero wrap
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('matrix-hero-wrap');
  if (wrap && !wrap.contains(e.target)) {
    closePill('red');
    closePill('blue');
  }
});

/* ── Scroll Reveal for Compare Section ── */
(function () {
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.glass-reveal').forEach(function(el) {
    revealObs.observe(el);
  });
})();
