/**
 * Ophanim — sidebar.js
 * The navigation rail: open/close state and the identity block at its foot.
 * Shared by every page. No framework, no build step.
 */

const RAIL_MOBILE = '(max-width: 900px)';

function railIsMobile() {
  return window.matchMedia(RAIL_MOBILE).matches;
}

/** Show the re-open button only when the rail is actually off screen. */
function syncRailToggle() {
  const btn = document.getElementById('sidebar-toggle');
  if (!btn) return;
  const hidden = railIsMobile()
    ? !document.body.classList.contains('rail-open-mobile')
    : document.body.classList.contains('rail-closed');
  btn.classList.toggle('hidden', !hidden);
}

function toggleSidebar() {
  if (railIsMobile()) {
    document.body.classList.toggle('rail-open-mobile');
  } else {
    const closed = document.body.classList.toggle('rail-closed');
    localStorage.setItem('sidebar-collapsed', closed ? 'true' : 'false');
  }
  syncRailToggle();
}

function initSidebar() {
  if (!document.getElementById('sidebar')) return;

  if (localStorage.getItem('sidebar-collapsed') === 'true') {
    document.body.classList.add('rail-closed');
  }
  syncRailToggle();

  // Identity block — reads the local key store, same as every other page.
  try {
    const keys = JSON.parse(localStorage.getItem('ophanim_keys') || '[]');
    const activeIdx = localStorage.getItem('ophanim_active_key_index');
    const nameEl = document.getElementById('sidebar-key-name');
    const avatarEl = document.getElementById('sidebar-avatar');
    const idEl = document.getElementById('sidebar-key-id');

    if (keys.length > 0) {
      const idx = activeIdx !== null ? parseInt(activeIdx) : 0;
      const primary = keys[idx] || keys[0];
      if (nameEl) nameEl.textContent = primary.name || 'Unnamed key';
      if (avatarEl) avatarEl.textContent = (primary.name || 'OP').slice(0, 2).toUpperCase();
      if (idEl) {
        idEl.textContent = primary.fingerprint
          ? primary.fingerprint.slice(-8).toUpperCase()
          : 'KEY ' + (idx + 1);
      }
    } else {
      if (nameEl) nameEl.textContent = 'No key yet';
      if (idEl) idEl.textContent = 'Generate one';
    }
  } catch (e) {
    /* a corrupt store should not take the page down */
  }
}

window.addEventListener('resize', syncRailToggle);
document.addEventListener('DOMContentLoaded', initSidebar);
