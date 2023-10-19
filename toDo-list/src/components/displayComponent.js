export default function displayComponent(component) {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(component);
}
