document.addEventListener('DOMContentLoaded', () => {
  const visitMessage = document.getElementById('visitMessage');
  const lastVisitKey = 'lastVisit';
  const lastVisit = localStorage.getItem(lastVisitKey);
  const currentVisit = new Date();

  if (!lastVisit) {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const lastVisitDate = new Date(lastVisit);
      const timeDifference = currentVisit - lastVisitDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (timeDifference < 24 * 60 * 60 * 1000) {
          visitMessage.textContent = "Back so soon! Awesome!";
      } else if (daysDifference === 1) {
          visitMessage.textContent = `You last visited 1 day ago.`;
      } else {
          visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
      }
  }

  localStorage.setItem(lastVisitKey, currentVisit.toISOString());
});

