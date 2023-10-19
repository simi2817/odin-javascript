/* eslint-disable no-restricted-syntax */
import getDate from './getDate';
import displayComponent from './displayComponent';
import priorityColor from './priorityColor';

export default function generateList(storage) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('listContainer');

  const storageKeys = Object.keys(storage);

  for (const key of storageKeys) {
    const projectName = document.createElement('h2');
    projectName.textContent = key;
    listContainer.appendChild(projectName);

    for (const list of storage[key]) {
      const section = document.createElement('div');
      section.classList.add('listGenerator');
      section.addEventListener('click', () => {
        section.classList.toggle('done');
      });

      const priority = document.createElement('p');
      priority.textContent = list.priority;
      priority.classList.add('priority');
      priorityColor(list.priority, priority);
      section.appendChild(priority);

      const title = document.createElement('h3');
      title.textContent = list.title;
      title.classList.add('title');
      section.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = list.description;
      desc.classList.add('desc');
      section.appendChild(desc);

      const date = document.createElement('p');
      const dueDate = getDate(list.dueDate);
      date.textContent = dueDate;
      date.classList.add('date');
      section.appendChild(date);

      listContainer.appendChild(section);
    }
  }

  displayComponent(listContainer);
  return listContainer;
}
