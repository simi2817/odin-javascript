/* eslint-disable indent */
import { storage } from './storage';

export default function editList(title) {
    for(const key of Object.keys(storage)) {
        storage[key].forEach(item => {
            if(item.title === title) {
                console.log('entered');
            }
        });
    }
}