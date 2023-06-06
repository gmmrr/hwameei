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

let button_chosen_array = new Array(21);
function get_tag() {
    document.addEventListener("DOMContentLoaded", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/recommended/gettag", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";

        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = xhr.response;
                button_chosen_array = data;
                console.log(button_chosen_array);
            } else {
                console.log("request failed");
            }
        };

        xhr.onerror = function () {
            console.log("request error");
        };

        xhr.send();
    });
}
get_tag();

function choose_three_items() {
    let item_chosen = new Array(3);
    for (let i = 0; i < 3; i++) {
        item_chosen[i] = i;
    }

    let item_similarity = new Array(12);
    for (let i = 0; i < 12; i++) {
        item_similarity[i] = 0;
    }

    let glasses_attribute = [
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    ];

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 21; j++) {
            if (glasses_attribute[i][j] == button_chosen_array[j]) {
                item_similarity[i] += 1;
            }
        }
    }

    console.log(item_similarity);

    let item_chosen_index = [];
    let sortedIndices = Array.from(item_similarity.keys()).sort((a, b) => item_similarity[b] - item_similarity[a]);
    let topThreeIndices = sortedIndices.slice(0, 3);

    for (let i = 0; i < topThreeIndices.length; i++) {
        item_chosen_index.push(item_similarity[topThreeIndices[i]]);
    }

    console.log(item_chosen_index);
}
choose_three_items();

let glasses_artemis = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
let glasses_caelum = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
let glasses_dogma_ocean = [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1];
let glasses_echo_black = [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
let glasses_kamikaze = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0];
let glasses_ode_ocean = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
let glasses_vseries_black = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
let glasses_vseries_pink = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
let glasses_vseries_planet_silver = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1];
let glasses_vseries_white = [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
let glasses_wi6970 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0];
