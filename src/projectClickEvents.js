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