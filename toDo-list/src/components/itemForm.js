import addItem from './updateStorage';
import displayComponent from './displayComponent';
import generateList from './generateList';
import { storage } from './storage';

export default function newItem(projectName = null) {
  const br = document.createElement('br');
  const priority = ['low', 'med', 'high'];

  const section = document.createElement('div');
  section.classList.add('newItem');

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'submit');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('placeholder', 'Title');

  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.setAttribute('id', 'desc');
  description.setAttribute('placeholder', 'Description');

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('id', 'date');

  const priorContainer = document.createElement('select');
  priorContainer.setAttribute('id', 'prior');

  priority.forEach((prior) => {
    const option = document.createElement('option');
    option.textContent = prior;
    priorContainer.appendChild(option);
  });

  const submit = document.createElement('button');
  submit.setAttribute('id', 'submit');
  submit.textContent = 'Submit';

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
