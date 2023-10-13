
import getDate from "./getDate";

export default function generateList(storage) {
    const container = document.createElement('div');
    container.classList.add('listContainer');

    storage.forEach((list) => {
        const section = document.createElement('div');
        section.classList.add('listGenerator');
        section.addEventListener('click', () => {
            section.classList.toggle('done');
        })
        
        const priority = document.createElement('p');
        priority.textContent = list["priority"];
        priority.classList.add("priority");
        switch(list["priority"]) {
            case 'low': 
                priority.style.backgroundColor = 'rgb(85, 169, 190)';
                break;
            case 'med':
                priority.style.backgroundColor = 'rgb(206, 162, 81)';
                break;
            case 'high':
                priority.style.backgroundColor = 'rgb(194, 91, 78)';
                break;
        }
        section.appendChild(priority);

        const title = document.createElement('h3');
        title.textContent = list["title"];
        title.classList.add("title");
        section.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = list["description"];
        desc.classList.add("desc");
        section.appendChild(desc);

        const date = document.createElement('p');
        const dueDate = getDate(list["dueDate"]);
        date.textContent = dueDate;
        date.classList.add("date");
        section.appendChild(date);  

        container.appendChild(section);
    });

    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(container);

    return container;
}