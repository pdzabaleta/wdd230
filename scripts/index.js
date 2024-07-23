document.addEventListener('DOMContentLoaded', () => {
  const hamButton = document.querySelector('#myButton');
  const navigation = document.querySelector('.menuLinks');
  // js for dark mode 
  const myBtn = document.querySelector('#darkBtn');
  const body = document.body;
  const card = document.querySelectorAll('.card')
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  hamButton.addEventListener('click', () => {
  	navigation.classList.toggle('open');
  	hamButton.classList.toggle('open');
  
      
  });
  
  myBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      card.forEach(card => {
          card.classList.toggle('dark');
      });
      header.classList.toggle('dark');
      footer.classList.toggle('dark');
  });
  
  // visit counter
  const visitsDisplay = document.querySelector(".visits");
  let numVisits = Number(window.localStorage.getItem("user-visit-count")) || 0;
  if (numVisits !== 0) {
      visitsDisplay.textContent = numVisits;
    } else {
      visitsDisplay.textContent = "This is your firts visit!!!";
    }
  
  numVisits++;
  
  localStorage.setItem("user-visit-count", numVisits);


//////////////////////////////////////////////////////WEATHER////////////////////////////////////////////
  const currentTemp = document.querySelector('#weather');
  const weatherIcon = document.querySelector('#weather-icon');
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-36.72&lon=-73.11&appid=fbd84acb3840d4382467a74d7a6700e1&units=metric';

  async function apiFetch(url) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // testing only
          displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }
    
    apiFetch(url);
    function displayResults(data) {
      const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      let desc = data.weather[0].description;
      currentTemp.innerHTML = `${data.main.temp}&deg;C - ${desc}`;
      weatherIcon.setAttribute('src', `${iconsrc}`);
      weatherIcon.setAttribute('alt', `${desc}`);
    }
});
