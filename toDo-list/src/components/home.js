import newItem from './newItem';

function welcome() {
    const section = document.createElement('div');
    section.classList.add('welcome');

    const heading = document.createElement('h1');
    heading.textContent = 'ToDo List';
    section.appendChild(heading);

    const addSymbol = document.createElement('button');
    addSymbol.textContent = 'Add a todo list';
    addSymbol.addEventListener('click', newItem);
    section.appendChild(addSymbol);

    return section;
}

function main() {
    const main = document.createElement('div');
    main.setAttribute('id','main');
    main.classList.add('main');
    return main;
}

export default function display() {
    const content = document.getElementById('content');
    content.appendChild(welcome());
    content.appendChild(main());
    return content;
}