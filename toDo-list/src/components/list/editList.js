/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
import { storage } from '../storage/storage';

export default function editList(title) {
    for(const key of Object.keys(storage)) {
        storage[key].forEach(item => {
            if(item.title === title) {
                console.log('entered');
            }
        });
    }
}
