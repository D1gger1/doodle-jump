// board 
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = doodlerHeight * 7 / 8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
    img: null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}

//physics
let velocityX = 0;
let velocityY = 0;
let initialVelovityY = -5;
let gravity = 0.18;

//platforms
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;