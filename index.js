document.addEventListener('DOMContentLoaded', () => {
  const calendar = document.querySelector('.calendar');
  const today = new Date().getDate();

  for (let day = 1; day <= 24; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.id = `day-${day}`;
    dayDiv.className = `div${day} day`;
    dayDiv.dataset.date = day;
    dayDiv.innerHTML = `${day}<span class="countdown"></span>`;
    calendar.appendChild(dayDiv);

    dayDiv.addEventListener('click', () => {
      if (day <= today) {
        triggerConfetti(dayDiv);
        showPopup(`Reveal jour ${day}`);
      } else {
        alert('You cannot open this day yet!');
      }
    });
  }

  function updateCountdown() {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeRemaining = nextDay - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownText = `${hours}h ${minutes}m ${seconds}s`;

    const nextDayDiv = document.querySelector(`#day-${now.getDate() + 1} .countdown`);
    if (nextDayDiv) {
      nextDayDiv.textContent = countdownText;
    }
  }

  setInterval(updateCountdown, 1000);

  function triggerConfetti(element) {
    const colors = ['#f7da91', '#ff6347', '#7fffd4', '#dda0dd', '#ff69b4'];
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      element.appendChild(confetti);
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }

  function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 3000);
  }
});