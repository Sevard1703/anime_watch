(function () {
  const app = window.animeSite = window.animeSite || {};

  app.animeData = [
    {
      id: 'shadow-saga',
      title: 'Shadow Saga',
      original: 'Shadow Saga',
      rating: 9.1,
      votes: 248,
      genres: ['Экшен', 'Исекай', 'Фэнтези'],
      year: 2026,
      status: 'Онгоинг',
      type: 'TV',
      episodes: 24,
      description: 'Тёмная сага о юном воине, который пробуждает древний клинок и раскрывает тайны мира между измерениями.',
      image: 'https://picsum.photos/seed/shadow-saga/600/900',
      banner: 'https://picsum.photos/seed/shadow-banner/1400/800',
      accent: '#6c8cff'
    },
    {
      id: 'aurora-echo',
      title: 'Aurora Echo',
      original: 'Aurora Echo',
      rating: 8.8,
      votes: 182,
      genres: ['Романтика', 'Мистика', 'Сёдзё'],
      year: 2024,
      status: 'Завершён',
      type: 'TV',
      episodes: 12,
      description: 'Нежная история о девушке, слышащей голоса северного сияния и черпающей из них силу для перемен.',
      image: 'https://picsum.photos/seed/aurora/600/900',
      banner: 'https://picsum.photos/seed/aurora-banner/1400/800',
      accent: '#7c88ff'
    },
    {
      id: 'neon-riders',
      title: 'Neon Riders',
      original: 'Neon Riders',
      rating: 9.4,
      votes: 311,
      genres: ['Экшен', 'Sci-Fi', 'Приключения'],
      year: 2025,
      status: 'Онгоинг',
      type: 'TV',
      episodes: 20,
      description: 'В мегаполисе будущего команда мотациклистов сражается с цифровыми чудовищами за право на свободу.',
      image: 'https://picsum.photos/seed/neon/600/900',
      banner: 'https://picsum.photos/seed/neон-banner/1400/800',
      accent: '#85d9ff'
    },
    {
      id: 'lunar-signal',
      title: 'Lunar Signal',
      original: 'Lunar Signal',
      rating: 8.6,
      votes: 154,
      genres: ['Фэнтези', 'Драма', 'Сёнэн'],
      year: 2023,
      status: 'Завершён',
      type: 'Movie',
      episodes: 1,
      description: 'Космическая одиссея о последних сигналах, которые указывают путь к пропавшему миру.',
      image: 'https://picsum.photos/seed/lunar/600/900',
      banner: 'https://picsum.photos/seed/lunar-banner/1400/800',
      accent: '#a28bff'
    },
    {
      id: 'ghost-archive',
      title: 'Ghost Archive',
      original: 'Ghost Archive',
      rating: 8.3,
      votes: 118,
      genres: ['Хоррор', 'Мистика', 'Психология'],
      year: 2022,
      status: 'Завершён',
      type: 'OVA',
      episodes: 6,
      description: 'Серия мистических архивов, где каждый документ становится проклятием для тех, кто его откроет.',
      image: 'https://picsum.photos/seed/ghost-archive/600/900',
      banner: 'https://picsum.photos/seed/ghost-banner/1400/800',
      accent: '#c1a8ff'
    },
    {
      id: 'midnight-atelier',
      title: 'Midnight Atelier',
      original: 'Midnight Atelier',
      rating: 8.9,
      votes: 206,
      genres: ['Фэнтези', 'Романтика', 'Комедия'],
      year: 2025,
      status: 'Онгоинг',
      type: 'TV',
      episodes: 18,
      description: 'В мастерской, где оживают забытые идеи, художница учится жить с чудом и любовью.',
      image: 'https://picsum.photos/seed/atelier/600/900',
      banner: 'https://picsum.photos/seed/atelier-banner/1400/800',
      accent: '#6dd3ff'
    }
  ];

  app.state = {
    favorites: JSON.parse(localStorage.getItem('anime-favorites') || '[]'),
    ratings: JSON.parse(localStorage.getItem('anime-ratings') || '{}'),
    theme: localStorage.getItem('anime-theme') || 'dark',
    mood: localStorage.getItem('anime-mood') || 'epic'
  };

  app.utils = {
    getQueryParam(name) {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    },
    declineCount(count, forms) {
      const value = Math.abs(count) % 100;
      const num = value % 10;
      if (value > 10 && value < 20) return forms[2];
      if (num > 1 && num < 5) return forms[1];
      if (num === 1) return forms[0];
      return forms[2];
    },
    saveState() {
      localStorage.setItem('anime-favorites', JSON.stringify(app.state.favorites));
      localStorage.setItem('anime-ratings', JSON.stringify(app.state.ratings));
      localStorage.setItem('anime-theme', app.state.theme);
      localStorage.setItem('anime-mood', app.state.mood);
    }
  };

  function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;
    window.addEventListener('mousemove', (event) => {
      dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      ring.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
    document.querySelectorAll('a, button, input, select, .card, .poster-shell, .rating-star').forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  function initTheme() {
    document.documentElement.dataset.theme = app.state.theme;
    document.documentElement.dataset.mood = app.state.mood;
    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.addEventListener('click', () => {
        app.state.theme = app.state.theme === 'dark' ? 'oled' : 'dark';
        document.documentElement.dataset.theme = app.state.theme;
        app.utils.saveState();
      });
    }
    const moodSelect = document.querySelector('[data-mood-select]');
    if (moodSelect) {
      moodSelect.value = app.state.mood;
      moodSelect.addEventListener('change', (event) => {
        app.state.mood = event.target.value;
        document.documentElement.dataset.mood = app.state.mood;
        app.utils.saveState();
      });
    }
  }

  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    items.forEach((item) => observer.observe(item));
  }

  function initSearch() {
    const searchForm = document.querySelector('[data-search-form]');
    if (searchForm) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = searchForm.querySelector('input');
        const query = input.value.trim();
        if (!query) return;
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      });
    }
  }

  function initLuckyButton() {
    const button = document.querySelector('[data-lucky]');
    if (!button) return;
    button.addEventListener('click', () => {
      const randomAnime = app.animeData[Math.floor(Math.random() * app.animeData.length)];
      window.location.href = `anime.html?anime=${randomAnime.id}`;
    });
  }

  function initEasterEgg() {
    let typed = '';
    const trigger = () => {
      const message = 'Пасхалка активирована — это атмосфера не для спешки.';
      app.showToast(message);
    };
    window.addEventListener('keydown', (event) => {
      typed += event.key.toLowerCase();
      if (typed.includes('naruto') || typed.includes('onepiece')) {
        trigger();
        typed = '';
      }
      if (typed.length > 16) typed = typed.slice(-16);
    });
  }

  function initHomePage() {
    const topRated = document.getElementById('top-rated');
    const continueList = document.getElementById('continue-list');
    const newList = document.getElementById('new-list');
    if (!topRated && !continueList && !newList) return;

    const sortedTop = [...app.animeData].sort((a, b) => b.rating - a.rating);
    const continueItems = app.animeData.slice(0, 3);
    const latest = [...app.animeData].sort((a, b) => b.year - a.year);

    const renderCards = (container, items, compact = false) => {
      if (!container) return;
      container.innerHTML = '';
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
              <a class="btn btn--ghost" href="anime.html?anime=${anime.id}">Подробнее</a>
              <button class="btn btn--primary heart-btn ${app.state.favorites.includes(anime.id) ? 'is-active' : ''}" data-favorite="${anime.id}"><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>`;
        container.appendChild(card);
        setTimeout(() => card.classList.add('is-visible'), 80 * index);
      });
    };

    renderCards(topRated, sortedTop.slice(0, 4));
    renderCards(newList, latest.slice(0, 4));
    if (continueList) {
      continueList.innerHTML = '';
      continueItems.forEach((anime, index) => {
        const card = document.createElement('div');
        card.className = 'card reveal';
        card.innerHTML = `
          <div class="poster-shell">
            <img src="${anime.image}" alt="${anime.title}" />
          </div>
          <div class="card__body">
            <div class="card__meta">
              <span class="badge">${anime.status}</span>
              <span class="badge">${anime.episodes} сер.</span>
            </div>
            <h3 class="card__title">${anime.title}</h3>
            <div class="progress-shell">
              <div class="progress-bar" style="--progress:${40 + index * 12}%"></div>
            </div>
            <div class="card__actions">
              <a class="btn btn--ghost" href="watch.html?anime=${anime.id}&episode=1">Продолжить</a>
            </div>
          </div>`;
        continueList.appendChild(card);
        setTimeout(() => card.classList.add('is-visible'), 80 * index);
      });
    }

    document.addEventListener('click', (event) => {
      const button = event.target.closest('[data-favorite]');
      if (!button) return;
      event.preventDefault();
      const id = button.getAttribute('data-favorite');
      app.toggleFavorite(id);
      button.classList.toggle('is-active', app.state.favorites.includes(id));
      app.showToast(app.state.favorites.includes(id) ? 'Добавлено в избранное' : 'Удалено из избранного');
    });
  }

  function initProfilePage() {
    const list = document.getElementById('favorites-list');
    if (!list) return;
    const favorites = app.animeData.filter((entry) => app.state.favorites.includes(entry.id));
    if (!favorites.length) {
      list.innerHTML = '<div class="empty-state">Список избранного пуст</div>';
      return;
    }
    list.innerHTML = favorites.map((entry) => `
      <div class="list-item">
        <strong>${entry.title}</strong>
        <a class="btn btn--ghost" href="anime.html?anime=${entry.id}">Открыть</a>
      </div>
    `).join('');
  }

  app.toggleFavorite = function (id) {
    if (app.state.favorites.includes(id)) {
      app.state.favorites = app.state.favorites.filter((item) => item !== id);
    } else {
      app.state.favorites.push(id);
    }
    app.utils.saveState();
  };

  app.showToast = function (message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  };

  function initPage() {
    initCursor();
    initTheme();
    initReveal();
    initSearch();
    initLuckyButton();
    initEasterEgg();
    initHomePage();
    initProfilePage();
  }

  document.addEventListener('DOMContentLoaded', initPage);
})();
