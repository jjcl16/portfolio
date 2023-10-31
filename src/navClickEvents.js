
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