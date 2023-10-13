import generateList from "./generateList";

export default function addNewItem(storage, projectName) {

    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    const prior = document.getElementById('prior').value;
    const projectTitle = projectName === undefined ? 'default' : projectName;

    storage.push({
        "project": projectTitle,
        "title": title,
        "description": desc,
        "dueDate": date,
        "priority": prior
    });

    console.log(storage);

    generateList(storage);

    return storage;
}