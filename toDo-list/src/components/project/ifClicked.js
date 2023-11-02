/* eslint-disable no-param-reassign */
import addNewProject from './addProject';

export default function ifClicked(component, form) {
  component.addEventListener('click', (e) => {
    e.preventDefault();
    const eachProject = document.getElementById('projectName').value;
    addNewProject(eachProject);
    form.innerHTML = '';
  });
}
