/* eslint-disable no-restricted-syntax */
import newItem from './itemForm';
import displayComponent from './displayComponent';
import { storage } from './storage';

export default function addNewProject(projectName) {
  const section = document.createElement('div');
  section.setAttribute('id', projectName);
  section.classList.add('newProject');

  const title = document.createElement('h2');
  title.textContent = projectName;
  section.appendChild(title);

  const itemsToAddInThisProject = document.createElement('button');
  itemsToAddInThisProject.textContent = 'Add a list';
  itemsToAddInThisProject.addEventListener('click', () => {
    newItem(projectName);
  });
  section.appendChild(itemsToAddInThisProject);

  const storageKeys = Object.keys(storage);
  for (const key of storageKeys) {
    if (key === projectName) {
      const ul = document.createElement('ul');
      section.appendChild(ul);
      for (const list of storage[key]) {
        const li = document.createElement('li');
        li.textContent = list.title;
        ul.appendChild(li);
      }
    }
  }

  displayComponent(section);

  return section;
}
