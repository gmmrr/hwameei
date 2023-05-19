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
//--------------------------------------------------//

//---------------- change_function -----------------//
function function_switching() {
    var login_function = document.getElementById("login_function");
    var signup_function = document.getElementById("signup_function");

    if (login_function.style.display == "block" || login_function.style.display == "") {
        login_function.style.display = "none";
        signup_function.style.display = "block";
    } else {
        login_function.style.display = "block";
        signup_function.style.display = "none";
    }
}
//--------------------------------------------------//

function login_password_visible() {
    var password = document.getElementById("login_password");
    var button = document.getElementById("login_password_visible_button");

    if (password.type == "password") {
        password.setAttribute("type", "text");
        button.style.backgroundImage = 'url("../src/password_visible.png")';
    } else {
        password.setAttribute("type", "password");
        button.style.backgroundImage = 'url("../src/password_invisible.png")';
    }
}

function signup_password_visible() {
    var password = document.getElementsByClassName("signup_password");
    var button = document.getElementsByClassName("signup_password_visible_button");

    if (password[0].type == "password" && password[1].type == "password") {
        password[0].setAttribute("type", "text");
        password[1].setAttribute("type", "text");
        button[0].style.backgroundImage = 'url("../src/password_visible.png")';
        button[1].style.backgroundImage = 'url("../src/password_visible.png")';
    } else {
        password[0].setAttribute("type", "password");
        password[1].setAttribute("type", "password");
        button[0].style.backgroundImage = 'url("../src/password_invisible.png")';
        button[1].style.backgroundImage = 'url("../src/password_invisible.png")';
    }
}

//-------------------- backend ----------------------//
document.addEventListener("DOMContentLoaded", function () {
    var login_button = document.getElementById("login_button");
    var login_account = document.querySelector("#login_form input[name=account]");
    var login_password = document.querySelector("#login_form input[name=password]");

    login_button.addEventListener("click", function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/login/login", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";

        xhr.onload = function () {
            if (xhr.status === 200) {
                var data = xhr.response;
                console.log(data);
            } else {
                console.log("request failed");
            }
        };

        xhr.onerror = function () {
            console.log("request error");
        };

        const requestData = {
            account: login_account.value,
            password: login_password.value,
        };

        xhr.send(JSON.stringify(requestData));
    });

    var signup_button = document.getElementById("signup_button");
    var signup_account = document.querySelector("#signup_form input[name=account]");
    var signup_password = document.querySelector("#signup_form input[name=password]");
    var signup_password_again = document.querySelector("#signup_form input[name=password_again]");

    signup_button.addEventListener("click", function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/login/signup", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "text";

        xhr.onload = function () {
            if (xhr.status === 200) {
                var data = xhr.response;
                console.log(data);
                if (data === "incorresponding password") {
                    var minder = document.getElementById("password_incorresponding_minder");
                    minder.innerHTML = `<p>輸入密碼不相符</p>`;
                }
            } else {
                console.log("request failed");
            }
        };

        xhr.onerror = function () {
            console.log("request error");
        };

        var requestData = {
            account: signup_account.value,
            password: signup_password.value,
            password_again: signup_password_again.value,
        };

        xhr.send(JSON.stringify(requestData));
    });
});
//--------------------------------------------------//
