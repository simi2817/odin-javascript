/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
export default function priorityColor(item, component) {
  switch (item) {
    case 'low':
      component.style.backgroundColor = 'rgb(85, 169, 190)';
      break;
    case 'med':
      component.style.backgroundColor = 'rgb(206, 162, 81)';
      break;
    case 'high':
      component.style.backgroundColor = 'rgb(194, 91, 78)';
      break;
  }
  return component;
}
