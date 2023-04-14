window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar")
    var scrollPos = window.scrollY

    if (scrollPos > 50) {
        navbar.style.top = "0"
        navbar.style.backgroundColor = "var(--green)"
        navbar.style.transition = "0.5s ease-in-out";
        navbar.style.transition = "background-color 0.3s ease-in-out";
    }
    else {
        navbar.style.top = "50px"
        navbar.style.backgroundColor = "transparent";  
        navbar.style.transition = "0.5s ease-in-out";
        navbar.style.transition = "background-color 0.3s ease-in-out";     
    }
});  

// SPLIDE SLIDE JS 

var splide = new Splide( '.splide', {
    perPage: 3,
    perMove: 1,
    omitEnd: true,
    gap: "50px",
    pagination: false,
    breakpoints: {
        576: {
            perPage: 1,
        }
    }
} );

splide.mount();