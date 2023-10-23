/* eslint-disable indent */
import { storage } from './storage';

export default function deleteList(title) {
    console.log('entered delete list');
    for(const key of Object.keys(storage)) {
        storage[key] = storage[key].filter((item) => item.title !== title);
    }
    return storage;
}
