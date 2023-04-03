import { Ship, Gameboard, Square, Player } from "./logic";

function createBoard(board, name) {
    // arguement is playerBoard.board, i. e. Gameboard class board property
    const field = document.createElement("div");
    field.classList.add(`${name}`);

    for (let i = 11; i < 21; i++) {
        for (let j = 1; j < 11; j++) {
            const squareDom = document.createElement("div");
            squareDom.dataset.y = i;
            squareDom.dataset.x = j;

            squareDom.dataset.hasShip = board[i - 11][j - 1].hasShip;
            squareDom.dataset.canPlaceShip = board[i - 11][j - 1].canPlaceShip;
            if (board[i - 11][j - 1].boat != undefined) {
                squareDom.dataset.length = board[i - 11][j - 1].boat.length;
            };

            field.appendChild(squareDom);
        }
    }
    return field;
};

function displayShip(x, y, length, direction, name) {
    // argument is playerBoard, i. e. Gameboard class
    if (length == 1) {
        const ship = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
        ship.dataset.hasShip = true;
        ship.dataset.length = 1
    };
    if (direction == "horizontal") {
        if (length == 2) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 1}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship1.dataset.length = 2;
            ship2.dataset.length = 2
        } else if (length == 3) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 1}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 2}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship1.dataset.length = 3;
            ship2.dataset.length = 3;
            ship3.dataset.length = 3;
        } else if (length == 4) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 1}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 2}"]`);
            const ship4 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 3}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship4.dataset.hasShip = true;
            ship1.dataset.length = 4;
            ship2.dataset.length = 4;
            ship3.dataset.length = 4;
            ship4.dataset.length = 4;
        }
    };
    if (direction == "vertical") {
        if (length == 2) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${x}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship1.dataset.length = 2;
            ship2.dataset.length = 2
        } else if (length == 3) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${x}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y + 2}"][data-x="${x}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship1.dataset.length = 3;
            ship2.dataset.length = 3;
            ship3.dataset.length = 3;
        } else if (length == 4) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${x}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y + 2}"][data-x="${x}"]`);
            const ship4 = document.querySelector(`.${name} div[data-y="${y + 3}"][data-x="${x}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship4.dataset.hasShip = true;
            ship1.dataset.length = 4;
            ship2.dataset.length = 4;
            ship3.dataset.length = 4;
            ship4.dataset.length = 4;
        }
    }
};

function addEvents(gameboard, name, player, playerBoard, computer) {
    // gameboard arguement playerBoard, i. e. Gameboard class object
    const squaresDom = document.querySelectorAll(`.${name} div`);

    squaresDom.forEach((square) => {
        const x = Number(square.dataset.x);
        const y = Number(square.dataset.y);

        function attack() {
            getAttacked(x, y, gameboard, name);
        };

        square.addEventListener("click", attack, { once: true });

        function getAttacked(x, y, gameboard, name) {
            gameboard.receiveAttack(x, y);
            square.dataset.missed = gameboard.board[y - 11][x - 1].missedAttack;
            square.dataset.success = gameboard.board[y - 11][x - 1].successfulAttack;
            if (gameboard.board[y - 11][x - 1].boat != undefined && gameboard.board[y - 11][x - 1].boat.sunk == true) {
                if (gameboard.board[y - 11][x - 1].boat.length == 1) {
                    square.dataset.sunk = true;
                    // checking current row for around squares
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                            if (i > 0) {
                                if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                                    cell.dataset.around = true;
                                }
                            };
                            if (i < 9) {
                                if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                                    cell.dataset.around = true;
                                }
                            }
                        }
                    };
                    // checking above row for around squares
                    if (y - 1 > 10) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking below row for around squares
                    if (y + 1 < 21) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                } else if (gameboard.board[y - 11][x - 1].boat.direction == "horizontal") {
                    // displaying sunk ship
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`);
                            cell.dataset.sunk = true;
                        }
                    };
                    // checking current row for around squares
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                            if (i > 0) {
                                if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                                    cell.dataset.around = true;
                                }
                            };
                            if (i < 9) {
                                if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                                    cell.dataset.around = true;
                                }
                            }
                        }
                    };
                    // checking above row for around squares
                    if (y - 1 > 10) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            };
                        };
                    };
                    // checking below row for around squares
                    if (y + 1 < 21) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                } else if (gameboard.board[y - 11][x - 1].boat.direction == "vertical") {
                    // displaying sunk ship
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                            const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`);
                            cell.dataset.sunk = true;
                        }
                    };
                    // checking current column for around squares
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                            if (i > 0) {
                                if (gameboard.board[i - 1][x - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`);
                                    cell.dataset.around = true;
                                }
                            };
                            if (i < 9) {
                                if (gameboard.board[i + 1][x - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`);
                                    cell.dataset.around = true;
                                }
                            }
                        }
                    };
                    // checking before column for around squares
                    if (x - 1 > 0) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true" && ((i + 10 > 10 && document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`).dataset.sunk == "true") || (i + 12 < 21 && document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x - 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking after column for around squares
                    if (x + 1 < 11) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true" && ((i + 10 > 10 && document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`).dataset.sunk == "true") || (i + 12 < 21 && document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    }
                }
            };
            const disable = document.querySelectorAll(`.${name} div[data-around="true"]`);
            disable.forEach(square => square.replaceWith(square.cloneNode()));
            player.changeTurns(x, y, gameboard, computer);
            while (player.turn == false) {
                let target = computer.attackEnemy(playerBoard, player);
                getAttackedByComputer(target[0], target[1], playerBoard, "player");
                if (playerBoard.gameOver == true) {
                    gameIsOver("GAME OVER. You lost! All your ships are sunk.");
                    squaresDom.forEach(spot => spot.replaceWith(spot.cloneNode()));
                    break;
                };
            };
            if (gameboard.gameOver == true) {
                gameIsOver("GAME OVER. You won! Congratulations! All of the opponent's ships are sunk.");
                squaresDom.forEach(spot => spot.replaceWith(spot.cloneNode()));
            };
        };
    });
};

function getAttackedByComputer(x, y, gameboard, name) {
    const square = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
    square.dataset.missed = gameboard.board[y - 11][x - 1].missedAttack;
    square.dataset.success = gameboard.board[y - 11][x - 1].successfulAttack;
    if (gameboard.board[y - 11][x - 1].boat != undefined && gameboard.board[y - 11][x - 1].boat.sunk == true) {
        if (gameboard.board[y - 11][x - 1].boat.length == 1) {
            square.dataset.sunk = true;
            // checking current row for around squares
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                    if (i > 0) {
                        if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                            cell.dataset.around = true;
                        }
                    };
                    if (i < 9) {
                        if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                            cell.dataset.around = true;
                        }
                    }
                }
            };
            // checking above row for around squares
            if (y - 1 > 10) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 12][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
            // checking below row for around squares
            if (y + 1 < 21) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 10][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
        } else if (gameboard.board[y - 11][x - 1].boat.direction == "horizontal") {
            // displaying sunk ship
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`);
                    cell.dataset.sunk = true;
                }
            };
            // checking current row for around squares
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                    if (i > 0) {
                        if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                            cell.dataset.around = true;
                        }
                    };
                    if (i < 9) {
                        if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                            cell.dataset.around = true;
                        }
                    }
                }
            };
            // checking above row for around squares
            if (y - 1 > 10) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 12][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
            // checking below row for around squares
            if (y + 1 < 21) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 10][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
        } else if (gameboard.board[y - 11][x - 1].boat.direction == "vertical") {
            // displaying sunk ship
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                    const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`);
                    cell.dataset.sunk = true;
                }
            };
            // checking current column for around squares
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                    if (i > 0) {
                        if (gameboard.board[i - 1][x - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`);
                            cell.dataset.around = true;
                        }
                    };
                    if (i < 9) {
                        if (gameboard.board[i + 1][x - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`);
                            cell.dataset.around = true;
                        }
                    }
                }
            };
            // checking before column for around squares
            if (x - 1 > 0) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true") && gameboard.board[i][x - 2].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x - 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
            // checking after column for around squares
            if (x + 1 < 11) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true") && gameboard.board[i][x].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            }
        }
    };
};

function gameIsOver(message) {
    const result = document.querySelector(".result");
    result.textContent = `${message}`;
    result.style.display = "block";
};

export { createBoard, displayShip, addEvents, getAttackedByComputer };