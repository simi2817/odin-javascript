
function contact() {
    const section = document.createElement('div');
    section.classList.add('contact');

    const hours = document.createElement('h3');
    hours.textContent = 'Opening Hours';
    section.appendChild(hours);

    const open = document.createElement('p');
    open.textContent = 'Mon - Fri: 9AM - 5PM';
    section.appendChild(open);

    const close = document.createElement('p');
    close.textContent = 'Sat - Sun: Closed';
    section.appendChild(close);

    const emailHeading = document.createElement('h4');
    emailHeading.textContent = 'Want to book a table? Email or Call Us!';
    section.appendChild(emailHeading);

    const email = document.createElement('p');
    email.textContent = 'contact@mintcafe.com';
    section.appendChild(email);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(044) 123 4567 890';
    section.appendChild(phoneNumber);

    const addressHeading = document.createElement('h4');
    addressHeading.textContent = 'Find us on - ';
    section.appendChild(addressHeading);

    const address = document.createElement('p');
    address.textContent = '15 Featherstone Street | M34 6FG';
    section.appendChild(address);

    return section;
}

export default function displayContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(contact());
}