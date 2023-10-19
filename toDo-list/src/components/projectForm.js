/* eslint-disable no-restricted-syntax */
import addProject from './addProject';
import displayComponent from './displayComponent';
import { storage } from './storage';

export default function newProjectForm() {
  const section = document.createElement('div');
  section.classList.add('createProject');

  const storageKeys = Object.keys(storage);
  for (const key of storageKeys) {
    if (key !== 'default') { section.appendChild(addProject(key)); }
  }
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
    const eachProject = document.getElementById('projectName').value;
    addProject(eachProject);
    form.innerHTML = '';
  });
  displayComponent(section);
  return section;
}
