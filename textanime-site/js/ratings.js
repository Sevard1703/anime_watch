(function () {
  const app = window.animeSite = window.animeSite || {};

  function renderStars(container, value, interactive = false, animeId = '') {
    if (!container) return;
    container.innerHTML = '';
    for (let index = 1; index <= 10; index += 1) {
      const button = document.createElement('button');
      button.className = `rating-star ${index <= value ? 'is-active' : ''}`;
      button.type = 'button';
      button.innerHTML = '★';
      button.dataset.value = index;
      if (interactive) {
        button.addEventListener('click', () => {
          const id = animeId || container.dataset.animeId;
          app.state.ratings[id] = index;
          app.utils.saveState();
          renderStars(container, index, true, id);
          updateSummary(id);
          app.showToast(`Оценка ${index}/10 сохранена`);
        });
      }
      container.appendChild(button);
    }
  }

  function updateSummary(id) {
    const summary = document.getElementById('rating-summary');
    if (!summary) return;
    const item = app.animeData.find((entry) => entry.id === id);
    if (!item) return;
    const userRating = app.state.ratings[id];
    const average = userRating ? ((item.rating * item.votes + userRating) / (item.votes + 1)).toFixed(1) : item.rating.toFixed(1);
    const votes = userRating ? item.votes + 1 : item.votes;
    summary.innerHTML = `
      <div class="stats-pill">★ ${average}</div>
      <span>${votes} ${app.utils.declineCount(votes, ['голос', 'голоса', 'голосов'])}</span>
      ${userRating ? `<span>Ваша оценка: <strong>${userRating}/10</strong></span>` : ''}
    `;
  }

  function initRatings() {
    const widget = document.querySelector('[data-rating-widget]');
    if (!widget) return;
    const animeId = widget.dataset.animeId || app.utils.getQueryParam('anime') || app.animeData[0].id;
    widget.dataset.animeId = animeId;
    const container = widget.querySelector('[data-stars]');
    const clearButton = widget.querySelector('[data-clear-rating]');
    const currentValue = app.state.ratings[animeId] || 0;
    renderStars(container, currentValue, true, animeId);
    updateSummary(animeId);
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        delete app.state.ratings[animeId];
        app.utils.saveState();
        renderStars(container, 0, true, animeId);
        updateSummary(animeId);
        app.showToast('Оценка удалена');
      });
    }
  }

  function initProfileRatings() {
    const list = document.getElementById('profile-ratings');
    if (!list) return;
    const ratedEntries = Object.entries(app.state.ratings).map(([id, value]) => ({ id, value }));
    if (!ratedEntries.length) {
      list.innerHTML = '<div class="empty-state">Вы ещё не оставили оценку.</div>';
      return;
    }
    list.innerHTML = ratedEntries.map(({ id, value }) => {
      const anime = app.animeData.find((entry) => entry.id === id);
      return `
        <div class="list-item">
          <div>
            <strong>${anime.title}</strong>
            <div class="rating-stars">${'★'.repeat(value)}</div>
          </div>
          <button class="btn btn--ghost" data-clear-profile-rating="${id}">Удалить</button>
        </div>`;
    }).join('');
    list.querySelectorAll('[data-clear-profile-rating]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-clear-profile-rating');
        delete app.state.ratings[id];
        app.utils.saveState();
        initProfileRatings();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initRatings();
    initProfileRatings();
  });
})();
