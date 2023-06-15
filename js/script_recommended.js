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

const QRCodeEl = document.getElementById("QR-codeWrapper");
//-------------------- Toogle QRCode//
function showQRCode() {
    QRCodeEl.classList.toggle("inactive");
}
//-------------------- Close QRCode//
function closeQRCode() {
    QRCodeEl.classList.toggle("inactive");
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
    show_recommended_items(item_chosen_index);
}

function show_recommended_items(item_chosen_index) {
    let frame = document.getElementById("item_frame");
    for (let i = 0; i < 3; i++) {
        get_item(item_chosen_index[i], function (item) {
            console.log(item);
            frame.innerHTML += `<div class="item_element">
                <img class="glasses_pic" src="${item.img}" />
                <div class="glasses_text">
                    <div class="glasses_name">${item.name}</div>
                    <div class="glasses_description">${item.description}</div>
                </div>
                <div class="glasses_price">$${item.price}</div>
                <img class="cart_icon" src="./src/add_to_cart.png " onclick="add_to_cart(${item_chosen_index[i]})"/>
            </div>
            `;
        });
    }
}

function get_item(id, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cart/getbyid", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = xhr.response;
            console.log(data);
            callback(data);
        } else {
            console.log("request failed");
        }
    };

    xhr.onerror = function () {
        console.log("request error");
    };

    let request_data = {
        id: id,
    };

    xhr.send(JSON.stringify(request_data));
}

function add_to_cart(id) {
    console.log(id);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cart/add", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = xhr.response;
            console.log(data);
        } else {
            console.log("request failed");
        }
    };

    xhr.onerror = function () {
        console.log("request error");
    };

    let req_data = {
        id: id,
        account: localStorage.getItem("account"),
    };

    xhr.send(JSON.stringify(req_data));
}
