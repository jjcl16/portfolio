const weatherApp = require("./asset/weather.png");
const imageslider = require("./asset/imageslider.png");
const tictactoe = require("./asset/tictactoe.png");
const battleship = require("./asset/battleship.png")

const loadImages = () => {
    //weather app
    const weatherImageContainer = document.querySelector("#weatherImage");    
    const weatherImage = new Image();
    weatherImage.src = weatherApp;
    weatherImageContainer.appendChild(weatherImage);


    //image slider
    const imagesliderImageContainer = document.querySelector("#imagesliderImage");    
    const imagesliderImage = new Image();
    imagesliderImage.src = imageslider;
    imagesliderImageContainer.appendChild(imagesliderImage);

    // tic tac toe
    const tictactoeImageContainer = document.querySelector("#tictactoeImage");    
    const tictactoeImage = new Image();
    tictactoeImage.src = tictactoe;
    tictactoeImageContainer.appendChild(tictactoeImage);

    //battleship
    const battleshipImageContainer = document.querySelector("#battleshipImage");    
    const battleshipImage = new Image();
    battleshipImage.src = battleship;
    battleshipImageContainer.appendChild(battleshipImage);
}

module.exports = loadImages;