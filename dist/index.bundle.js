(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["index"],{

/***/ "./src/asset/battleship.png":
/*!**********************************!*\
  !*** ./src/asset/battleship.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/asset/battleship.png";

/***/ }),

/***/ "./src/asset/imageslider.png":
/*!***********************************!*\
  !*** ./src/asset/imageslider.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/asset/imageslider.png";

/***/ }),

/***/ "./src/asset/tictactoe.png":
/*!*********************************!*\
  !*** ./src/asset/tictactoe.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/asset/tictactoe.png";

/***/ }),

/***/ "./src/asset/weather.png":
/*!*******************************!*\
  !*** ./src/asset/weather.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/asset/weather.png";

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__(/*! ./style.css */ "./src/style.css");
__webpack_require__(/*! ./asset/SometypeMono-VariableFont_wght.ttf */ "./src/asset/SometypeMono-VariableFont_wght.ttf");
const navClickEvents = __webpack_require__(/*! ./navClickEvents */ "./src/navClickEvents.js");
const pointerEvents = __webpack_require__(/*! ./pointerEvents */ "./src/pointerEvents.js");
const projectClickEvents = __webpack_require__(/*! ./projectClickEvents */ "./src/projectClickEvents.js");
const loadImages = __webpack_require__(/*! ./loadImages */ "./src/loadImages.js")

navClickEvents();
pointerEvents();
projectClickEvents();
loadImages()

/***/ }),

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const weatherApp = __webpack_require__(/*! ./asset/weather.png */ "./src/asset/weather.png");
const imageslider = __webpack_require__(/*! ./asset/imageslider.png */ "./src/asset/imageslider.png");
const tictactoe = __webpack_require__(/*! ./asset/tictactoe.png */ "./src/asset/tictactoe.png");
const battleship = __webpack_require__(/*! ./asset/battleship.png */ "./src/asset/battleship.png")

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

/***/ }),

/***/ "./src/navClickEvents.js":
/*!*******************************!*\
  !*** ./src/navClickEvents.js ***!
  \*******************************/
/***/ ((module) => {


const navClickEvents = () => {
    const arrow = document.querySelector(".arrow");
    const home = document.querySelector(".home");
    const resume = document.querySelector(".resume");
    const projects = document.querySelector(".projects");
    const contacts = document.querySelector(".contacts");


    arrow.addEventListener("click", goToNav);
    home.addEventListener("click", goToHome);
    resume.addEventListener("click",goToNav);
    projects.addEventListener("click", goToProjects);
    contacts.addEventListener("click", goToContacts);
    
}

const goToNav = (e) => {
    const about = document.querySelector("#main");
    about.scrollIntoView({ behavior: 'smooth'});
}

const goToHome = (e) => {
    const header = document.querySelector("#header");
    header.scrollIntoView({behavior: 'smooth'});
}

const goToProjects = (e) => {
    const projectsBoard = document.querySelector("#projects");
    projectsBoard.scrollIntoView({ behavior: 'smooth'})
}

const goToContacts = (e) => {
    const contactsBoard = document.querySelector("#contacts");
    contactsBoard.scrollIntoView({ behavior: 'smooth'})
}
module.exports = navClickEvents;

/***/ }),

/***/ "./src/pointerEvents.js":
/*!******************************!*\
  !*** ./src/pointerEvents.js ***!
  \******************************/
/***/ ((module) => {

const pointerEvents = () => {
    const projectsCards = document.querySelectorAll(".projectsCards");

    [...projectsCards].map(project => {
        project.addEventListener("mousemove", moveContainer);
        project.addEventListener("click",exit);
    });

}

module.exports = pointerEvents;


const moveContainer = (e) => {
    const cardContainer = document.querySelector(".projectsCards.visible");
    const pointerContainer = cardContainer.querySelector(".pointerContainer");    

    pointerContainer.classList.add("show");
    pointerContainer.style.left = e.x - 40;
    pointerContainer.style.top = e.y -20;
}

const exit = (e) =>{
    const cardContainer = document.querySelector(".projectsCards.visible");
    cardContainer.classList.remove("visible");
    cardContainer.classList.add("noVisible");

    const pointerContainer = cardContainer.querySelector(".pointerContainer");
    pointerContainer.classList.remove("show");

    const body = document.querySelector("body");
    body.style.overflowY= "scroll";
}

/***/ }),

/***/ "./src/projectClickEvents.js":
/*!***********************************!*\
  !*** ./src/projectClickEvents.js ***!
  \***********************************/
/***/ ((module) => {

const projectClickEvents = () => {
    const projects = document.querySelectorAll(".project");
    const projectsCards = document.querySelector(".projectsCards");

    //console.log(projects);
    [...projects].map((project) => {
       // console.log(project);
        project.addEventListener("click",visible);
    })

}

module.exports = projectClickEvents;

const visible = (e) => {
    console.log(e.target.id.toLowerCase())
    const id = e.target.id;
    const projectsBoard = document.querySelector("#projects");
    projectsBoard.scrollIntoView({ behavior: 'smooth'})
    //e.target.id
    const card = document.querySelector(`#${id.toLowerCase()+"Card"}`);
    card.classList.add("visible");
    card.classList.remove("noVisible");

    const body = document.querySelector("body");
    body.style.overflowY= "hidden";

    const pointerContainer = card.querySelector(".pointerContainer");
    pointerContainer.classList.add("show");
    pointerContainer.style.left = e.x - 40;
    pointerContainer.style.top = e.y -20;

}

/***/ }),

/***/ "./src/asset/SometypeMono-VariableFont_wght.ttf":
/*!******************************************************!*\
  !*** ./src/asset/SometypeMono-VariableFont_wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d04a24772c5b1509f43a.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsaUJBQWlCLHFCQUF1Qjs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCOzs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUI7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1Qjs7Ozs7Ozs7Ozs7O0FDQXhDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixtQkFBTyxDQUFDLGtHQUE0QztBQUNwRCx1QkFBdUIsbUJBQU8sQ0FBQyxpREFBa0I7QUFDakQsc0JBQXNCLG1CQUFPLENBQUMsK0NBQWlCO0FBQy9DLDJCQUEyQixtQkFBTyxDQUFDLHlEQUFzQjtBQUN6RCxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWEEsbUJBQW1CLG1CQUFPLENBQUMsb0RBQXFCO0FBQ2hELG9CQUFvQixtQkFBTyxDQUFDLDREQUF5QjtBQUNyRCxrQkFBa0IsbUJBQU8sQ0FBQyx3REFBdUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsMERBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0EsNENBQTRDLHdCQUF3QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXQvYmF0dGxlc2hpcC5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0L2ltYWdlc2xpZGVyLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXQvdGljdGFjdG9lLnBuZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXQvd2VhdGhlci5wbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvYWRJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL25hdkNsaWNrRXZlbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9wb2ludGVyRXZlbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9wcm9qZWN0Q2xpY2tFdmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0L2JhdHRsZXNoaXAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0L2ltYWdlc2xpZGVyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hc3NldC90aWN0YWN0b2UucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2Fzc2V0L3dlYXRoZXIucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXHJcbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxucmVxdWlyZShcIi4vYXNzZXQvU29tZXR5cGVNb25vLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiKTtcclxuY29uc3QgbmF2Q2xpY2tFdmVudHMgPSByZXF1aXJlKFwiLi9uYXZDbGlja0V2ZW50c1wiKTtcclxuY29uc3QgcG9pbnRlckV2ZW50cyA9IHJlcXVpcmUoXCIuL3BvaW50ZXJFdmVudHNcIik7XHJcbmNvbnN0IHByb2plY3RDbGlja0V2ZW50cyA9IHJlcXVpcmUoXCIuL3Byb2plY3RDbGlja0V2ZW50c1wiKTtcclxuY29uc3QgbG9hZEltYWdlcyA9IHJlcXVpcmUoXCIuL2xvYWRJbWFnZXNcIilcclxuXHJcbm5hdkNsaWNrRXZlbnRzKCk7XHJcbnBvaW50ZXJFdmVudHMoKTtcclxucHJvamVjdENsaWNrRXZlbnRzKCk7XHJcbmxvYWRJbWFnZXMoKSIsImNvbnN0IHdlYXRoZXJBcHAgPSByZXF1aXJlKFwiLi9hc3NldC93ZWF0aGVyLnBuZ1wiKTtcclxuY29uc3QgaW1hZ2VzbGlkZXIgPSByZXF1aXJlKFwiLi9hc3NldC9pbWFnZXNsaWRlci5wbmdcIik7XHJcbmNvbnN0IHRpY3RhY3RvZSA9IHJlcXVpcmUoXCIuL2Fzc2V0L3RpY3RhY3RvZS5wbmdcIik7XHJcbmNvbnN0IGJhdHRsZXNoaXAgPSByZXF1aXJlKFwiLi9hc3NldC9iYXR0bGVzaGlwLnBuZ1wiKVxyXG5cclxuY29uc3QgbG9hZEltYWdlcyA9ICgpID0+IHtcclxuICAgIC8vd2VhdGhlciBhcHBcclxuICAgIGNvbnN0IHdlYXRoZXJJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckltYWdlXCIpOyAgICBcclxuICAgIGNvbnN0IHdlYXRoZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2VhdGhlckltYWdlLnNyYyA9IHdlYXRoZXJBcHA7XHJcbiAgICB3ZWF0aGVySW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckltYWdlKTtcclxuXHJcblxyXG4gICAgLy9pbWFnZSBzbGlkZXJcclxuICAgIGNvbnN0IGltYWdlc2xpZGVySW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlc2xpZGVySW1hZ2VcIik7ICAgIFxyXG4gICAgY29uc3QgaW1hZ2VzbGlkZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2VzbGlkZXJJbWFnZS5zcmMgPSBpbWFnZXNsaWRlcjtcclxuICAgIGltYWdlc2xpZGVySW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzbGlkZXJJbWFnZSk7XHJcblxyXG4gICAgLy8gdGljIHRhYyB0b2VcclxuICAgIGNvbnN0IHRpY3RhY3RvZUltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aWN0YWN0b2VJbWFnZVwiKTsgICAgXHJcbiAgICBjb25zdCB0aWN0YWN0b2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGljdGFjdG9lSW1hZ2Uuc3JjID0gdGljdGFjdG9lO1xyXG4gICAgdGljdGFjdG9lSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGljdGFjdG9lSW1hZ2UpO1xyXG5cclxuICAgIC8vYmF0dGxlc2hpcFxyXG4gICAgY29uc3QgYmF0dGxlc2hpcEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVzaGlwSW1hZ2VcIik7ICAgIFxyXG4gICAgY29uc3QgYmF0dGxlc2hpcEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBiYXR0bGVzaGlwSW1hZ2Uuc3JjID0gYmF0dGxlc2hpcDtcclxuICAgIGJhdHRsZXNoaXBJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVzaGlwSW1hZ2UpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRJbWFnZXM7IiwiXHJcbmNvbnN0IG5hdkNsaWNrRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuICAgIGNvbnN0IHJlc3VtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdW1lXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xyXG4gICAgY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RzXCIpO1xyXG5cclxuXHJcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29Ub05hdik7XHJcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1RvSG9tZSk7XHJcbiAgICByZXN1bWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZ29Ub05hdik7XHJcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29Ub1Byb2plY3RzKTtcclxuICAgIGNvbnRhY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1RvQ29udGFjdHMpO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGdvVG9OYXYgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XHJcbiAgICBhYm91dC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG59XHJcblxyXG5jb25zdCBnb1RvSG9tZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcclxuICAgIGhlYWRlci5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnfSk7XHJcbn1cclxuXHJcbmNvbnN0IGdvVG9Qcm9qZWN0cyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuICAgIHByb2plY3RzQm9hcmQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG59XHJcblxyXG5jb25zdCBnb1RvQ29udGFjdHMgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdHNCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdHNcIik7XHJcbiAgICBjb250YWN0c0JvYXJkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IG5hdkNsaWNrRXZlbnRzOyIsImNvbnN0IHBvaW50ZXJFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0c0NhcmRzXCIpO1xyXG5cclxuICAgIFsuLi5wcm9qZWN0c0NhcmRzXS5tYXAocHJvamVjdCA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVDb250YWluZXIpO1xyXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZXhpdCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcG9pbnRlckV2ZW50cztcclxuXHJcblxyXG5jb25zdCBtb3ZlQ29udGFpbmVyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzQ2FyZHMudmlzaWJsZVwiKTtcclxuICAgIGNvbnN0IHBvaW50ZXJDb250YWluZXIgPSBjYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucG9pbnRlckNvbnRhaW5lclwiKTsgICAgXHJcblxyXG4gICAgcG9pbnRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgIHBvaW50ZXJDb250YWluZXIuc3R5bGUubGVmdCA9IGUueCAtIDQwO1xyXG4gICAgcG9pbnRlckNvbnRhaW5lci5zdHlsZS50b3AgPSBlLnkgLTIwO1xyXG59XHJcblxyXG5jb25zdCBleGl0ID0gKGUpID0+e1xyXG4gICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNDYXJkcy52aXNpYmxlXCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcclxuICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vVmlzaWJsZVwiKTtcclxuXHJcbiAgICBjb25zdCBwb2ludGVyQ29udGFpbmVyID0gY2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBvaW50ZXJDb250YWluZXJcIik7XHJcbiAgICBwb2ludGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcInNjcm9sbFwiO1xyXG59IiwiY29uc3QgcHJvamVjdENsaWNrRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0c0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0NhcmRzXCIpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgWy4uLnByb2plY3RzXS5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdmlzaWJsZSk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwcm9qZWN0Q2xpY2tFdmVudHM7XHJcblxyXG5jb25zdCB2aXNpYmxlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkLnRvTG93ZXJDYXNlKCkpXHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgY29uc3QgcHJvamVjdHNCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcbiAgICBwcm9qZWN0c0JvYXJkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICAgIC8vZS50YXJnZXQuaWRcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZC50b0xvd2VyQ2FzZSgpK1wiQ2FyZFwifWApO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIm5vVmlzaWJsZVwiKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93WT0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBjb25zdCBwb2ludGVyQ29udGFpbmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBvaW50ZXJDb250YWluZXJcIik7XHJcbiAgICBwb2ludGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgcG9pbnRlckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gZS54IC0gNDA7XHJcbiAgICBwb2ludGVyQ29udGFpbmVyLnN0eWxlLnRvcCA9IGUueSAtMjA7XHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9