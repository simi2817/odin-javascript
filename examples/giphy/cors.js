const img = document.querySelector('img');
const displayGIF = document.getElementById('displayGIF');

const addGIF = () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=rV23E1xCHYRVTeQD5vlXmNKOj6mrgqPL&s=cats', {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        img.src = response.data.images.original.url;

    })
    .catch((err) => {
        console.log(err);
    });           
}

let keyword = '';
const search = document.querySelector('#search');

search.addEventListener('input', (e) => {
    e.preventDefault();
    keyword = e.target.value;
    });
const searchGIF = () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rV23E1xCHYRVTeQD5vlXmNKOj6mrgqPL&s=${keyword}`, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        img.src = response.data.images.original.url;
    })
    .catch((err) => {
        img.src = './sad.gif';
        console.log(err);
    }); 
}