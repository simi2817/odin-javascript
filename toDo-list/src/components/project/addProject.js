/* eslint-disable no-restricted-syntax */
import newItem from '../list/itemForm';
import displayComponent from '../display/displayComponent';
import checkExistingProjects from './checkExistingProjects';
import createElement from '../createElement/createElement';

export default function addNewProject(projectName) {
  const section = createElement('div', { className: 'newProject', attributes: [{ name: 'id', value: projectName }] });

  const title = createElement('h2', { text: projectName });
  section.appendChild(title);

  const itemsToAddInThisProject = createElement('button', { text: 'Add a list' });
  itemsToAddInThisProject.addEventListener('click', () => {
    newItem(projectName);
  });
  section.appendChild(itemsToAddInThisProject);

  checkExistingProjects(section, projectName);

  displayComponent(section);

  return section;
}
