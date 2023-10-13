import newItem from './itemForm';

export default function addNewProject(projectName) {
    const section = document.createElement('div');
    // section.setAttribute('id', projectName);
    section.classList.add('newProject');
    
    const title = document.createElement('h2');
    title.textContent = projectName;
    section.appendChild(title);

    const itemsToAddInThisProject = document.createElement('button');
    itemsToAddInThisProject.textContent = 'Add a list';
    itemsToAddInThisProject.addEventListener('click', newItem);
    section.appendChild(itemsToAddInThisProject);

    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(section);

    return section;
}