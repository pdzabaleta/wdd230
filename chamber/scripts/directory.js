document.addEventListener('DOMContentLoaded', () => {
    const directoryURL = "https://pdzabaleta.github.io/wdd230/chamber/data/members.json";
    async function getBusiness(url) {
        const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.table(data.business);
                displayBusiness(data.business);
            }
    }
    getBusiness(directoryURL);
    const displayBusiness = (business => {
        const container = document.getElementById('directory');

        business.forEach((name) => {
            const nameElement = document.createElement('div');
            const textContent = document.createElement('div');
            const img = document.createElement('img');
            const pName = document.createElement('p');
            const pAddress = document.createElement('p');
            const pPhone = document.createElement('p');
            const aURL = document.createElement('a');
            const mLevel = document.createElement('p');
            const category = document.createElement('p');
            const rating = document.createElement('span');
 
            nameElement.classList.add('business');
            textContent.classList.add('textContent');
            pName.classList.add('pName');
            pAddress.classList.add('pAddress');
            pPhone.classList.add('pPhone');
            aURL.classList.add('aURL');
            mLevel.classList.add('mLevel');
            category.classList.add('category');
            rating.classList.add('rating');
            
            img.setAttribute('src', name.icon);
            img.setAttribute('alt', `${name.name}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '50');
            img.setAttribute('height', '35');
            pName.textContent = name.name;
            pAddress.textContent = name.address;
            pPhone.textContent = name.phone;
            aURL.href = name.url;
            aURL.setAttribute('target', '_blank');
            aURL.textContent = name.url;
            mLevel.textContent = name.membershipLevel;
            category.textContent = `${name.category} `;
            rating.textContent = `(${name.rating})`;

            category.appendChild(rating);
            textContent.append(pName, category, pAddress, pPhone, aURL, mLevel,);
            nameElement.append(img, textContent);  

            container.appendChild(nameElement);
        });     
    })
    
    const grid = document.querySelector('.grid');
    const list = document.querySelector('.list');
    const directory = document.querySelector('#directory');

    if (grid && list) {
        list.addEventListener('click',  () =>{
            directory.classList.toggle('list-active');
        });
        grid.addEventListener('click', () => {
            directory.classList.remove('list-active');
        });
    }
});