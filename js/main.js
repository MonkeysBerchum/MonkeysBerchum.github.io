/* This function lets the Menu-button transform into an "X" after cicking it */

function transformX(x) {
    x.classList.toggle("change");
}


/* This function changese the display (none/block) from the menu */
function openMenu() {
    var custDiv = document.getElementById("sidebar-content");
    if (custDiv.style.display === "block") {
        custDiv.style.display = "none";
    } else {
        custDiv.style.display = "block";
    }
}
