let steps = 0;
let xp = 0;

const stepsEl = document.getElementById('steps');
const distanceEl = document.getElementById('distance');
const caloriesEl = document.getElementById('calories');
const xpFill = document.getElementById('xp-fill');
const xpLevel = document.getElementById('xp-level');

function updateStats() {
  stepsEl.textContent = steps;
  distanceEl.textContent = (steps * 0.0008).toFixed(2) + ' km';
  caloriesEl.textContent = Math.floor(steps * 0.04) + ' kcal';

  xp = steps;
  const level = Math.floor(xp / 500);
  const xpInLevel = xp % 500;
  xpFill.style.width = (xpInLevel / 500) * 100 + '%';
  xpLevel.textContent = `Niveau ${level + 1} - ${xpInLevel} XP`;

  localStorage.setItem('steps', steps);
}

document.getElementById('simulate').addEventListener('click', () => {
  steps += 100;
  updateStats();
});

document.getElementById('reset').addEventListener('click', () => {
  steps = 0;
  updateStats();
});

function loadSession() {
  const savedSteps = localStorage.getItem('steps');
  if (savedSteps) {
    steps = parseInt(savedSteps);
  }
  updateStats();
}

loadSession();
