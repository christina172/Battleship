class Ship {
    constructor(length, direction) {
        this.length = length;
        this.direction = direction;
        this.damage = 0;
        this.sunk = false;
    }
    hit() {
        this.damage = this.damage + 1;
        return this.damage;
    }
    isSunk() {
        if (this.length > this.damage) {
            this.sunk = false;
        } else {
            this.sunk = true;
        };
        return this.sunk;
    }
};

class Gameboard {
    constructor() {
        this.board = this.#buildBoard();
        this.ships = [];
        this.gameOver = false;
    }
    #buildBoard() {
        const board = [];
        for (let i = 11; i < 21; i++) {
            const row = [];
            board.push(row);
            for (let j = 1; j < 11; j++) {
                row.push(new Square(j, i));
            }
        }
        return board;
    }
    placeShip(a, b, length, direction) {
        let x = a - 1;
        let y = b - 11;

        const startSquare = this.board[y][x];
        if (startSquare.canPlaceShip == false || startSquare.hasShip == true) {
            throw new Error("You can't place your new ship here. Ships can't overlap and must be at least one square apart from each other.")
        };

        let n = 0;
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].length == length) {
                n++;
            };
        };
        if ((length == 1 && n == 4) || (length == 2 && n == 3) || (length == 3 && n == 2) || (length == 4 && n == 1)) {
            throw new Error("You can't place another ship of this size. Please, change the length of your ship.");
        };

        let before = x - 1;
        let after = x + 1;

        let after2 = x + 2;
        let after3 = x + 3;
        let after4 = x + 4;

        let above = y - 1;
        let below = y + 1;

        let below2 = y + 2;
        let below3 = y + 3;
        let below4 = y + 4;

        if (direction == "horizontal") {
            if ((length == 2 && (after < 0 || after > 9)) || (length == 3 && (after2 < 0 || after2 > 9)) || (length == 4 && (after3 < 0 || after3 > 9))) {
                throw new Error("You can't place a ship like that. It doesn't fit the board. Please, choose another location.");
            };
            if ((length == 2 && this.board[y][after].canPlaceShip == false) || (length == 3 && (this.board[y][after].canPlaceShip == false || this.board[y][after2].canPlaceShip == false)) || (length == 4 && (this.board[y][after].canPlaceShip == false || this.board[y][after2].canPlaceShip == false || this.board[y][after3].canPlaceShip == false))) {
                throw new Error("You can't place a ship like that. It can't overlap other ships and must be at least one square apart from other ships. Please, choose another location.");
            };
        };

        if (direction == "vertical") {
            if ((length == 2 && (below < 0 || below > 9)) || (length == 3 && (below2 < 0 || below2 > 9)) || (length == 4 && (below3 < 0 || below3 > 9))) {
                throw new Error("Can't place a ship like that. It doesn't fit the board. Please, choose another location.");
            };
            if ((length == 2 && this.board[below][x].canPlaceShip == false) || (length == 3 && (this.board[below][x].canPlaceShip == false || this.board[below2][x].canPlaceShip == false)) || (length == 4 && (this.board[below][x].canPlaceShip == false || this.board[below2][x].canPlaceShip == false || this.board[below3][x].canPlaceShip == false))) {
                throw new Error("You can't place a ship like that. It can't overlap other ships and must be at least one square apart from other ships. Please, choose another location.");
            };
        };

        let ship = new Ship(length, direction);

        this.ships.push(ship);

        startSquare.boat = ship;
        startSquare.hasShip = true;

        if (above >= 0 && above <= 9) {
            if (before >= 0 && before <= 9) {
                this.board[above][before].canPlaceShip = false;
            };
            if (after >= 0 && after <= 9) {
                this.board[above][after].canPlaceShip = false;
            };
            this.board[above][x].canPlaceShip = false;
        };
        if (before >= 0 && before <= 9) {
            this.board[y][before].canPlaceShip = false;
            if (below >= 0 && below <= 9) {
                this.board[below][before].canPlaceShip = false;
            };
        };


        if (length == 1) {
            if (after >= 0 && after <= 9) {
                this.board[y][after].canPlaceShip = false;
                if (below >= 0 && below <= 9) {
                    this.board[below][after].canPlaceShip = false;
                };
            };
            if (below >= 0 && below <= 9) {
                this.board[below][x].canPlaceShip = false;
            };
        };


        if (direction == "horizontal") {
            if (length == 2) {
                this.board[y][after].boat = ship;
                this.board[y][after].hasShip = true;
                if (after2 >= 0 && after2 <= 9) {
                    if (above >= 0 && above <= 9) {
                        this.board[above][after2].canPlaceShip = false;
                    };
                    this.board[y][after2].canPlaceShip = false;
                    if (below >= 0 && below <= 9) {
                        this.board[below][after2].canPlaceShip = false;
                    };
                };
                if (below >= 0 && below <= 9) {
                    this.board[below][after].canPlaceShip = false;
                    if (after2 >= 0 && after2 <= 9) {
                        this.board[below][after2].canPlaceShip = false;
                    };
                };
            } else if (length == 3) {
                this.board[y][after].boat = ship;
                this.board[y][after2].boat = ship;
                this.board[y][after].hasShip = true;
                this.board[y][after2].hasShip = true;
                if (below >= 0 && below <= 9) {
                    this.board[below][x].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below][after2].canPlaceShip = false;
                    if (after3 >= 0 && after3 <= 9) {
                        this.board[below][after3].canPlaceShip = false;
                    };
                };
                if (above >= 0 && above <= 9) {
                    this.board[above][after2].canPlaceShip = false;
                    if (after3 >= 0 && after3 <= 9) {
                        this.board[above][after3].canPlaceShip = false;
                    };
                };
                if (after3 >= 0 && after3 <= 9) {
                    this.board[y][after3].canPlaceShip = false;
                };
            } else if (length == 4) {
                this.board[y][after].boat = ship;
                this.board[y][after2].boat = ship;
                this.board[y][after3].boat = ship;
                this.board[y][after].hasShip = true;
                this.board[y][after2].hasShip = true;
                this.board[y][after3].hasShip = true;
                if (below >= 0 && below <= 9) {
                    this.board[below][x].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below][after2].canPlaceShip = false;
                    this.board[below][after3].canPlaceShip = false;
                    if (after4 >= 0 && after4 <= 9) {
                        this.board[below][after4].canPlaceShip = false;
                    };
                };
                if (above >= 0 && above <= 9) {
                    this.board[above][after2].canPlaceShip = false;
                    this.board[above][after3].canPlaceShip = false;
                    if (after4 >= 0 && after4 <= 9) {
                        this.board[above][after4].canPlaceShip = false;
                    };
                };
                if (after4 >= 0 && after4 <= 9) {
                    this.board[y][after4].canPlaceShip = false;
                };
            };
        } else {
            if (length == 2) {
                this.board[below][x].boat = ship;
                this.board[below][x].hasShip = true;
                if (below2 >= 0 && below2 <= 9) {
                    if (before >= 0 && before <= 9) {
                        this.board[below2][before].canPlaceShip = false;
                    };
                    this.board[below2][x].canPlaceShip = false;
                    if (after >= 0 && after <= 9) {
                        this.board[below2][after].canPlaceShip = false;
                    };
                };
                if (after >= 0 && after <= 9) {
                    this.board[y][after].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                };
            } else if (length == 3) {
                this.board[below][x].boat = ship;
                this.board[below2][x].boat = ship;
                this.board[below][x].hasShip = true;
                this.board[below2][x].hasShip = true;
                if (before >= 0 && before <= 9) {
                    this.board[below2][before].canPlaceShip = false;
                    if (below3 >= 0 && below3 <= 9) {
                        this.board[below3][before].canPlaceShip = false;
                    }
                };
                if (below3 >= 0 && below3 <= 9) {
                    this.board[below3][x].canPlaceShip = false;
                    if (after >= 0 && after <= 9) {
                        this.board[below3][after].canPlaceShip = false;
                    };
                };
                if (after >= 0 && after <= 9) {
                    this.board[y][after].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below2][after].canPlaceShip = false;
                };
            } else if (length == 4) {
                this.board[below][x].boat = ship;
                this.board[below2][x].boat = ship;
                this.board[below3][x].boat = ship;
                this.board[below][x].hasShip = true;
                this.board[below2][x].hasShip = true;
                this.board[below3][x].hasShip = true;
                if (before >= 0 && before <= 9) {
                    this.board[below2][before].canPlaceShip = false;
                    this.board[below3][before].canPlaceShip = false;
                    if (below4 >= 0 && below4 <= 9) {
                        this.board[below4][before].canPlaceShip = false;
                    }
                };
                if (below4 >= 0 && below4 <= 9) {
                    this.board[below4][x].canPlaceShip = false;
                    if (after >= 0 && after <= 9) {
                        this.board[below4][after].canPlaceShip = false;
                    };
                };
                if (after >= 0 && after <= 9) {
                    this.board[y][after].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below2][after].canPlaceShip = false;
                    this.board[below3][after].canPlaceShip = false;
                };
            };
        };
    };
    receiveAttack(a, b) {
        let x = a - 1;
        let y = b - 11;
        let attackedSquare = this.board[y][x];
        // if (attackedSquare.missedAttack == true || attackedSquare.successfulAttack == true) {
        //     throw new Error("This square has already been attacked");
        // };
        if (attackedSquare.hasShip == true) {
            attackedSquare.successfulAttack = true;
            attackedSquare.boat.hit();
            attackedSquare.boat.isSunk();
            this.allShipsAreSunk();
        } else {
            attackedSquare.missedAttack = true;
        };
    };
    allShipsAreSunk() {
        if (this.ships.every((element) => element.sunk == true)) {
            this.gameOver = true;
        };
    };
};

class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hasShip = false;
        this.canPlaceShip = true;
        this.missedAttack = false;
        this.successfulAttack = false;

        this.boat = undefined;
    }
};

class Player {
    constructor() {
        this.turn = false;
        this.computerChoices = this.#findChoices();
    }
    #findChoices() {
        let array = [];
        for (let i = 11; i < 21; i++) {
            for (let j = 1; j < 11; j++) {
                let choice = [i, j];
                array.push(choice);
            }
        };
        return array;
    }
    attackEnemy(enemyBoard, opponent) {
        let coordinates = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
        let a = coordinates[1];
        let b = coordinates[0];
        let index = this.computerChoices.indexOf(coordinates);
        this.computerChoices.splice(index, 1);
        enemyBoard.receiveAttack(a, b);
        this.changeTurns(a, b, enemyBoard, opponent);
        return [a, b];
    }
    changeTurns(a, b, enemyBoard, opponent) {
        let x = a - 1;
        let y = b - 11;
        if (enemyBoard.board[y][x].missedAttack == true) {
            this.turn = false;
            opponent.turn = true;
        };
    }
};

export { Ship, Gameboard, Square, Player };