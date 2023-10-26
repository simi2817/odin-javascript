import { menuItems } from '../assets/menuItems';

function menu() {
    const section = document.createElement('div');
    section.classList.add('menu');

    for(let item of menuItems) {
        const title = document.createElement('h3');
        title.textContent = item.title;
        section.appendChild(title);

        const image = document.createElement('img');
        image.src = `/src/assets/${item.image}.jpeg`;
        image.alt = `Image of ${item.image}`;
        image.height = 200;
        image.width = 200;
        section.appendChild(image);

        const description = document.createElement('p');
        description.textContent = item.desc;
        section.appendChild(description);

        const choice = document.createElement('p');
        choice.textContent = item.choice;
        section.appendChild(choice);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;
        section.appendChild(price);
    }

    return section;
}

export default function displayMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(menu());
}