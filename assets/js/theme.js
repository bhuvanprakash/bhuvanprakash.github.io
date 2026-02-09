(function () {
  var KEY = 'theme';
  var root = document.documentElement;

  function getStored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      if (value) localStorage.setItem(KEY, value);
      else localStorage.removeItem(KEY);
    } catch (e) {}
  }

  function isDark() {
    return root.classList.contains('dark') || (!root.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function apply(theme) {
    root.classList.remove('dark', 'light');
    if (theme === 'dark') root.classList.add('dark');
    else if (theme === 'light') root.classList.add('light');
    setStored(theme);
    updateButton();
  }

  function updateButton() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = isDark() ? 'Light' : 'Dark';
  }

  function toggle() {
    apply(isDark() ? 'light' : 'dark');
  }

  (function init() {
    var stored = getStored();
    if (stored === 'dark' || stored === 'light') apply(stored);
    else updateButton();

    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
  })();
})();
