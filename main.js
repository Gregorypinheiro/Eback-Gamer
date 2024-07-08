function clickMenu() {
    var menuList = document.getElementById("menu-list");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

window.addEventListener("scroll", function() {
    var headerTitle = document.getElementById("header-title");
    var header = document.querySelector("header.container");
    if (window.scrollY > 0) {
        headerTitle.style.display = "none";
        header.style.paddingTop = "16px"; // Ajuste o valor conforme necessário
    } else {
        headerTitle.style.display = "block";
        header.style.paddingTop = "16px"; // Ajuste o valor conforme necessário
    }
});