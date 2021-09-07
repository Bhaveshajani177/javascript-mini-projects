// Selectors
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const loader = document.querySelector("#loader");
const author = document.getElementById('author');


// Event Listeners
jokeBtn.addEventListener('click', generateJoke);
generateJoke();


// Functions
async function generateJoke() {
    displayLoading();
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await fetch('https://type.fit/api/quotes', config);
    const data = await res.json();
    const quote = data[getRandomNum(data.length)];
    jokeEl.innerHTML = '<span>" ' + quote.text + ' "</span>';
    author.innerHTML = '<span>— ' + quote.author + '</span>';
    hideLoading();
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function displayLoading() {
    loader.classList.add("display");
    setTimeout(() => {
        loader.classList.remove("display");
    }, 3000);
}

function hideLoading() {
    loader.classList.remove("display");
}