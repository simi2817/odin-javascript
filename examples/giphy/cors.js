const img = document.querySelector('img');
const displayGIF = document.getElementById('displayGIF');

const addGIF = () => {
    const getCats = async() => {
        try {
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=rV23E1xCHYRVTeQD5vlXmNKOj6mrgqPL&s=cats', {mode: 'cors'});
            const cats = await response.json();
            img.src = cats.data.images.original.url;
        }
        catch (err) {
            console.error(err)
        }
    }
    getCats();
}

let keyword = '';
const search = document.querySelector('#search');

search.addEventListener('input', (e) => {
    e.preventDefault();
    keyword = e.target.value;
    });

const searchGIF = () => {
    const getGIF = async() => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rV23E1xCHYRVTeQD5vlXmNKOj6mrgqPL&s=${keyword}`, {mode: 'cors'});
            const gif = await response.json();
            img.src = gif.data.images.original.url;
        }
        catch(err) {
            img.src = './sad.gif';
            console.error(err);
        }
    }
    getGIF();
}