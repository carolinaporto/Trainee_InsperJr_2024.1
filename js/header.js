document.addEventListener('DOMContentLoaded', (event) => {
    menu = document.getElementById('menu');
    menu.addEventListener('click', function () {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    });
});