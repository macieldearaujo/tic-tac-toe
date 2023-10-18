const square_top_left = document.querySelector('.square-top-left');
const square_top = document.querySelector('.square-top');
const square_top_right = document.querySelector('.square-top-right');
const square_left = document.querySelector('.square-left');
const square = document.querySelector('.square');
const square_right = document.querySelector('.square-right');
const square_bottom_left = document.querySelector('.square-bottom-left');
const square_bottom = document.querySelector('.square-bottom');
const square_bottom_right = document.querySelector('.square-bottom-right');

const player1 = document.querySelector('.player-1-score');
const player2 = document.querySelector('.player-2-score');
const scoreTies = document.querySelector('.ties');

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let addTies = 0;

let all = 0;

const position = [square_top_left, square_top, square_top_right, square_left, square, square_right, square_bottom_left, square_bottom, square_bottom_right]

let move = 'O';
let currentMove;

const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
check();

function determinePlay() {
    if (move === 'X') {
        move = 'O';
    } else {
        move = 'X'
    }
}

position.forEach((value, index) => {
    value.addEventListener('click', () => {
        if (board[index] !== move) {
            determinePlay();
            value.innerHTML = move;
            draw();
        }
        board[index] = move;
        console.log(board)
        check();
    })
})

function check() {
    //Horizontal-top
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') { player1Wins(); };
    if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') { player2Wins(); };
    //Horizontal-square
    if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') { player1Wins(); };
    if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') { player2Wins(); };
    //Horizontal-bottom
    if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') { player1Wins(); };
    if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') { player2Wins(); };

    //Vertical-left
    if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') { player1Wins(); };
    if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') { player2Wins(); };
    //Vertical-square
    if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') { player1Wins(); };
    if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') { player2Wins(); };
    //Vertical-right
    if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') { player1Wins(); };
    if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') { player2Wins(); };

    //Diagonal-to-right
    if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') { player1Wins(); };
    if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') { player2Wins(); };
    //Diagonal-to-left
    if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') { player1Wins(); };
    if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') { player2Wins(); };
}

function player1Wins() {
    playSound();
    setTimeout(() => {
        all = 0;
        scorePlayer1++;
        player1.innerHTML = scorePlayer1;
        resetBoard();
        console.log(board)
    }, 500)
}

function player2Wins() {
    playSound();
    setTimeout(() => {
        all = 0;
        scorePlayer2++;
        player2.innerHTML = scorePlayer2;
        resetBoard();
        console.log(board);
    }, 500)
}

function tie() {
    playSound();
    setTimeout(() => {
        all = 0;
        addTies++;
        scoreTies.innerHTML = addTies;
        resetBoard();
    }, 500)
}

function resetBoard() {
    position.forEach(value => {
        value.innerHTML = "";
    })

    board.forEach((value, index) => {
        board[index] = "";
    })

    console.log(board)
}

function draw() {
    all++

    if (all >= 9) {
        tie();
    }
    console.log(all);
}

function playSound() {
    const audio = document.querySelector('.sound-effect');
    audio.play();
}