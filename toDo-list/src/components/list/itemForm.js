/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
import addItem from '../storage/updateStorage';
import displayComponent from '../display/displayComponent';
import generateList from './generateList';
import { storage } from '../storage/storage';
import createElement from '../createElement/createElement';

export default function newItem(projectName = null) {
  const br = createElement('br');
  const priority = ['low', 'med', 'high'];

  const section = createElement('div', { 
    className: 'newItem' });

  const form = createElement('form', { 
    attributes: [
      {name: 'method', value: 'post'},
      {name: 'action', value: 'submit'}
    ]});

  const title = createElement('input', { 
    attributes: [
      {name: 'type', value: 'text'},
      {name: 'id', value: 'title'},
      {name: 'placeholder', value: 'Title'}
    ]});

  const description = createElement('input', { 
    attributes: [
      {name: 'type', value: 'text'},
      {name: 'id', value: 'desc'},
      {name: 'placeholder', value: 'Description'}
    ]});

  const dueDate = createElement('input', { 
    attributes: [
      {name: 'type', value: 'date'},
      {name: 'id', value: 'date'}
    ]});

  const priorContainer = createElement('select', { attributes: [{name: 'id', value: 'prior'}]});

  priority.forEach((prior) => {
    const option = createElement('option', { text: prior});
    priorContainer.appendChild(option);
  });

  const submit = createElement('button', {
    text: 'Submit',
    attributes: [{name: 'id', value: 'submit'}]
  });

  form.appendChild(title);
  form.appendChild(br.cloneNode());
  form.appendChild(description);
  form.appendChild(br.cloneNode());
  form.appendChild(dueDate);
  form.appendChild(br.cloneNode());
  form.appendChild(priorContainer);
  form.appendChild(br.cloneNode());
  form.appendChild(submit);

  section.appendChild(form);

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const updatedStorage = addItem(storage, projectName);
    generateList(updatedStorage);
    form.innerHTML = '';
  });

  displayComponent(section);

  return section;
}
