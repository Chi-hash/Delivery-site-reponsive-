// opening and closing sidebar

const opensidebar = document.querySelector(".menubutton");
const sidebar = document.querySelector(".sidebar");
const closesidebar = document.querySelector(".menubutton2");

opensidebar.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});

if (closesidebar) {
    closesidebar.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });
}


document.addEventListener("click", function (e) {
    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !(opensidebar && opensidebar.contains(e.target))
    ) {
        sidebar.classList.remove("active");
    }
});




