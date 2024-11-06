const getWordButton = document.getElementById('get-word-button');
const resetButton = document.getElementById('reset-button');
const thumbsUpButton = document.getElementById('thumbs-up');
const thumbsDownButton = document.getElementById('thumbs-down');
const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');

async function getRandomWord() {
    const response = await fetch('https://api.urbandictionary.com/v0/random');
    const data = await response.json();
    const randomWord = data.list[0];
    wordElement.textContent = randomWord.word;
    definitionElement.textContent = randomWord.definition;
}

getWordButton.addEventListener('click', getRandomWord);

resetButton.addEventListener('click', () => {
    wordElement.textContent = "Click the button to get a random word!";
    definitionElement.textContent = "";
});

thumbsUpButton.addEventListener('click', () => alert('Liked!'));
thumbsDownButton.addEventListener('click', () => alert('Disliked!'));
async function sendRating(rating) {
    await fetch('http://localhost:3000/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating })
    });
}

thumbsUpButton.addEventListener('click', () => sendRating('up'));
thumbsDownButton.addEventListener('click', () => sendRating('down'));
