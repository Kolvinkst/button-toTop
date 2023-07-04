let button = document.getElementById("toTopArrow");
let scrolled = 0;

window.addEventListener("scroll", () => {
    scrolled = window.pageYOffset;

    if (scrolled > 500) {
        button.style.visibility = "visible";
    }
    else if (scrolled < 500) {
        button.style.visibility = "hidden";
    }
});

function returnToTop() {
    document.documentElement.scrollTop = 0;
}