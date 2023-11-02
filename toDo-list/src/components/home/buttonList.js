import createElement from '../createElement/createElement';
import generateList from '../list/generateList';
import newItem from '../list/itemForm';
import newProject from '../project/projectForm';

export default function buttonList() {
  const section = createElement('div', { className: 'welcome' });

  const addSymbol = createElement('button', { text: 'Add a list' });
  addSymbol.addEventListener('click', newItem);
  section.appendChild(addSymbol);

  const project = createElement('button', { text: 'New project' });
  project.addEventListener('click', newProject);
  section.appendChild(project);

  const viewList = createElement('button', { text: 'View List' });
  viewList.addEventListener('click', generateList);
  section.appendChild(viewList);

  return section;
}
