function clickMenu() {
    var menuList = document.getElementById("menu-list");
    var burguerButton = document.querySelector(".menu-container i#burguer") || document.querySelector(".menu-container2 i#burguer");

    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
        var rect = burguerButton.getBoundingClientRect();
        menuList.style.position = 'absolute';
        menuList.style.top = rect.bottom + "px";
        menuList.style.left = rect.left + "px";
    }
}

window.addEventListener('scroll', function() {
    var menuContainer1 = document.getElementById('menu-container1');
    var menuContainer2 = document.getElementById('menu-container2');
    var headerTitle1 = document.getElementById('header-title1');

    if (window.scrollY > 1) { // Ajuste este valor conforme necessário
        menuContainer1.style.display = 'none';
        menuContainer2.style.display = 'flex';
        menuContainer2.style.position = 'fixed';
        menuContainer2.style.top = '0';
        menuContainer2.style.left = '0';
        menuContainer2.style.right = '0';
        headerTitle1.style.display = 'none';
    } else {
        menuContainer1.style.display = 'flex';
        menuContainer2.style.display = 'none';
        menuContainer2.style.position = 'static';
        headerTitle1.style.display = 'block';
    }
});

