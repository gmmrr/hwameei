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
    } else {
        window.location.href = "/login.html";
    }
    localStorage.getItem("cart");
    console.log();
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

function update_cart(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cart/get", true);
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
        account: localStorage.getItem("account"),
    };

    xhr.send(JSON.stringify(request_data));
}

function show_cart() {
    update_cart(function (cart) {
        cart_container = document.getElementById("product_container_cart");
        console.log(cart);
        cart_container.innerHTML = "";
        cart.forEach((item, idx) => {
            cart_container.innerHTML += `
        <div class="product_element">
            <img class="glasses_pic" src="${item.img}" />
            <div class="glasses_text">
                <div class="glasses_name">${item.name}</div>
                <div class="glasses_description">${item.description}</div>
            </div>
            <div class="glasses_price">$${item.price}</div>
            <img class="delete_icon" src="./src/delete_icon.png" onclick="delete_from_cart(${item.id})"/>
        </div>`;
        });
    });
}
show_cart();

function delete_from_cart(id) {
    console.log(id);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/cart/delete", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "text";

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = xhr.response;
            console.log(data);
            if (data == "success") {
                console.log("delete success");
                show_cart();
                renderPriceItems();
            } else {
                console.log("delete failed");
            }
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

function calculateTotal(callback) {
    update_cart(function (cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
        }
        callback(total);
    });
}

let state = 0;
function go_to_order() {
    let containerProductEl = document.getElementById("product_container_cart");
    let containerOrderEl = document.getElementById("order_form");
    let containerOrderComplEl = document.getElementById("order_complete_container");
    let rightContainerEl = document.getElementById("right_container");
    let lineEl = document.getElementById("navtab_container_cart");
    console.log("go to order", containerProductEl);
    console.log("State", state);
    if (state === 0) {
        containerProductEl.classList.toggle("inactive");
        containerOrderEl.classList.toggle("inactive");
        state++;
    } else if (state === 1) {
        rightContainerEl.classList.toggle("inactive");
        containerOrderEl.classList.toggle("inactive");
        lineEl.classList.toggle("inactive");
        containerOrderComplEl.classList.toggle("inactive");

        state++;
    }
}
function renderPriceItems() {
    if (!localStorage.getItem("cart")) {
        cart = [];
    } else {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    calculateTotal(function (result) {
        let total = result;
        let shopping_information = document.getElementById("right_container");
        shopping_information.innerHTML = "";
        shopping_information.innerHTML = ` 
                <h1>合計金額</h1>
                <div id="item_price">
                    <p id="item_price_text">商品金額</p>
                    <p id="item_price_content">${total}</p>
                </div>
                <div id="shipping_fee">
                    <p id="shipping_fee_text">運費</p>
                    <p id="shipping_fee_content">30</p>
                </div>
                <div id="total_price">
                    <p id="total_price_text">合計</p>
                    <p id="total_price_content">${total + 30}</p>
                </div>

                <div id="button_container">
                    <button id="order_button" onclick="go_to_order()">結帳</button>
                    <button id="problem_button">驗光師諮詢</button>
                </div>
                <p id="payment_type">付款方式／接受的付款類型</p>
                <img id="credit_card" src="./src/credit_card.png" alt="credit_card" />
  `;
    });
}
renderPriceItems();

function clickPayment(el) {
    let paymentsEl = document.getElementsByClassName("select-inside");
    console.log(paymentsEl);
    if (el.id === "payment_1") {
        for (let i = 0; i < paymentsEl.length; i++) {
            if (!paymentsEl[i].classList.contains("inactive")) {
                paymentsEl[i].classList.add("inactive");
            }
            paymentsEl[0].classList.remove("inactive");
        }
    }
    if (el.id === "payment_2") {
        for (let i = 0; i < paymentsEl.length; i++) {
            if (!paymentsEl[i].classList.contains("inactive")) {
                paymentsEl[i].classList.add("inactive");
            }
            paymentsEl[1].classList.remove("inactive");
        }
    }
    if (el.id === "payment_3") {
        for (let i = 0; i < paymentsEl.length; i++) {
            if (!paymentsEl[i].classList.contains("inactive")) {
                paymentsEl[i].classList.add("inactive");
            }
            paymentsEl[2].classList.remove("inactive");
        }
    }
}
