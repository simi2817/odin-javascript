import aboutImage from '../assets/about-image.jpeg';

function about() {
    const section = document.createElement('div');
    section.classList.add('about');

    const heading = document.createElement('h2');
    heading.textContent = 'About Us';
    section.appendChild(heading);

    const image = document.createElement('img');
    image.src = aboutImage;
    image.height = 400;
    image.width = 300;
    image.alt = 'Image of coffee with croissants';
    section.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    section.appendChild(paragraph);

    return section;
}

export default function displayAbout() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(about());
}