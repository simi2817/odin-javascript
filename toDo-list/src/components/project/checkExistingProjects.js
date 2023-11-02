/* eslint-disable no-restricted-syntax */

import createElement from '../createElement/createElement';
import { storage } from '../storage/storage';

/* eslint-disable indent */
export default function checkExistingProjects(component, projectName) {
    const storageKeys = Object.keys(storage);
    for (const key of storageKeys) {
      if (key === projectName) {
        const ul = createElement('ul');
        component.appendChild(ul);
        for (const list of storage[key]) {
          const li = createElement('li', { text: list.title });
          ul.appendChild(li);
        }
      }
    }
    return component;
}
