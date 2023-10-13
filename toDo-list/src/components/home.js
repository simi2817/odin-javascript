import newItem from './itemForm';
import newProject from './projectForm';

function welcome() {
    const section = document.createElement('div');
    section.classList.add('welcome');

    const addSymbol = document.createElement('button');
    addSymbol.textContent = 'Add a todo list';
    addSymbol.addEventListener('click', newItem);
    section.appendChild(addSymbol);

    const project = document.createElement('button');
    project.textContent = 'Create a new project';
    project.addEventListener('click', newProject);
    section.appendChild(project);

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
    const heading = document.createElement('h1');
    heading.textContent = 'ToDo List';
    content.appendChild(heading);
    content.appendChild(welcome());
    content.appendChild(main());
    return content;
}