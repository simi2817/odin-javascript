import createElement from '../createElement/createElement';

export default function main() {
  const mainDiv = createElement('div', { className: 'main', attributes: [{ name: 'id', value: 'main' }] });
  return mainDiv;
}
