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

    var storedTimestamp = localStorage.getItem('timestamp');

    if (!storedTimestamp) {
        // Si no hay una estampa de tiempo almacenada, crea una nueva
        var currentDate = new Date();
        var isoTimestamp = currentDate.toISOString();

        // Almacena la estampa de tiempo en localStorage
        localStorage.setItem('timestamp', isoTimestamp);
    }
});
