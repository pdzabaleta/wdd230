
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -220, behavior: 'smooth' }); // Ajusta el valor según el tamaño de tus tarjetas
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 220, behavior: 'smooth' }); // Ajusta el valor según el tamaño de tus tarjetas
    });

