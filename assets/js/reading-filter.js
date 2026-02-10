(function () {
  var search = document.getElementById('reading-search');
  var grid = document.getElementById('reading-grid');
  if (!search || !grid) return;

  var tiles = grid.querySelectorAll('.book-tile');
  search.addEventListener('input', function () {
    var q = (search.value || '').trim().toLowerCase();
    tiles.forEach(function (tile) {
      var text = (tile.textContent || '').toLowerCase();
      tile.style.display = q === '' || text.indexOf(q) !== -1 ? '' : 'none';
    });
  });
})();
