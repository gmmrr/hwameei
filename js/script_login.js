//-------------------- general ---------------------//
var first_time = 1;
var first_time_hamburger_icon = 1;
function show_hamburger_content() {
    var hamburger_content = document.getElementById("hamburger_content");
    var hamburger_content_shadow = document.getElementById("hamburger_content_shadow");
    var displaying = (hamburger_content.style.display === "none")
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
    login_function = document.getElementById("login_function");
    signup_function = document.getElementById("signup_function");

    if(login_function.style.display == "block" || login_function.style.display == "") {
        login_function.style.display = "none";
        signup_function.style.display = "block";
        console.log("change_to_signup");
    }
    else {
        login_function.style.display = "block";
        signup_function.style.display = "none";
        console.log("change_to_login");
    }
}
//--------------------------------------------------//





//-------------------- backend ----------------------//
document.addEventListener('DOMContentLoaded', function () {

    var login_button = document.getElementById('login_button');
    var signup_button = document.getElementById('signup_button');

    var login_account = document.querySelector('#login_form input[name=account]');
    var login_password = document.querySelector('#login_form input[name=password]');
    var signup_account = document.querySelector('#signup_form input[name=account]');
    var signup_password = document.querySelector('#signup_form input[name=password]');
    var signup_password_again = document.querySelector('#signup_form input[name=password_again]');


    login_button.addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/login/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';

        xhr.onload = function() {
            if (xhr.status === 200) {
              var data = xhr.response;
              console.log(data);
            } else {
              console.log('request failed');
            }
        };
          
        xhr.onerror = function() {
            console.log('request error');
        };

        const requestData = {
            account: login_account.value,
            password: login_password.value
        };
          
        xhr.send(JSON.stringify(requestData));
    });

    signup_button.addEventListener('click', function (event) {
        event.preventDefault()

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/login/signup', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';

        xhr.onload = function() {
            if (xhr.status === 200) {
              var data = xhr.response;
              console.log(data);
            } else {
              console.log('request failed');
            }
        };
          
        xhr.onerror = function() {
            console.log('request error');
        };

        var requestData = {
            account: signup_account.value,
            password: signup_password.value,
            password_again: signup_password_again.value
        };
          
        xhr.send(JSON.stringify(requestData));
    });
});
//--------------------------------------------------//
