(function () {
  var search = document.getElementById('reading-search');
  var grid = document.getElementById('reading-grid');
  var status = document.getElementById('reading-results-status');
  var emptyState = document.getElementById('reading-no-results');
  if (!search || !grid) return;

  var tiles = Array.prototype.slice.call(grid.querySelectorAll('.book-tile'));
  var total = tiles.length;
  var searchableText = tiles.map(function (tile) {
    return normalize(tile.getAttribute('data-search') || tile.textContent || '');
  });

  function normalize(value) {
    return (value || '')
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function updateStatus(visibleCount, query) {
    if (!status) return;
    status.textContent = query ? visibleCount + ' of ' + total + ' books' : total + ' books';
  }

  function applyFilter() {
    var query = normalize(search.value);
    var visibleCount = 0;

    tiles.forEach(function (tile, index) {
      var matches = query === '' || searchableText[index].indexOf(query) !== -1;
      tile.hidden = !matches;
      if (matches) {
        tile.removeAttribute('aria-hidden');
        visibleCount += 1;
      } else {
        tile.setAttribute('aria-hidden', 'true');
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }

    updateStatus(visibleCount, query);
  }

  search.addEventListener('input', applyFilter);
  search.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && search.value) {
      search.value = '';
      applyFilter();
    }
  });

  applyFilter();
})();
