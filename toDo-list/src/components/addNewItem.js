export default function addNewItem() {
    let storage = [];
    
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    const prior = document.getElementById('prior').value;

    storage.push({
        "title": title,
        "description": desc,
        "dueDate": date,
        "priority": prior
    });

    console.log(storage);
}