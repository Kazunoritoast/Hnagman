const words = ["python", "hangman", "challenge", "programming", "developer", "adventure", "college", "dynamic", "fitness", "internet",
    "mystery", "neighborhood", "pioneer", "quiz", "robot",
    "seasonal", "student", "technique", "universe", "vacation",
    "virtual", "workshop", "youthful", "zodiac", "dialogue",
    "feedback", "gallery", "horizon", "improve", "journey",
    "landscape", "modern", "network", "opinion", "performance"];
let word, wordDisplay, guessedLetters, attempts;

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    wordDisplay = Array(word.length).fill('_');
    guessedLetters = new Set();
    attempts = 6;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('word').textContent = wordDisplay.join(' ');
    document.getElementById('attempts').textContent = `Attempts left: ${attempts}`;
    document.getElementById('message').textContent = '';
}

function guessLetter() {
    const guess = document.getElementById('guess').value.toLowerCase();
    document.getElementById('guess').value = '';

    if (!guess || guessedLetters.has(guess)) {
        document.getElementById('message').textContent = 'Invalid or duplicate guess.';
        return;
    }

    guessedLetters.add(guess);

    if (word.includes(guess)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                wordDisplay[i] = guess;
            }
        }
    } else {
        attempts--;
    }

    if (wordDisplay.join('') === word) {
        document.getElementById('message').textContent = `Congratulations! You've guessed the word: ${word}`;
    } else if (attempts <= 0) {
        document.getElementById('message').textContent = `Game over! The word was: ${word}`;
    } else {
        updateDisplay();
    }
}

startGame();
