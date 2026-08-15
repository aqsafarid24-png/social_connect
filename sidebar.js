const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebarMenu");
const overlay = document.getElementById("sidebarOverlay");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");

});

overlay.addEventListener("click", function () {

    sidebar.classList.remove("open");
    overlay.classList.remove("show");

});