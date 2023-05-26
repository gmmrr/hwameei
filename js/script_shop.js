//-------------------- general ---------------------//
var first_time = 1;
var first_time_hamburger_icon = 1;
function show_hamburger_content() {
    var hamburger_content = document.getElementById("hamburger_content");
    var hamburger_content_shadow = document.getElementById("hamburger_content_shadow");
    var displaying = hamburger_content.style.display === "none";
    if (displaying) {
        hamburger_content.style.display = "block";
        hamburger_content_shadow.style.display = "block";
    } else {
        hamburger_content.style.display = "none";
        hamburger_content_shadow.style.display = "none";
    }

    if (first_time_hamburger_icon) {
        hamburger_content.style.display = "block";
        hamburger_content_shadow.style.display = "block";
        first_time_hamburger_icon = !first_time_hamburger_icon;
    }
}

function check_login() {
    if (localStorage.getItem("account") != null && localStorage.getItem("password") != null) {
        login_logout_switching();
    }
}
check_login();

function to_logout() {
    localStorage.removeItem("account");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/index.html";
}

function login_logout_switching() {
    let login_block = document.getElementById("hamburger_element_login");
    let logout_block = document.getElementById("hamburger_element_logout");

    if (login_block.style.display === "flex" || login_block.style.display === "") {
        login_block.style.display = "none";
        logout_block.style.display = "flex";
    } else {
        login_block.style.display = "flex";
        logout_block.style.display = "none";
    }
}
//--------------------------------------------------//

//--------------- homepage switching ---------------//
var first_time_homepage_switching = 1;
let homepage_switching = anime({
    targets: "#slide",
    // scale: "1.02",
    opacity: ["0.7", "1"],
    easing: "easeOutSine",
    duration: "2000",
    endDelay: "3000",
});
var homepage_index = 1;
function homepage_change() {
    pic = document.getElementById("slide");
    pic.style.backgroundImage = `url("src/shop_backgnd${homepage_index}.png")`;
    if (!first_time_homepage_switching) {
        homepage_switching.restart();
    }

    if (homepage_index >= 3) {
        homepage_index = 1;
    } else {
        homepage_index++;
    }
    first_time_homepage_switching = 0;
}
setInterval(homepage_change, 5000);
//--------------------------------------------------//
