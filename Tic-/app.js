// Selecting all elements with class 'box'
let boxes = document.querySelectorAll('.box');

// Selecting the reset button
let resetButton = document.querySelector('#resetbtn');

// Selecting the new game button
let newGameBtn = document.querySelector('#new-btn');

// Selecting the message container
let msgContainer = document.querySelector('.msg-container');

// Selecting the message element
let msg = document.querySelector('#msg');

// Variable to keep track of whose turn it is
let turn0 = true;

// Winning patterns in Tic Tac Toe
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Function to reset the game
const resetGame = () => {
    turn0 = true; // Resetting turn to player 1
    enableBoxes(); // Enabling all boxes
    msgContainer.classList.add('hide'); // Hiding the message container
};

// Adding click event listeners to all boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O"; // Marking the box with 'O' for player 1
            box.style.color = "blue"; // Changing text color to blue for player 1
            turn0 = false; // Switching turns to player 2
        } else {
            box.innerText = "X"; // Marking the box with 'X' for player 2
            box.style.color = "black"; // Changing text color to black for player 2
            turn0 = true; // Switching turns to player 1
        }
        box.disabled = true; // Disabling the box after it's clicked
        checkWinner(); // Checking if there's a winner after each move
    });
});


// Function to disable all boxes
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to enable all boxes and clear their content
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = ''; // Clearing the content of the box
    }
};

// Function to show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide'); // Displaying the message container
    disabledBoxes(); // Disabling all boxes
};

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                console.log("Winner", val1);
                showWinner(val1); // If there's a winner, display the message
            }
        }
    }
};

// Adding click event listener to the new game button
newGameBtn.addEventListener('click', resetGame);

// Adding click event listener to the reset button
resetButton.addEventListener('click', resetGame);
