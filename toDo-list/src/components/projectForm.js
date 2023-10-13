import addProject from "./addProject";

function newProjectForm() {
    const section = document.createElement('div');
    section.classList.add('createProject');

    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'submit');

    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'projectName');
    projectName.setAttribute('placeholder', 'Project Name');

    const click = document.createElement('button');
    click.setAttribute('id', 'click');
    click.textContent = 'Ok';

    form.appendChild(projectName);
    form.appendChild(click);
    section.appendChild(form);

    click.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = document.getElementById('projectName').value;
        addProject(projectName);
        form.innerHTML = '';
    });

    return section;
}

export default function display() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(newProjectForm());
}