import about from './about';
import menu from './menu';
import contact from './contact';

function welcome() {
    const section = document.createElement('div');
    section.classList.add('welcome');

    const heading = document.createElement('h1');
    heading.textContent = 'Mint Cafe';
    section.appendChild(heading);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About Us';
    aboutBtn.addEventListener('click', about);
    nav.appendChild(aboutBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', menu);
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', contact);
    nav.appendChild(contactBtn);

    section.appendChild(nav);

    return section;
}

function main() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

export default function display() {
    const content = document.getElementById('content');
    content.appendChild(welcome());
    content.appendChild(main());
    return content;
}