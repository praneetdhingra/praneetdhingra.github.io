document.getElementById('year').textContent = new Date().getFullYear();

// Projects page filter: shows cards whose data-tags include the chosen filter,
// and hides any group left with no visible cards.
const chips = document.querySelectorAll('[data-filter]');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));

    let anyVisible = false;
    document.querySelectorAll('[data-group]').forEach((group) => {
      let groupVisible = false;
      group.querySelectorAll('[data-tags]').forEach((card) => {
        const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
        card.hidden = !match;
        if (match) groupVisible = true;
      });
      group.hidden = !groupVisible;
      if (groupVisible) anyVisible = true;
    });

    document.getElementById('no-results').classList.toggle('hidden', anyVisible);
  });
});
