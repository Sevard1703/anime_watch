(function () {
  const app = window.animeSite = window.animeSite || {};

  function initWatchPage() {
    const animeId = app.utils.getQueryParam('anime') || app.animeData[0].id;
    const episode = Number(app.utils.getQueryParam('episode')) || 1;
    const anime = app.animeData.find((entry) => entry.id === animeId) || app.animeData[0];

    const playerTitle = document.getElementById('watch-title');
    const playerEpisode = document.getElementById('watch-episode');
    const playerEpisodeList = document.getElementById('episode-list');
    const watchVideo = document.getElementById('watch-video');
    const cinematicBtn = document.getElementById('cinematic-toggle');
    const nextBtn = document.getElementById('next-episode');
    const prevBtn = document.getElementById('prev-episode');
    const recommended = document.getElementById('watch-recommendations');

    if (playerTitle) playerTitle.textContent = anime.title;
    if (playerEpisode) playerEpisode.textContent = `Эпизод ${episode}`;
    if (watchVideo) {
      watchVideo.poster = anime.banner;
    }

    if (playerEpisodeList) {
      playerEpisodeList.innerHTML = '';
      for (let index = 1; index <= Math.min(anime.episodes, 8); index += 1) {
        const item = document.createElement('div');
        item.className = `episode-item ${index === episode ? 'is-active' : ''}`;
        item.innerHTML = `
          <span>Серия ${index}</span>
          <a class="btn btn--ghost" href="watch.html?anime=${anime.id}&episode=${index}">Открыть</a>`;
        playerEpisodeList.appendChild(item);
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextEpisode = Math.min(anime.episodes, episode + 1);
        window.location.href = `watch.html?anime=${anime.id}&episode=${nextEpisode}`;
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevEpisode = Math.max(1, episode - 1);
        window.location.href = `watch.html?anime=${anime.id}&episode=${prevEpisode}`;
      });
    }

    if (cinematicBtn) {
      cinematicBtn.addEventListener('click', () => {
        document.querySelector('.watch-shell').classList.toggle('cinematic');
        app.showToast(document.querySelector('.watch-shell').classList.contains('cinematic') ? 'Кинематографичный режим включён' : 'Кинематографичный режим выключен');
      });
    }

    if (recommended) {
      recommended.innerHTML = '';
      app.animeData.filter((entry) => entry.id !== anime.id).slice(0, 3).forEach((entry) => {
        const card = document.createElement('article');
        card.className = 'card reveal';
        card.innerHTML = `
          <div class="poster-shell"><img src="${entry.image}" alt="${entry.title}" /></div>
          <div class="card__body">
            <h3 class="card__title">${entry.title}</h3>
            <div class="card__actions"><a class="btn btn--ghost" href="anime.html?anime=${entry.id}">Открыть</a></div>
          </div>`;
        recommended.appendChild(card);
      });
    }
  }

  function initAnimePage() {
    const animeId = app.utils.getQueryParam('anime') || app.animeData[0].id;
    const anime = app.animeData.find((entry) => entry.id === animeId) || app.animeData[0];
    const hero = document.querySelector('.hero-card');
    const title = document.getElementById('anime-title');
    const original = document.getElementById('anime-original');
    const description = document.getElementById('anime-description');
    const poster = document.getElementById('anime-poster');
    const info = document.getElementById('anime-info');
    const episodeList = document.getElementById('episode-list');
    const relatedList = document.getElementById('related-list');
    const favoriteButton = document.getElementById('favorite-button');
    const watchButton = document.getElementById('watch-button');

    if (hero) hero.style.setProperty('--accent', anime.accent);
    if (title) title.textContent = anime.title;
    if (original) original.textContent = anime.original;
    if (description) description.textContent = anime.description;
    if (poster) poster.src = anime.image;
    if (info) info.innerHTML = `
      <div class="card__meta">
        <span class="badge">★ ${anime.rating}</span>
        <span class="badge">${anime.year}</span>
        <span class="badge">${anime.status}</span>
        <span class="badge">${anime.type}</span>
      </div>
      <p class="card__desc">${anime.description}</p>`;
    if (episodeList) {
      episodeList.innerHTML = '';
      for (let index = 1; index <= anime.episodes; index += 1) {
        const item = document.createElement('div');
        item.className = 'episode-item';
        item.innerHTML = `
          <span>Эпизод ${index}</span>
          <a class="btn btn--ghost" href="watch.html?anime=${anime.id}&episode=${index}">Смотреть</a>`;
        episodeList.appendChild(item);
      }
    }
    if (relatedList) {
      relatedList.innerHTML = '';
      app.animeData.filter((entry) => entry.id !== anime.id).slice(0, 3).forEach((entry) => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `<strong>${entry.title}</strong><a class="btn btn--ghost" href="anime.html?anime=${entry.id}">Открыть</a>`;
        relatedList.appendChild(item);
      });
    }
    if (favoriteButton) {
      const active = app.state.favorites.includes(anime.id);
      favoriteButton.classList.toggle('is-active', active);
      favoriteButton.addEventListener('click', () => {
        app.toggleFavorite(anime.id);
        favoriteButton.classList.toggle('is-active', app.state.favorites.includes(anime.id));
        app.showToast(app.state.favorites.includes(anime.id) ? 'Добавлено в избранное' : 'Удалено из избранного');
      });
    }
    if (watchButton) {
      watchButton.href = `watch.html?anime=${anime.id}&episode=1`;
    }
  }

  function initTabs() {
    document.querySelectorAll('.tab-btn').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach((item) => item.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(button.dataset.target).classList.add('active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    if (document.body.dataset.page === 'watch') initWatchPage();
    if (document.body.dataset.page === 'anime') initAnimePage();
  });
})();
