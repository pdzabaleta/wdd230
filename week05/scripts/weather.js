document.addEventListener('DOMContentLoaded', () => {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=fbd84acb3840d4382467a74d7a6700e1';

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
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('src', `${iconsrc}`);
        weatherIcon.setAttribute('alt', `${desc}`);
        captionDesc.textContent = `${desc}`;
      }
});