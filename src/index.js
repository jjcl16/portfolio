
require("./style.css");
require("./asset/SometypeMono-VariableFont_wght.ttf");
const navClickEvents = require("./navClickEvents");
const pointerEvents = require("./pointerEvents");
const projectClickEvents = require("./projectClickEvents");
const loadImages = require("./loadImages")

navClickEvents();
pointerEvents();
projectClickEvents();
loadImages()