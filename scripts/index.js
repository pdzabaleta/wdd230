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



  
