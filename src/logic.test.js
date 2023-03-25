import { Ship, Gameboard, Player } from "./logic";

// Testing Ship Class
test('hit function increases damage', () => {
    let ship = new Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.damage).toBe(2);
});

test('ship(4) is not sunk after 2 hits', () => {
    let ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(false);
});

test('ship(2) is sunk after 2 hits', () => {
    let ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(true);
});


// Testing Gameboard Class
// Gameboard Class placeship() method
// delete the next 2 tests if I add limit on input
test('cannot place a ship outside of the gameboard (y)', () => {
    let b = new Gameboard();
    expect(() => b.placeShip(8, 21, 4, "horizontal")).toThrow(/outside/);
});

test('cannot place a ship outside of the gameboard (x)', () => {
    let b = new Gameboard();
    expect(() => b.placeShip(11, 15, 4, "horizontal")).toThrow(/outside/);
});

test('cannot place 2 4-square ships', () => {
    let b = new Gameboard();
    b.placeShip(1, 11, 4, "horizontal");
    expect(() => b.placeShip(4, 16, 4, "vertical")).toThrow(/size/);
});

test('cannot place a ship on another ship', () => {
    let b = new Gameboard();
    b.placeShip(1, 17, 4, "horizontal");
    expect(() => b.placeShip(4, 15, 3, "vertical")).toThrow(/overlap/);
});

test('cannot place a ship near another ship', () => {
    let b = new Gameboard();
    b.placeShip(6, 16, 3, "vertical");
    expect(() => b.placeShip(4, 19, 2, "horizontal")).toThrow(/overlap/);
});

test('a ship cannot go overboard (horizontal)', () => {
    let b = new Gameboard();
    expect(() => b.placeShip(9, 13, 3, "horizontal")).toThrow(/fit/);
});

test('a ship cannot go overboard (vertical)', () => {
    let b = new Gameboard();
    expect(() => b.placeShip(8, 18, 4, "vertical")).toThrow(/fit/);
});

test('pushes new ships into ships array', () => {
    let b = new Gameboard();
    b.placeShip(6, 16, 3, "vertical");
    b.placeShip(10, 11, 2, "vertical");
    b.placeShip(2, 12, 1, "horizontal");
    expect(b.ships.length).toBe(3);
});

test('stores the ship in its squares', () => {
    let b = new Gameboard();
    b.placeShip(5, 15, 1, "horizontal");
    expect(b.board[4][4].boat.length).toBe(1);
});

// Gameboard Class receiveAttack() method
test('cannot attack the square that has been already attacked', () => {
    let b = new Gameboard();
    b.receiveAttack(3, 13);
    expect(() => b.receiveAttack(3, 13)).toThrow(/already/);
});

test('missedAttack property changes to true after missed attack', () => {
    let b = new Gameboard();
    b.placeShip(5, 15, 1, "horizontal");
    b.receiveAttack(3, 13);
    expect(b.board[2][2].missedAttack).toBe(true);
});

test('2 successful attacks damage ship (-2)', () => {
    let b = new Gameboard();
    b.placeShip(5, 15, 3, "vertical");
    b.receiveAttack(5, 16);
    b.receiveAttack(5, 17);
    expect(b.board[4][4].boat.damage).toBe(2);
});

test('2 successful attacks sink ship(2)', () => {
    let b = new Gameboard();
    b.placeShip(1, 20, 2, "horizontal");
    b.receiveAttack(1, 20);
    b.receiveAttack(2, 20);
    expect(b.board[9][0].boat.sunk).toBe(true);
});

test('3 successful attacks sink 2 ships(1+2), there are only 2 ships, game is over', () => {
    let b = new Gameboard();
    b.placeShip(1, 20, 2, "horizontal");
    b.placeShip(7, 14, 1, "horizontal");
    b.receiveAttack(1, 20);
    b.receiveAttack(2, 20);
    b.receiveAttack(7, 14);
    expect(b.gameOver).toBe(true);
});


// Testing Player Class
test('turns change after missed attack', () => {
    let playerBoard = new Gameboard();
    let computerBoard = new Gameboard();
    let player = new Player();
    let computer = new Player();
    playerBoard.placeShip(1, 20, 2, "horizontal");
    computerBoard.placeShip(9, 11, 2, "horizontal");
    player.turn = true;
    computerBoard.receiveAttack(3, 17);
    player.changeTurns(3, 17, computerBoard, computer);
    expect(computer.turn).toBe(true);
    // or
    // expect(player.myTurn).toBe(false);
});

test('turns do not change after successful attack', () => {
    let playerBoard = new Gameboard();
    let computerBoard = new Gameboard();
    let player = new Player();
    let computer = new Player();
    playerBoard.placeShip(1, 20, 2, "horizontal");
    computerBoard.placeShip(9, 11, 2, "horizontal");
    player.turn = true;
    computerBoard.receiveAttack(10, 11);
    player.changeTurns(10, 11, computerBoard, computer);
    expect(player.turn).toBe(true);
});







