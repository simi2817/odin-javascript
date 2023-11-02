/* eslint-disable no-restricted-syntax */
import getDate from './getDate';
import displayComponent from '../display/displayComponent';
import priorityColor from './priorityColor';
import deleteList from './deleteList';
import editList from './editList';
import { storage } from '../storage/storage';
import createElement from '../createElement/createElement';

export default function generateList() {
  const listContainer = createElement('div', { class: 'listContainer' });

  const storageKeys = Object.keys(storage);

  for (const key of storageKeys) {
    const projectName = createElement('h2', { text: key });
    listContainer.appendChild(projectName);

    for (const list of storage[key]) {
      const section = createElement('div', { className: 'listGenerator' });
      section.addEventListener('click', () => {
        section.classList.toggle('done');
      });

      const closeButton = createElement('button', { text: 'x', className: 'closeButton' });
      closeButton.addEventListener('click', () => {
        deleteList(list.title);
      });
      section.appendChild(closeButton);

      const priority = createElement('p', { text: list.priority, className: 'priority' });
      priorityColor(list.priority, priority);
      section.appendChild(priority);

      const title = createElement('h3', { text: list.title, className: 'title' });
      section.appendChild(title);

      const desc = createElement('p', { text: list.description, className: 'desc' });
      section.appendChild(desc);

      const dueDate = getDate(list.dueDate);
      const date = createElement('p', { text: dueDate, className: 'date' });
      section.appendChild(date);

      const editButton = createElement('button', { text: 'Edit', className: 'editButton' });
      editButton.addEventListener('click', () => {
        editList(list.title);
      });
      section.appendChild(editButton);

      listContainer.appendChild(section);
    }
  }

  displayComponent(listContainer);
  return listContainer;
}
