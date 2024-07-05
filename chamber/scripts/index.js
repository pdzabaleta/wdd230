
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -220, behavior: 'smooth' }); // Ajusta el valor según el tamaño de tus tarjetas
});
nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 220, behavior: 'smooth' }); // Ajusta el valor según el tamaño de tus tarjetas
});
const carouselS = document.querySelector('.carousel-stories');
const prevButtonS = document.querySelector('.prevS');
const nextButtonS = document.querySelector('.nextS');
prevButtonS.addEventListener('click', () => {
    carouselS.scrollBy({ left: -220, behavior: 'smooth' }); // Ajusta el valor según el tamaño de tus tarjetas
});
nextButtonS.addEventListener('click', () => {
    carouselS.scrollBy({ left: 220, behavior: 'smooth' }); // Ajusta el valor según el tamaño de tus tarjetas
});

function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

function getLastModified() {
    return document.lastModified;
}
document.getElementById('year').textContent = getCurrentYear();
document.getElementById('lastModified').textContent = getLastModified();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


