document.addEventListener('DOMContentLoaded', () => {
  const calendar = document.querySelector('.calendar');
  for (let day = 1; day <= 24; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.id = `day-${day}`;
    dayDiv.className = `div${day}`;
    dayDiv.textContent = day;
    calendar.appendChild(dayDiv);
  }
});