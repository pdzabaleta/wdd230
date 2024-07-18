document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    const cards = document.querySelector('#cards');
    async function getProphetData(url) {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.table(data.prophets);
            displayProphets(data.prophets);
            
          }
    }
    getProphetData(url);
    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
          let card = document.createElement('section');
          let fullName = document.createElement('h2');
          let portrait = document.createElement('img');
          let birth = document.createElement('p');
          let place = document.createElement('p');
      
          fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
          portrait.setAttribute('src', prophet.imageurl);
          portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
          portrait.setAttribute('loading', 'lazy');
          portrait.setAttribute('width', '340');
          portrait.setAttribute('height', '440');
          birth.textContent = `Date of birth: ${prophet.birthdate}`; 
          place.textContent = `Place of birth: ${prophet.birthplace}`; 
      
          card.appendChild(fullName);
          card.appendChild(birth);
          card.appendChild(place);
          card.appendChild(portrait);
          
      
          cards.appendChild(card);
        });
      }


});