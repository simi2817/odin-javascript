const { readFile } = require('node:fs/promises');

readFile("./cats.json")
.then(resp => JSON.parse(resp))
.then(displayCats);

function displayCats(data) {
    return data.cats.forEach(cat => {
        console.log(cat.name);
    });
}

   