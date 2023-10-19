import main from './mainDiv';
import buttonList from './buttonList';

export default function home() {
  const content = document.getElementById('content');
  const heading = document.createElement('h1');
  heading.textContent = 'ToDo List';
  content.appendChild(heading);
  content.appendChild(buttonList());
  content.appendChild(main());
  return content;
}
