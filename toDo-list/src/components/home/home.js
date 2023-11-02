import main from './mainDiv';
import buttonList from './buttonList';
import createElement from '../createElement/createElement';

export default function home() {
  const content = document.getElementById('content');
  const heading = createElement('h1', { text: 'ToDo List' });
  content.appendChild(heading);
  content.appendChild(buttonList());
  content.appendChild(main());
  return content;
}
