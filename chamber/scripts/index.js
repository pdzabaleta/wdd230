document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    // Verificar si carousel, prevButton y nextButton existen
    if (carousel && prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -220, behavior: 'smooth' });
        });
    
        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: 220, behavior: 'smooth' });
        });
    }
    
    // Verificar si existen los elementos de la sección carousel-stories y sus botones
    const carouselS = document.querySelector('.carousel-stories');
    const prevButtonS = document.querySelector('.prevS');
    const nextButtonS = document.querySelector('.nextS');
    
    if (carouselS && prevButtonS && nextButtonS) {
        prevButtonS.addEventListener('click', () => {
            carouselS.scrollBy({ left: -220, behavior: 'smooth' });
        });
    
        nextButtonS.addEventListener('click', () => {
            carouselS.scrollBy({ left: 220, behavior: 'smooth' });
        });
    }
    
    // Función para obtener el año actual
    function getCurrentYear() {
        return new Date().getFullYear();
    }
    
    // Función para obtener la última fecha de modificación
    function getLastModified() {
        return document.lastModified;
    }
    
    // Verificar si existe el elemento con id 'year' antes de actualizar su contenido
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = getCurrentYear();
    }
    
    // Verificar si existe el elemento con id 'lastModified' antes de actualizar su contenido
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = getLastModified();
    }
    
    // Selector del botón de menú hamburguesa y navegación
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    // Verificar si existe el botón de menú y la navegación antes de agregar el evento click
    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }
    ///////////////////////////////////////////TIMESTAMP////////////////////////////////////////////////

    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        timestampElement.value = new Date().toISOString();
    } else {
        console.error("Timestamp element not found.");
    }

    ///////////////////////////////CARD JSON DEFINITION /////////////////////
    const directoryURL = "https://pdzabaleta.github.io/wdd230/chamber/data/members.json";
    const carouselStories = document.querySelector('.carousel-stories');

    async function getAd(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data.business);
                displayAd(data.business);
            }
            else {
                throw Error(await response.text());
            }
        } catch(error) {
            console.log(error);
        }
    }

    getAd(directoryURL);
    function displayAd(business) {

        const filteredBusinesses = business.filter(business => 
            business.membershipLevel === 'Silver' || business.membershipLevel === 'Gold'
        );

        filteredBusinesses.forEach((business) => {
            const cardS = document.createElement('div');
            const rcardDefinition = document.createElement('div');
            const cardh3 = document.createElement('h3');
            const cardp = document.createElement('p');
            const contact = document.createElement('div');
            const cardAddres = document.createElement('p');
            const cardPhone = document.createElement('p');
            const rating = document.createElement('div');
            
            cardS.classList.add('card', 'cardS');
            rcardDefinition.classList.add('rating-definition', 'card-definition');
            cardh3.classList.add('cardh3');
            cardp.classList.add('cardp');
            contact.classList.add('contact');
            cardAddres.classList.add('cardAddres');
            cardPhone.classList.add('cardPhone');
            rating.classList.add('rating');
            
            cardh3.textContent = business.name;
            cardp.textContent = business.description;
            cardAddres.textContent = business.address;
            cardPhone.textContent = business.phone;


            contact.append(cardAddres, cardPhone);
            rcardDefinition.append(cardh3, cardp, contact, rating);
            cardS.appendChild(rcardDefinition);
            carouselStories.appendChild(cardS);
            
            
            
            
    
        });
    }    
    


    ///////////////////////////WEATHER///////////////////////

    const weather = document.querySelector('#weather');
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-36.72&lon=-73.11&appid=fbd84acb3840d4382467a74d7a6700e1&units=metric';
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=-36.72&lon=-73.11&appid=fbd84acb3840d4382467a74d7a6700e1&units=metric';
    let weatherAtNoon = [];
    
    async function apiFetch(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    function displayResults(data) {
        const img = document.createElement('img');
        const temperature = document.createElement('span');
        const currentW = document.createElement('p');
        const forecastDescription = document.createElement('div');
        const forecasth3 = document.createElement('h3');
        const forecast1 = document.createElement('span'); //br 
    
        img.classList.add('weather-img');
        temperature.classList.add('weather-temperature');
        currentW.classList.add('currentW');
        forecastDescription.classList.add('forecast-container');
        forecasth3.classList.add('forecasth3');
        forecast1.classList.add('forecast1');
    
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const desc = data.weather[0].description;
        img.setAttribute('src', `${iconsrc}`);
        img.setAttribute('alt', `${desc}`);
        img.setAttribute('loading', 'lazy');
        temperature.textContent = `The temperature in ${data.name} is ${data.main.temp}°C`;
        currentW.textContent = `Current Weather: ${desc}`;
        forecasth3.textContent = `Forecast (three days)`;
        forecast1.innerHTML = `${weatherAtNoon[0].dt} Temp: ${weatherAtNoon[0].temp} weather: ${weatherAtNoon[0].weather}<br>
                               ${weatherAtNoon[1].dt} Temp: ${weatherAtNoon[1].temp}°C weather: ${weatherAtNoon[1].weather}<br>
                               ${weatherAtNoon[2].dt} Temp: ${weatherAtNoon[2].temp}°C weather: ${weatherAtNoon[2].weather}`;
        
        forecastDescription.append(forecasth3, forecast1);
        weather.append(img, temperature, currentW,forecastDescription);
        
    
        // Usa weatherAtNoon aquí
        console.log('Weather at noon:', weatherAtNoon);
    }
    
    async function apiForecast(forecastURL) {
        try {
            const response = await fetch(forecastURL);
            if (response.ok) {
                const data = await response.json();
                weatherAtNoon = displayResultsForecast(data);
                // Llama a apiFetch después de haber actualizado weatherAtNoon
                apiFetch(url);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    function displayResultsForecast(data) {
        const weatherAtNoon = [];
        data.list.forEach(item => {
            const dateText = item.dt_txt;
            if (dateText.includes('12:00:00')) {
                // dt calculator

                const timestamp = item.dt; 
                const date = new Date(timestamp * 1000);
                const year = date.getFullYear();
                const month = date.getMonth() + 1; // Los meses son 0-11, así que se añade 1
                const day = date.getDate();

                const formattedDate = `${day}/${month}/${year}`;
                weatherAtNoon.push({
                    dt: formattedDate,
                    temp: item.main.temp,
                    weather: item.weather[0].description,
                });
            }
        });
        return weatherAtNoon;
    }
    
    // Primero llama a apiForecast
    apiForecast(forecastURL);
    
 
});
