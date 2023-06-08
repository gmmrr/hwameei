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
                show_chosen_tag();
                choose_three_items();
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
function show_chosen_tag() {
    let tag_name = [
        "流線型",
        "速度感",
        "時尚",
        "簡約",
        "復古",
        "前衛",
        "奢華",
        "貓眼",
        "黑",
        "白",
        "金",
        "銀",
        "米",
        "藍",
        "粉",
        "跑步",
        "騎行",
        "鐵人三項",
        "室內",
        "閱讀",
        "休閒",
    ];
    for (let i = 0; i < 21; i++) {
        if (button_chosen_array[i] == true) {
            console.log(tag_name[i]);
            document.getElementById("button_chosen").innerHTML +=
                '<div class= "button_chosen_element">' + tag_name[i] + "</div>";
        }
    }
}
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
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    ];

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 21; j++) {
            if (glasses_attribute[i][j] == button_chosen_array[j]) {
                item_similarity[i] += 1;
            }
        }
    }

    let item_chosen_index = [];
    let sortedIndices = Array.from(item_similarity.keys()).sort((a, b) => item_similarity[b] - item_similarity[a]);
    let topThreeIndices = sortedIndices.slice(0, 3);

    for (let i = 0; i < topThreeIndices.length; i++) {
        item_chosen_index.push(topThreeIndices[i]);
    }

    console.log(item_chosen_index);
}

// let glasses_artemis = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
// let glasses_caelum = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
// let glasses_dogma_ocean = [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1];
// let glasses_echo_black = [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
// let glasses_kamikaze = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0];
// let glasses_ode_ocean = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
// let glasses_vseries_black = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
// let glasses_vseries_planet_silver = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1];
// let glasses_vseries_white = [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
// let glasses_wi6970 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0];
// let glasses_kilmer = [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
// let glasses_magnus = [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
