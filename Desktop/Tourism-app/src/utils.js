export function handleSectionClick(id) {
    const element = document.getElementById(id);
    if (element) {
        removeBorders();
        element.style.border = "2px solid whitesmoke";
        element.style.borderRadius = "20px";
    }
}

export function handleAboutMouseOver() {
    const aboutQuad = document.getElementById("about-quad");
    if (aboutQuad) {
        aboutQuad.style.top = "70%";
        aboutQuad.style.opacity = "1";
    }
}

export function handleInputChange() {
    document.body.classList.toggle("blue");
}

export function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox");
    const body = document.body;
    if (checkbox) {
        body.classList.toggle("dark", checkbox.checked);
        localStorage.setItem("tourism_website_darkmode", checkbox.checked);
    }
}

export function scrollFunction() {
    let mybutton = document.getElementById("upbtn");
    if (mybutton) {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

export function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export function updateNavbar() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
    const screenWidth = window.screen.width;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (screenWidth <= 425 && rect.top <= 1300) {
            setActiveNav(navLinks, index);
        } else if (425 <= screenWidth && screenWidth <= 768 && rect.top <= 1250) {
            setActiveNav(navLinks, index);
        } else if (screenWidth > 768 && rect.top <= 1000) {
            setActiveNav(navLinks, index);
        }
    });
}

function removeBorders() {
    const elements = document.querySelectorAll(".cir_border");
    elements.forEach(element => {
        element.style.border = "none";
    });
}

function setActiveNav(navLinks, index) {
    navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
    });
    navLinks[index].classList.add("active");
}
