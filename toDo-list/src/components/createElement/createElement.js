/* eslint-disable no-restricted-syntax */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable indent */
export default function createElement(element, options = {}) {
    const { text, className, attributes } = options;
    const newElement = document.createElement(element);
    if (text)
        newElement.textContent = text;
    if (className)
        newElement.classList.add(className);
    if (attributes && attributes.length > 0) {
        for (const attribute of attributes)
            newElement.setAttribute(attribute.name, attribute.value);
    }
    return newElement;
}
