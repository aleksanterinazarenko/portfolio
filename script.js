async function fetchWords() {
    const response = await fetch('words.json');
    const words = await response.json();
    return words;
}

function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

async function displayRandomWord() {
    const words = await fetchWords();
    const randomWord = getRandomWord(words);
    
    document.getElementById('english').textContent = randomWord.English;
    document.getElementById('finnish').textContent = randomWord.Finnish;
    document.getElementById('polish').textContent = randomWord.Polish;
}

// Wyświetl słowo przy załadowaniu strony
window.onload = displayRandomWord;

function randomizeWord() {
    const words = [
        { english: "cat", finnish: "kissa", polish: "kot" },
        { english: "dog", finnish: "koira", polish: "pies" },
        { english: "tree", finnish: "puu", polish: "drzewo" }
    ];

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    document.getElementById('english').textContent = randomWord.english;
    document.getElementById('finnish').textContent = randomWord.finnish;
    document.getElementById('polish').textContent = randomWord.polish;
}