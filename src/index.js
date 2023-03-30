import "./styles.css";
import { Ship, Gameboard, Player, Square } from "./logic";
import { createBoard, displayShip, addEvents, getAttackedByComputer } from "./dom";

const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const computerBoardDom = document.querySelector(".computer-board");
const comp = document.querySelector(".board-container:last-child");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

let module = (function () {
    function createPlayField(playerBoard) {
        let playField = createBoard(playerBoard.board, "player");
        const playerBoardDom = document.querySelector(".player-board");
        playerBoardDom.appendChild(playField);
    };
    function createCompField(computerBoard) {
        let compField = createBoard(computerBoard.board, "computer");
        const computerBoardDom = document.querySelector(".computer-board");
        computerBoardDom.appendChild(compField);
    }
    function removePlayerField() {
        let playField = document.querySelector(".player");
        const playerBoardDom = document.querySelector(".player-board");
        playerBoardDom.removeChild(playField);
    }
    function removeFields() {
        let playField = document.querySelector(".player");
        const playerBoardDom = document.querySelector(".player-board");
        playerBoardDom.removeChild(playField);
        let compField = document.querySelector(".computer");
        const computerBoardDom = document.querySelector(".computer-board");
        computerBoardDom.removeChild(compField);
    }
    function createPlayerBoard() {
        let playerBoard = new Gameboard();
        return playerBoard;
    };
    function createComputerBoard() {
        let computerBoard = new Gameboard();
        return computerBoard;
    };
    function createPlayer() {
        let player = new Player();
        return player;
    };
    function createComputer() {
        let computer = new Player();
        return computer;
    };
    function start(playerBoard, computerBoard, player, computer) {
        addEvents(computerBoard, "computer", player, playerBoard, computer);
        player.turn = true;
    };
    return {
        createPlayField: createPlayField,
        createCompField: createCompField,
        removePlayerField: removePlayerField,
        removeFields: removeFields,
        createPlayerBoard: createPlayerBoard,
        createComputerBoard: createComputerBoard,
        createPlayer: createPlayer,
        createComputer: createComputer,
        start: start,
    }
})();

function placeAllShips(computerBoard) {
    computerBoard.placeShip(4, 16, 4, "horizontal");
    computerBoard.placeShip(2, 19, 3, "horizontal");
    computerBoard.placeShip(8, 11, 3, "vertical");
    computerBoard.placeShip(3, 12, 2, "horizontal");
    computerBoard.placeShip(2, 14, 2, "vertical");
    computerBoard.placeShip(9, 18, 2, "vertical");
    computerBoard.placeShip(1, 11, 1, "vertical");
    computerBoard.placeShip(6, 14, 1, "vertical");
    computerBoard.placeShip(1, 17, 1, "vertical");
    computerBoard.placeShip(6, 20, 1, "vertical");
};

const placeAShip = document.querySelector(".place-a-ship");
placeAShip.addEventListener("click", () => {
    formContainer.style.display = "block";
    placeAShip.style.display = "none";
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    error.style.display = "none";
    formContainer.style.display = "none";
    placeAShip.style.display = "block";
});

const submit = document.querySelector(".submit");
submit.addEventListener("click", addShip);
function addShip(e) {
    e.preventDefault();
    const checkVal = form.checkValidity();
    form.reportValidity();
    if (checkVal) {
        const x = Number(document.getElementById("column").value);
        const y = Number(document.getElementById("row").value);
        const length = document.getElementById("length").value;
        const directions = document.getElementsByName('direction');
        let direction;
        for (let i = 0; i < directions.length; i++) {
            if (directions[i].checked) {
                direction = directions[i].value;
            }
        };
        try {
            playerBoard.placeShip(x, y, length, direction);
            displayShip(x, y, length, direction, "player");
            if (playerBoard.ships.length > 0) {
                restart.style.display = "block";
            };
            formContainer.style.display = "none";
            error.style.display = "none";
            placeAShip.style.display = "block";
            if (playerBoard.ships.length == 10) {
                start.style.display = "block";
                placeAShip.style.display = "none";
            };
        } catch (err) {
            error.textContent = err.message;
            error.style.display = "block";
        };
    };
};

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    placeAllShips(computerBoard);
    module.createCompField(computerBoard);
    module.start(playerBoard, computerBoard, player, computer);
    comp.style.display = "grid";
    start.style.display = "none";
});

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    playerBoard = module.createPlayerBoard();
    computerBoard = module.createComputerBoard();
    player = module.createPlayer();
    computer = module.createComputer();

    if (computerBoardDom.hasChildNodes()) {
        module.removeFields();
    } else {
        module.removePlayerField();
    };

    module.createPlayField(playerBoard);

    comp.style.display = "none";
    restart.style.display = "none";
    start.style.display = "none";
    placeAShip.style.display = "block";
    result.style.display = "none";
});

let playerBoard = module.createPlayerBoard();
let computerBoard = module.createComputerBoard();
let player = module.createPlayer();
let computer = module.createComputer();
module.createPlayField(playerBoard);

