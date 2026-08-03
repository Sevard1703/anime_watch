const animeData = [
  {
    id: 'shadow-blade',
    title: 'Тень Клинка',
    original: 'Shadow Blade',
    rating: 9.1,
    genres: ['Экшен', 'Исекай', 'Фэнтези'],
    year: 2026,
    status: 'Airing',
    type: 'TV',
    episodes: 24,
    description: 'Темный герой пробуждается в другом мире, где ему предстоит изучить магию и победить древние силы. Динамичные бои и сложные решения создают мощное приключение.',
    image: 'https://picsum.photos/seed/shadow/500/700',
    banner: 'https://picsum.photos/seed/shadow-banner/1200/700',
    background: 'https://picsum.photos/seed/shadow-bg/1600/900',
    popularity: 95,
    updated: '2026-07-30'
  },
  {
    id: 'student-squad',
    title: 'Отряд студентов',
    original: 'Student Squad',
    rating: 8.7,
    genres: ['Сёнэн', 'Комедия', 'Школа'],
    year: 2025,
    status: 'Finished',
    type: 'TV',
    episodes: 12,
    description: 'Харизматичные школьники создают свой клуб героев, сталкиваясь с ядовитыми врагами и искренними школьными переживаниями.',
    image: 'https://picsum.photos/seed/student/500/700',
    banner: 'https://picsum.photos/seed/student-banner/1200/700',
    background: 'https://picsum.photos/seed/student-bg/1600/900',
    popularity: 86,
    updated: '2026-02-12'
  },
  {
    id: 'moon-dream',
    title: 'Лунный сон',
    original: 'Moon Dream',
    rating: 8.9,
    genres: ['Романтика', 'Сёдзё', 'Мистика'],
    year: 2024,
    status: 'Finished',
    type: 'TV',
    episodes: 16,
    description: 'Нежная фэнтези-романтика о девушке, которая видит сны других людей и пытается помочь им в реальности.',
    image: 'https://picsum.photos/seed/moon/500/700',
    banner: 'https://picsum.photos/seed/moon-banner/1200/700',
    background: 'https://picsum.photos/seed/moon-bg/1600/900',
    popularity: 79,
    updated: '2025-12-10'
  },
  {
    id: 'cyber-riders',
    title: 'Кибер наездники',
    original: 'Cyber Riders',
    rating: 9.3,
    genres: ['Экшен', 'Sci-Fi', 'Приключения'],
    year: 2025,
    status: 'Airing',
    type: 'TV',
    episodes: 20,
    description: 'В мегаполисе будущего смелая команда мотоциклистов сражается за свободу и спасает город от кибер-угроз.',
    image: 'https://picsum.photos/seed/cyber/500/700',
    banner: 'https://picsum.photos/seed/cyber-banner/1200/700',
    background: 'https://picsum.photos/seed/cyber-bg/1600/900',
    popularity: 92,
    updated: '2026-08-01'
  },
  {
    id: 'ghost-maze',
    title: 'Лабиринт теней',
    original: 'Ghost Maze',
    rating: 8.4,
    genres: ['Хоррор', 'Мистика', 'Психология'],
    year: 2023,
    status: 'Finished',
    type: 'TV',
    episodes: 11,
    description: 'Холодный мистический триллер о группе, запертой в заброшенном особняке, где реальность и кошмары переплетаются.',
    image: 'https://picsum.photos/seed/ghost/500/700',
    banner: 'https://picsum.photos/seed/ghost-banner/1200/700',
    background: 'https://picsum.photos/seed/ghost-bg/1600/900',
    popularity: 74,
    updated: '2025-05-03'
  },
  {
    id: 'steel-heart',
    title: 'Сердце стали',
    original: 'Steel Heart',
    rating: 8.8,
    genres: ['Экшен', 'Фэнтези', 'Шонэн'],
    year: 2024,
    status: 'Finished',
    type: 'OVA',
    episodes: 6,
    description: 'Легенда о воине, чей клинок ожил и пробудил древние силы. Эстетика мечей и магии заставляет замирать сердце.',
    image: 'https://picsum.photos/seed/steel/500/700',
    banner: 'https://picsum.photos/seed/steel-banner/1200/700',
    background: 'https://picsum.photos/seed/steel-bg/1600/900',
    popularity: 81,
    updated: '2025-10-19'
  },
  {
    id: 'space-echo',
    title: 'Космическое эхо',
    original: 'Space Echo',
    rating: 8.5,
    genres: ['Sci-Fi', 'Приключения', 'Драма'],
    year: 2026,
    status: 'Airing',
    type: 'TV',
    episodes: 26,
    description: 'Эпическая история о команде исследователей, отправившихся на границы вселенной в поисках следов древней цивилизации.',
    image: 'https://picsum.photos/seed/space/500/700',
    banner: 'https://picsum.photos/seed/space-banner/1200/700',
    background: 'https://picsum.photos/seed/space-bg/1600/900',
    popularity: 88,
    updated: '2026-07-28'
  },
  {
    id: 'urban-witch',
    title: 'Городская ведьма',
    original: 'Urban Witch',
    rating: 8.2,
    genres: ['Фэнтези', 'Романтика', 'Городское'],
    year: 2025,
    status: 'Finished',
    type: 'TV',
    episodes: 20,
    description: 'В магическом мегаполисе молодая ведьма пытается найти свое место между обычной жизнью и сверхъестественными обязанностями.',
    image: 'https://picsum.photos/seed/urban/500/700',
    banner: 'https://picsum.photos/seed/urban-banner/1200/700',
    background: 'https://picsum.photos/seed/urban-bg/1600/900',
    popularity: 77,
    updated: '2025-01-07'
  },
  {
    id: 'legend-water',
    title: 'Легенда о воде',
    original: 'Legend of Water',
    rating: 8.6,
    genres: ['Фэнтези', 'Приключения', 'Сёнэн'],
    year: 2026,
    status: 'Airing',
    type: 'TV',
    episodes: 22,
    description: 'Мальчик отправляется в путешествие по водному королевству, где учится контролировать стихии и спасает духа реки.',
    image: 'https://picsum.photos/seed/water/500/700',
    banner: 'https://picsum.photos/seed/water-banner/1200/700',
    background: 'https://picsum.photos/seed/water-bg/1600/900',
    popularity: 90,
    updated: '2026-08-02'
  }
];

const state = {
  currentPage: 1,
  itemsPerPage: 8,
  currentCatalog: [],
  activeAnime: animeData[0]
};

const getQueryParam = (name) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
};

const formatGenres = (genres) => genres.map((genre) => `<span class="genre-pill">${genre}</span>`).join('');

const createAnimeCardHTML = (anime) => `
  <article class="anime-card">
    <img src="${anime.image}" alt="Постер ${anime.title}" />
    <div class="anime-card-content">
      <h3>${anime.title}</h3>
      <div class="anime-meta">
        <span>★ ${anime.rating}</span>
        <span>${anime.year}</span>
      </div>
      <div class="genre-list">${formatGenres(anime.genres.slice(0, 3))}</div>
      <p>${anime.description.slice(0, 90)}...</p>
      <div class="card-actions">
        <a class="btn btn-secondary" href="anime.html?anime=${anime.id}">Подробнее</a>
        <a class="btn btn-primary" href="watch.html?anime=${anime.id}&episode=1">Смотреть</a>
      </div>
    </div>
  </article>
`;

const renderList = (selector, items, limit = 8) => {
  const container = document.querySelector(selector);
  if (!container) return;
  const list = items.slice(0, limit).map(createAnimeCardHTML).join('');
  container.innerHTML = list || '<p class="empty-state">Ничего не найдено.</p>';
};

const setHeroSlide = (index) => {
  const sliderInner = document.getElementById('slider-inner');
  if (!sliderInner) return;
  sliderInner.style.transform = `translateX(-${index * 100}%)`;
  sliderInner.dataset.active = index;
};

const initHeroSlider = () => {
  const hero = document.getElementById('hero-slider');
  const sliderInner = document.getElementById('slider-inner');
  if (!hero || !sliderInner) return;

  const slides = animeData.slice(0, 4);
  sliderInner.innerHTML = slides
    .map(
      (item) => `
      <div class="slider-card">
        <img src="${item.banner}" alt="${item.title}" />
        <div class="slider-card-content">
          <span class="badge">${item.type} · ${item.year}</span>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <div class="card-actions">
            <a class="btn btn-primary" href="anime.html?anime=${item.id}">Подробнее</a>
            <a class="btn btn-secondary" href="watch.html?anime=${item.id}&episode=1">Смотреть</a>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  let current = 0;

  const nextSlide = () => {
    current = (current + 1) % slides.length;
    setHeroSlide(current);
  };

  document.getElementById('slider-next').addEventListener('click', nextSlide);
  document.getElementById('slider-prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    setHeroSlide(current);
  });

  setInterval(nextSlide, 7000);
};

const initContinueCards = () => {
  const continueItems = animeData.filter((item) => item.status !== 'Finished').slice(0, 3);
  const container = document.getElementById('continue-list');
  if (!container) return;
  container.innerHTML = continueItems
    .map(
      (anime) => `
      <article class="continue-card">
        <img src="${anime.image}" alt="${anime.title}" />
        <div class="continue-card-body">
          <span class="badge">${anime.status}</span>
          <h3>${anime.title}</h3>
          <div class="progress-bar"><span class="progress-fill" style="width: ${Math.floor(Math.random() * 60) + 30}%"></span></div>
          <p>Прогресс серии ${Math.floor(Math.random() * 12) + 1} из ${anime.episodes}</p>
        </div>
      </article>
    `
    )
    .join('');
};

const renderHomeSections = () => {
  renderList('#popular-list', animeData.sort((a, b) => b.popularity - a.popularity).slice(0, 8), 8);
  renderList('#new-list', animeData.sort((a, b) => b.year - a.year).slice(0, 8), 8);
  renderList('#recommend-list', animeData.filter((item) => item.rating >= 8.8).slice(0, 8), 8);
  renderList('#updated-list', animeData.sort((a, b) => new Date(b.updated) - new Date(a.updated)).slice(0, 8), 8);
};

const getUnique = (array) => [...new Set(array)].sort();

const initCatalogPage = () => {
  const genreContainer = document.getElementById('filter-genres');
  const yearSelect = document.getElementById('filter-year');
  const searchInput = document.getElementById('catalog-search');
  const statusSelect = document.getElementById('filter-status');
  const typeSelect = document.getElementById('filter-type');
  const sortSelect = document.getElementById('filter-sort');
  const clearButton = document.getElementById('clear-filters');

  const allGenres = getUnique(animeData.flatMap((item) => item.genres));
  genreContainer.innerHTML = allGenres
    .map(
      (genre) => `
      <label><input type="checkbox" value="${genre}" />${genre}</label>
    `
    )
    .join('');

  const allYears = getUnique(animeData.map((item) => item.year));
  yearSelect.innerHTML += allYears.map((year) => `<option value="${year}">${year}</option>`).join('');

  const selectedGenre = getQueryParam('genre');
  if (selectedGenre) {
    searchInput.value = '';
    const checkbox = Array.from(genreContainer.querySelectorAll('input')).find((input) => input.value === selectedGenre);
    if (checkbox) checkbox.checked = true;
  }

  const getFilters = () => {
    const selectedGenres = Array.from(genreContainer.querySelectorAll('input:checked')).map((input) => input.value);
    return {
      search: searchInput.value.trim().toLowerCase(),
      genres: selectedGenres,
      year: yearSelect.value,
      status: statusSelect.value,
      type: typeSelect.value,
      sort: sortSelect.value
    };
  };

  const filterItems = () => {
    const filters = getFilters();
    let result = animeData.filter((item) => {
      const matchesSearch = filters.search ? item.title.toLowerCase().includes(filters.search) || item.original.toLowerCase().includes(filters.search) : true;
      const matchesGenres = filters.genres.length ? filters.genres.every((genre) => item.genres.includes(genre)) : true;
      const matchesYear = filters.year !== 'all' ? item.year.toString() === filters.year : true;
      const matchesStatus = filters.status !== 'all' ? item.status === filters.status : true;
      const matchesType = filters.type !== 'all' ? item.type === filters.type : true;
      return matchesSearch && matchesGenres && matchesYear && matchesStatus && matchesType;
    });

    if (filters.sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'year') {
      result.sort((a, b) => b.year - a.year);
    } else if (filters.sort === 'updated') {
      result.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } else {
      result.sort((a, b) => b.popularity - a.popularity);
    }

    state.currentCatalog = result;
    state.currentPage = 1;
    updateCatalogUI();
  };

  const updateCatalogUI = () => {
    const total = state.currentCatalog.length;
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    const pageItems = state.currentCatalog.slice(start, end);
    renderList('#catalog-results', pageItems, pageItems.length);
    document.getElementById('catalog-count').textContent = `${total} тайтлов найдено`;
    renderPagination(total);
  };

  const renderPagination = (total) => {
    const pagination = document.getElementById('catalog-pagination');
    if (!pagination) return;
    const pages = Math.ceil(total / state.itemsPerPage) || 1;
    const buttons = [];
    if (state.currentPage > 1) {
      buttons.push(`<button type="button" data-page="${state.currentPage - 1}">←</button>`);
    }
    for (let i = 1; i <= pages; i += 1) {
      buttons.push(`<button type="button" class="${state.currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`);
    }
    if (state.currentPage < pages) {
      buttons.push(`<button type="button" data-page="${state.currentPage + 1}">→</button>`);
    }
    pagination.innerHTML = buttons.join('');
    pagination.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        state.currentPage = Number(button.dataset.page);
        updateCatalogUI();
      });
    });
  };

  const bindFilters = () => {
    genreContainer.querySelectorAll('input').forEach((input) => input.addEventListener('change', filterItems));
    [searchInput, yearSelect, statusSelect, typeSelect, sortSelect].forEach((element) => {
      element.addEventListener('input', filterItems);
    });
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      yearSelect.value = 'all';
      statusSelect.value = 'all';
      typeSelect.value = 'all';
      sortSelect.value = 'popularity';
      genreContainer.querySelectorAll('input').forEach((input) => (input.checked = false));
      filterItems();
    });
  };

  bindFilters();
  filterItems();
};

const initAnimePage = () => {
  const animeId = getQueryParam('anime') || animeData[0].id;
  const selectedAnime = animeData.find((item) => item.id === animeId) || animeData[0];
  state.activeAnime = selectedAnime;

  const poster = document.getElementById('anime-poster');
  const title = document.getElementById('anime-title');
  const original = document.getElementById('anime-original');
  const status = document.getElementById('anime-status');
  const rating = document.getElementById('anime-rating');
  const year = document.getElementById('anime-year');
  const type = document.getElementById('anime-type');
  const episodes = document.getElementById('anime-episodes');
  const description = document.getElementById('anime-description');
  const hero = document.getElementById('anime-hero');
  const relatedList = document.getElementById('related-list');
  const watchFirst = document.getElementById('watch-first');
  const favoriteButton = document.getElementById('favorite-toggle');
  const episodesContainer = document.getElementById('anime-episodes-list');

  if (poster) poster.src = selectedAnime.image;
  if (title) title.textContent = selectedAnime.title;
  if (original) original.textContent = selectedAnime.original;
  if (status) status.textContent = `${selectedAnime.status} · ${selectedAnime.year}`;
  if (rating) rating.textContent = `★ ${selectedAnime.rating}`;
  if (year) year.textContent = selectedAnime.year;
  if (type) type.textContent = selectedAnime.type;
  if (episodes) episodes.textContent = `${selectedAnime.episodes} серии`;
  if (description) description.textContent = selectedAnime.description;
  if (watchFirst) watchFirst.href = `watch.html?anime=${selectedAnime.id}&episode=1`;
  if (hero) hero.style.backgroundImage = `url('${selectedAnime.background}')`;

  relatedList.innerHTML = animeData
    .filter((item) => item.id !== selectedAnime.id)
    .slice(0, 4)
    .map(createAnimeCardHTML)
    .join('');

  const favoriteIds = JSON.parse(localStorage.getItem('animeFavorites') || '[]');
  const isFavorite = favoriteIds.includes(selectedAnime.id);
  favoriteButton.textContent = isFavorite ? 'Убрано из избранного' : 'Добавить в избранное';

  favoriteButton.addEventListener('click', () => {
    const currentFavorites = JSON.parse(localStorage.getItem('animeFavorites') || '[]');
    if (currentFavorites.includes(selectedAnime.id)) {
      const updated = currentFavorites.filter((id) => id !== selectedAnime.id);
      localStorage.setItem('animeFavorites', JSON.stringify(updated));
      favoriteButton.textContent = 'Добавить в избранное';
    } else {
      currentFavorites.push(selectedAnime.id);
      localStorage.setItem('animeFavorites', JSON.stringify(currentFavorites));
      favoriteButton.textContent = 'Убрано из избранного';
    }
  });

  if (episodesContainer) {
    const total = selectedAnime.episodes;
    episodesContainer.innerHTML = Array.from({ length: Math.min(total, 12) }, (_, index) => {
      const number = index + 1;
      return `
        <div class="episode-item">
          <span>Серия ${number}</span>
          <a class="btn btn-secondary" href="watch.html?anime=${selectedAnime.id}&episode=${number}">Смотреть</a>
        </div>
      `;
    }).join('');
  }
};

const initWatchPage = () => {
  const animeId = getQueryParam('anime') || animeData[0].id;
  const episodeNumber = Number(getQueryParam('episode')) || 1;
  const watchTitle = document.getElementById('watch-title');
  const watchEpisode = document.getElementById('watch-episode');
  const episodeList = document.getElementById('watch-episode-list');
  const nextButton = document.getElementById('next-episode');
  const prevButton = document.getElementById('prev-episode');
  const recommendations = document.getElementById('watch-recommendations');

  const selectedAnime = animeData.find((item) => item.id === animeId) || animeData[0];
  state.activeAnime = selectedAnime;

  if (watchTitle) watchTitle.textContent = selectedAnime.title;
  if (watchEpisode) watchEpisode.textContent = `Эпизод ${episodeNumber}`;

  if (episodeList) {
    episodeList.innerHTML = Array.from({ length: Math.min(selectedAnime.episodes, 12) }, (_, index) => {
      const number = index + 1;
      return `
        <div class="episode-item ${episodeNumber === number ? 'active' : ''}">
          <span>Серия ${number}</span>
          <a class="btn btn-secondary" href="watch.html?anime=${selectedAnime.id}&episode=${number}">Смотреть</a>
        </div>
      `;
    }).join('');
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const nextNumber = Math.min(selectedAnime.episodes, episodeNumber + 1);
      window.location.href = `watch.html?anime=${selectedAnime.id}&episode=${nextNumber}`;
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      const prevNumber = Math.max(1, episodeNumber - 1);
      window.location.href = `watch.html?anime=${selectedAnime.id}&episode=${prevNumber}`;
    });
  }

  if (recommendations) {
    recommendations.innerHTML = animeData
      .filter((item) => item.id !== selectedAnime.id)
      .slice(0, 4)
      .map(createAnimeCardHTML)
      .join('');
  }
};

const initSearchPage = () => {
  const query = getQueryParam('q') || '';
  const summary = document.getElementById('search-summary');
  const results = document.getElementById('search-results');
  const searchInput = document.getElementById('search-query');

  if (searchInput) searchInput.value = query;
  const filtered = animeData.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.original.toLowerCase().includes(query.toLowerCase()));

  if (summary) {
    summary.textContent = query
      ? `По запросу «${query}» найдено ${filtered.length} ${declOfNum(filtered.length, ['тайтл', 'тайтла', 'тайтлов'])}`
      : 'Введите запрос для поиска.';
  }

  renderList('#search-results', filtered, filtered.length);
};

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

const initProfilePage = () => {
  const favoritesContainer = document.getElementById('profile-favorites');
  const favorites = JSON.parse(localStorage.getItem('animeFavorites') || '[]');
  const favoriteItems = animeData.filter((anime) => favorites.includes(anime.id));
  renderList('#profile-favorites', favoriteItems, 12);
};

const initTabs = () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  if (!tabButtons.length) return;
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(`tab-${button.dataset.tab}`).classList.add('active');
    });
  });
};

const initMobileMenu = () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !header || !nav) return;
  toggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });
};

const initializePage = () => {
  initMobileMenu();
  initTabs();

  switch (document.body.dataset.page) {
    case 'home':
      initHeroSlider();
      initContinueCards();
      renderHomeSections();
      break;
    case 'catalog':
      initCatalogPage();
      break;
    case 'anime':
      initAnimePage();
      break;
    case 'watch':
      initWatchPage();
      break;
    case 'search':
      initSearchPage();
      break;
    case 'profile':
      initProfilePage();
      break;
    default:
      break;
  }
};

window.addEventListener('DOMContentLoaded', initializePage);
