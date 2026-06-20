/**
 * Ophanim — sidebar.js
 * Shared sidebar toggle & init logic used across all pages.
 * Depends on: Tailwind CSS (loaded in HTML)
 */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const toggleBtn = document.getElementById('sidebar-toggle');

  const isCollapsed = sidebar.classList.contains('translate-x-[calc(100%+24px)]');

  if (isCollapsed) {
    sidebar.classList.remove('translate-x-[calc(100%+24px)]', 'opacity-0', 'pointer-events-none');
    mainContent.classList.add('lg:pr-[304px]');
    toggleBtn.classList.add('hidden');
    localStorage.setItem('sidebar-collapsed', 'false');
  } else {
    sidebar.classList.add('translate-x-[calc(100%+24px)]', 'opacity-0', 'pointer-events-none');
    mainContent.classList.remove('lg:pr-[304px]');
    toggleBtn.classList.remove('hidden');
    localStorage.setItem('sidebar-collapsed', 'true');
  }
}

function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const toggleBtn = document.getElementById('sidebar-toggle');

  if (!sidebar || !mainContent || !toggleBtn) return;

  const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (isCollapsed) {
    sidebar.classList.add('translate-x-[calc(100%+24px)]', 'opacity-0', 'pointer-events-none');
    mainContent.classList.remove('lg:pr-[304px]');
    toggleBtn.classList.remove('hidden');
  } else {
    sidebar.classList.remove('translate-x-[calc(100%+24px)]', 'opacity-0', 'pointer-events-none');
    mainContent.classList.add('lg:pr-[304px]');
    toggleBtn.classList.add('hidden');
  }

  // Populate sidebar user account info from localStorage key store
  try {
    const keys = JSON.parse(localStorage.getItem('ophanim_keys') || '[]');
    const activeIdx = localStorage.getItem('ophanim_active_key_index');
    const nameEl = document.getElementById('sidebar-key-name');
    const avatarEl = document.getElementById('sidebar-avatar');
    const idEl = document.getElementById('sidebar-key-id');

    if (keys.length > 0) {
      const idx = activeIdx !== null ? parseInt(activeIdx) : 0;
      const primary = keys[idx] || keys[0];
      if (nameEl) nameEl.textContent = primary.name || 'Unknown Key';
      if (avatarEl) avatarEl.textContent = (primary.name || 'OP').slice(0, 2).toUpperCase();
      if (idEl) {
        const displayId = primary.fingerprint
          ? '#' + primary.fingerprint.slice(-8).toUpperCase()
          : '#OPH-KEY-' + idx;
        idEl.textContent = displayId;
      }
    }
  } catch (e) { /* graceful degradation */ }
}

document.addEventListener('DOMContentLoaded', initSidebar);
