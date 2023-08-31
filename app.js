// globals
let words_list = ["APPLE", "BANANA", "CHERRY", "GRAPE", "ORANGE"];
const randomIndex = Math.floor(Math.random() * words_list.length);// Generate a random index within the length of the list
let word = words_list[randomIndex];// Use the random index to get a random item from the list
let blank = [];
let tries = 6;
let wl = word.length;
const showen_word = document.querySelector('.word');

// functions

function draw_hangman(tries) {
    let body_parts = ['head', 'body', 'right_x5F_arm', 'left_x5F_arm', 'right_x5F_leg', 'left_x5F_leg'];
    let showen_parts = [2];
    for (let i = 0; i < tries; i++) {
        showen_parts[i] = body_parts[i]
    }
    if (tries > 0) {
        showen_parts.forEach(part => {
            document.getElementById(part).style.visibility = 'visible'
        });
    }
}
function win() {
    setTimeout(function () {
        alert('you won')
        location.reload();
    }, 200);

}
function lost() {
    setTimeout(function () {
        alert('game over')
        location.reload();
    }, 200);
}



function main() {

    for (let i = 0; i < wl; i++) {
        blank[i] = '_';
    }
    showen_word.textContent = blank;

    // Generating buttons
    const buttonsContainer = document.querySelector('.buttons');
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('button');
        button.id = `button${letter}`;
        buttonsContainer.appendChild(button);
    }

    // game loop
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const letter = button.textContent;

            if (word.includes(letter)) {
                let i = word.indexOf(letter);
                blank[i] = letter;
                word = word.slice(0, i) + ' ' + word.slice(i + 1);
                showen_word.textContent = blank;
                wl--;
                if (wl == 0) {
                    win()
                }
            }
            else {
                tries--;
                draw_hangman(6 - tries)
                if (tries == 0) {
                    lost()
                }
            }
        });
    });
}
main();



