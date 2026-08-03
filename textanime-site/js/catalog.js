(function () {
  const app = window.animeSite = window.animeSite || {};

  function renderCatalog(items) {
    const container = document.getElementById('catalog-grid') || document.getElementById('search-results');
    if (!container) return;
    container.innerHTML = '';
    if (!items.length) {
      container.innerHTML = '<div class="empty-state">Ничего не нашлось. Попробуй изменить фильтры.</div>';
      return;
    }

    items.forEach((anime, index) => {
      const card = document.createElement('article');
      card.className = 'card reveal';
      card.innerHTML = `
        <div class="poster-shell">
          <img src="${anime.image}" alt="${anime.title}" />
        </div>
        <div class="card__body">
          <div class="card__meta">
            <span class="badge">★ ${anime.rating}</span>
            <span class="badge">${anime.year}</span>
          </div>
          <h3 class="card__title">${anime.title}</h3>
          <p class="card__desc">${anime.description}</p>
          <div class="card__actions">
            <a class="btn btn--ghost" href="anime.html?anime=${anime.id}">Открыть</a>
            <button class="btn btn--primary heart-btn ${app.state.favorites.includes(anime.id) ? 'is-active' : ''}" data-favorite="${anime.id}"><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>`;
      container.appendChild(card);
      setTimeout(() => card.classList.add('is-visible'), 65 * index);
    });
  }

  function initCatalogPage() {
    const params = new URLSearchParams(window.location.search);
    const genre = params.get('genre') || '';
    const search = params.get('q') || '';
    const filterForm = document.getElementById('catalog-filters');
    const cards = document.getElementById('catalog-grid');
    const summary = document.getElementById('catalog-summary');
    if (!filterForm || !cards) return;

    const genreInput = filterForm.querySelector('[name="genre"]');
    const statusInput = filterForm.querySelector('[name="status"]');
    const typeInput = filterForm.querySelector('[name="type"]');
    const ratingInput = filterForm.querySelector('[name="rating"]');
    const sortInput = filterForm.querySelector('[name="sort"]');
    const searchInput = filterForm.querySelector('[name="search"]');

    if (genreInput) genreInput.value = genre;
    if (searchInput) searchInput.value = search;

    function applyFilters() {
      let result = [...app.animeData];
      const selectedGenre = genreInput ? genreInput.value : '';
      const selectedStatus = statusInput ? statusInput.value : 'all';
      const selectedType = typeInput ? typeInput.value : 'all';
      const ratingValue = ratingInput ? Number(ratingInput.value) : 0;
      const selectedSort = sortInput ? sortInput.value : 'popularity';
      const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : '';

      if (selectedGenre) {
        result = result.filter((entry) => entry.genres.includes(selectedGenre));
      }
      if (searchValue) {
        result = result.filter((entry) => entry.title.toLowerCase().includes(searchValue) || entry.original.toLowerCase().includes(searchValue));
      }
      if (selectedStatus !== 'all') {
        result = result.filter((entry) => entry.status === selectedStatus);
      }
      if (selectedType !== 'all') {
        result = result.filter((entry) => entry.type === selectedType);
      }
      if (ratingValue) {
        result = result.filter((entry) => entry.rating >= ratingValue);
      }
      if (selectedSort === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
      } else if (selectedSort === 'year') {
        result.sort((a, b) => b.year - a.year);
      } else if (selectedSort === 'title') {
        result.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        result.sort((a, b) => b.rating - a.rating);
      }

      renderCatalog(result);
      if (summary) {
        summary.textContent = `${result.length} ${app.utils.declineCount(result.length, ['тайтл', 'тайтла', 'тайтлов'])}`;
      }
    }

    ['input', 'change'].forEach((eventName) => filterForm.addEventListener(eventName, applyFilters));
    applyFilters();
  }

  function initSearchPage() {
    const query = app.utils.getQueryParam('q') || '';
    const container = document.getElementById('search-results');
    const summary = document.getElementById('search-summary');
    if (!container) return;
    const result = app.animeData.filter((entry) => entry.title.toLowerCase().includes(query.toLowerCase()) || entry.original.toLowerCase().includes(query.toLowerCase()));
    if (summary) {
      summary.textContent = query ? `По запросу «${query}» найдено ${result.length} ${app.utils.declineCount(result.length, ['тайтл', 'тайтла', 'тайтлов'])}` : 'Введите запрос для поиска';
    }
    renderCatalog(result);
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.body.dataset.page === 'catalog') initCatalogPage();
    if (document.body.dataset.page === 'search') initSearchPage();
  });
})();
