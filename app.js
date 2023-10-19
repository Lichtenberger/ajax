document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    randomGif();
});

document.getElementById('removeAll').addEventListener('click', () => {
    div = '';
});

async function randomGif() {
    const searchValue = document.getElementById('searchValue').value;
    const results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=VgXcyUqqeT90vPSWJUirNIAgVlWxU6Fh`);
    const img = document.createElement('img');
    const div = document.getElementById('imageArea');
    let randomNumber = Math.round(Math.random() * 1);
    img.src = results.data.data[randomNumber].images.original.url;
    div.append(img);
}
