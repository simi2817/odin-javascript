import generateList from './generateList';
import newItem from './itemForm';
import newProject from './projectForm';
import { storage } from './storage';

export default function buttonList() {
  const section = document.createElement('div');
  section.classList.add('welcome');

  const addSymbol = document.createElement('button');
  addSymbol.textContent = 'Add a list';
  addSymbol.addEventListener('click', newItem);
  section.appendChild(addSymbol);

  const project = document.createElement('button');
  project.textContent = 'New project';
  project.addEventListener('click', newProject);
  section.appendChild(project);

  const viewList = document.createElement('button');
  viewList.textContent = 'View List';
  viewList.addEventListener('click', () => {
    console.log('entered view list');
    generateList(storage);
  });
  section.appendChild(viewList);

  return section;
}
