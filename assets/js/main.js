window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar")
    var scrollPos = window.scrollY

    if (scrollPos > 50) {
        navbar.style.backgroundColor = "var(--green)"
        navbar.style.transition = "background-color 0.2s ease-in-out";
    }
    else {
        navbar.style.backgroundColor = "transparent";       
    }
});  