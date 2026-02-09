(function () {
  var form = document.getElementById('search-form');
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  var hintEl = document.getElementById('search-hint');
  var index = [];

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderResults(items) {
    if (!items.length) {
      resultsEl.innerHTML = '<p class="search-results-empty">No matches.</p>';
      return;
    }
    var html = '<ul class="deepdive-index-list">';
    items.forEach(function (item) {
      html += '<li class="deepdive-index-item">';
      html += '<a href="' + escapeHtml(item.url) + '" class="deepdive-index-link">';
      html += '<span class="deepdive-index-title">' + escapeHtml(item.title) + '</span>';
      if (item.description) {
        html += '<span class="deepdive-index-meta">' + escapeHtml(item.description) + '</span>';
      }
      html += '</a></li>';
    });
    html += '</ul>';
    resultsEl.innerHTML = html;
  }

  function runSearch(q) {
    q = (q || '').toLowerCase().trim();
    hintEl.textContent = q ? 'Results as you type.' : 'Results appear as you type.';
    if (!q.length) {
      resultsEl.innerHTML = '';
      return;
    }
    var words = q.split(/\s+/).filter(Boolean);
    var matches = index.filter(function (item) {
      var text = (item.title + ' ' + (item.description || '') + ' ' + (item.content || '')).toLowerCase();
      return words.every(function (w) { return text.indexOf(w) !== -1; });
    });
    renderResults(matches.slice(0, 20));
  }

  function init() {
    if (!input || !resultsEl) return;
    var container = document.querySelector('[data-search-index]');
    var indexUrl = (container && container.getAttribute('data-search-index')) || '/search.json';
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        index = Array.isArray(data) ? data : [];
      })
      .catch(function () { index = []; });

    input.addEventListener('input', function () { runSearch(input.value); });
    input.addEventListener('search', function () { runSearch(input.value); });
    form && form.addEventListener('submit', function (e) {
      e.preventDefault();
      runSearch(input.value);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
