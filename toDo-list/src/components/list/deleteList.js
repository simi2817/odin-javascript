/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
import { storage } from '../storage/storage';

export default function deleteList(title) {
    for (const key of Object.keys(storage)) {
        storage[key] = storage[key].filter((item) => item.title !== title);
    }
    return storage;
}
