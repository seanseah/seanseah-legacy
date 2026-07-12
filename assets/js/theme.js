/* theme.js — light/dark mode toggle for the modernised HPSTR theme.
   The initial theme is set pre-paint by an inline script in head.html
   (to avoid a flash of the wrong theme). This file wires up the buttons. */
(function () {
  var root = document.documentElement;

  function getTheme() {
    return root.getAttribute('data-theme') || 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    syncButtons(theme);
  }

  function syncButtons(theme) {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      buttons[i].setAttribute(
        'title',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  function toggle() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  function init() {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', toggle);
    }
    syncButtons(getTheme());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
