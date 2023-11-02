/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-restricted-syntax */
import addProject from './addProject';
import createElement from '../createElement/createElement';
import displayComponent from '../display/displayComponent';
import ifClicked from './ifClicked';
import { storage } from '../storage/storage';

export default function newProjectForm() {
  const section = createElement('div', { className: 'createProject' });

  const storageKeys = Object.keys(storage);
  for (const key of storageKeys) {
    if (key !== 'default')
      section.appendChild(addProject(key));
  }
  const form = createElement('form', { attributes: [
    {name: 'method', value: 'post'},
    {name: 'action', value: 'submit'}
  ]});

  const projectName = createElement('input', { attributes: [
    {name: 'type', value: 'text'},
    {name: 'id', value: 'projectName'},
    {name: 'placeholder', value: 'Project Name'}
  ]});

  const click = createElement('button', { text: 'Ok', attributes: [{ name: 'id', value: 'click' }] });

  form.appendChild(projectName);
  form.appendChild(click);
  section.appendChild(form);

  ifClicked(click, form);

  displayComponent(section);
  return section;
}
