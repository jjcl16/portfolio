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