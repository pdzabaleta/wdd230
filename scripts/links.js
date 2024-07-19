document.addEventListener('DOMContentLoaded', () => {

    const baseURL = "https://pdzabaleta.github.io/wdd230/";
    const linksURL = "https://pdzabaleta.github.io/wdd230/data/links.json";
    async function getLinks(url) {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.table(data.weeks.links.url);
            displayLinks(data.weeks);
            
          }
    }
    getLinks(linksURL);
    const displayLinks = (weeks) => {
        const container = document.getElementById('weeks-container');

        weeks.forEach((week) => {
            const weekElement = document.createElement('div');
            weekElement.classList.add('week');

            const weekTitle = document.createElement('h3');
            weekTitle.textContent = `${week.week}`;
            weekElement.appendChild(weekTitle);


            const weekLink = document.createElement('div');
            weekLink.classList.add('week-link');
            
            week.links.forEach((link) =>{
                const linkElement = document.createElement('a')
                linkElement.href = link.url;
                linkElement.textContent = link.title;
                weekLink.appendChild(linkElement);
            });
            


            container.appendChild(weekElement);
            weekElement.appendChild(weekLink);
        });
    }
});
