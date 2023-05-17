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

let state = 0;

//---------------- next page button ----------------//
function change_next_button() {
    let tab_arr = [];
    let div_arr = [];
    for (let i = 0; i <= 3; i++) {
        let tab = document.getElementById(`style_title_element_${i}`);
        let div = document.getElementById(`divider_${i}`);
        if (tab) {
            tab_arr.push(tab);
        }
        if (div) {
            div_arr.push(div);
        }
    }
    console.log(state);
    console.log(div_arr);

    if (state === 0) {
        // Make first Tab Inactive
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state + 1].classList.remove("inactive");
        console.log(tab_arr[state + 1].classList);
        tab_arr[state + 1].classList.add("active");
        console.log(tab_arr[state + 1].classList);

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state + 1].classList.remove("inactive");
        console.log(div_arr[state + 1].classList);
        div_arr[state + 1].classList.add("active");
        console.log(div_arr[state + 1].classList);

        let container = document.getElementById("styleflex_container");
        container.style.display = "none";

        let container2 = document.getElementById("preferenceflex_container");
        container2.style.display = "flex";

        state++;
    } else if (state === 1) {
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state + 1].classList.remove("inactive");
        console.log(tab_arr[state + 1].classList);
        tab_arr[state + 1].classList.add("active");
        console.log(tab_arr[state + 1].classList);

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state + 1].classList.remove("inactive");
        console.log(div_arr[state + 1].classList);
        div_arr[state + 1].classList.add("active");
        console.log(div_arr[state + 1].classList);

        let container = document.getElementById("preferenceflex_container");
        container.style.display = "none";

        let container2 = document.getElementById("faceflex_container");
        container2.style.display = "flex";

        //Change button and hidde goback skip

        let button = document.getElementById("next_container");
        let button2 = document.getElementById("next_container_2");

        button.classList.remove("active_button");
        button.classList.add("inactive_button");

        console.log(button.classList);

        button2.classList.remove("inactive_button");
        button2.classList.add("active_button");

        state++;
    } else if (state === 2) {
        window.location.href = "./recomendation.html"; //actually change to recommended page
    }
}

function change_goback_button() {
    let tab_arr = [];
    let div_arr = [];
    for (let i = 0; i <= 3; i++) {
        let tab = document.getElementById(`style_title_element_${i}`);
        let div = document.getElementById(`divider_${i}`);
        if (tab) {
            tab_arr.push(tab);
        }
        if (div) {
            div_arr.push(div);
        }
    }

    if (state === 0) {
        console.log("no less");
    } else if (state === 1) {
        // Make first Tab Inactive
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state - 1].classList.remove("inactive");
        console.log(tab_arr[state - 1].classList);
        tab_arr[state - 1].classList.add("active");
        console.log(tab_arr[state - 1].classList);

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state - 1].classList.remove("inactive");
        console.log(div_arr[state - 1].classList);
        div_arr[state - 1].classList.add("active");
        console.log(div_arr[state - 1].classList);

        let container = document.getElementById("styleflex_container");
        container.style.display = "flex";

        let container2 = document.getElementById("preferenceflex_container");
        container2.style.display = "none";

        state--;
    } else if (state === 2) {
        // Make first Tab Inactive
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state - 1].classList.remove("inactive");
        console.log(tab_arr[state - 1].classList);
        tab_arr[state - 1].classList.add("active");
        console.log(tab_arr[state - 1].classList);

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state - 1].classList.remove("inactive");
        console.log(div_arr[state - 1].classList);
        div_arr[state - 1].classList.add("active");
        console.log(div_arr[state - 1].classList);

        let container = document.getElementById("preferenceflex_container");
        container.style.display = "flex";

        let container2 = document.getElementById("faceflex_container");
        container2.style.display = "none";

        //Change button and hidde goback skip

        let button = document.getElementById("next_container");
        let button2 = document.getElementById("next_container_2");

        button2.classList.remove("active_button");
        button2.classList.add("inactive_button");

        console.log(button.classList);

        button.classList.remove("inactive_button");
        button.classList.add("active_button");

        state--;
    }
}
//--------------------------------------------------//

//------------------ open camera -------------------//
var camera_stream = null;

function open_camera() {
    if (state === 2) {
        let container = document.getElementById("faceflex_container");
        container.style.display = "none";

        let body = document.body;
        body.classList.toggle("active");

        let videoEl = document.getElementById("video_popup_container");
        videoEl.classList.toggle("active");

        //---------- camera----------//
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function (stream) {
                    camera_stream = document.getElementById("camera_stream");
                    camera_stream.srcObject = stream;
                })
                .catch(function (error) {
                    console.error("Cannot access to camera media: ", error);
                });
        } else {
            console.error("getUserMedia API not supported");
        }
        //----------------------------//

        let button_1 = document.getElementById("next_container_2");
        button_1.classList.remove("active_button");
        button_1.classList.add("inactive_button");

        // setTimeout(() => {
        let button_2 = document.getElementById("next_container_3");
        button_2.classList.remove("inactive_button");
        button_2.classList.add("active_button");
        let container_button = document.getElementById("next_button_container");
        container_button.classList.add("container_result");
        // }, 1000);
    }
}

function close_camera() {
    var stream = camera_stream.srcObject;
    var tracks = stream.getTracks();

    tracks.forEach(function (track) {
        track.stop();
    });

    camera_stream.srcObject = null;
}
//--------------------------------------------------//

//------------------ go to result ------------------//
function go_to_result() {
    close_camera();
    let videoEl = document.getElementById("video_popup_container");
    videoEl.classList.toggle("active");

    let body = document.body;
    body.classList.toggle("active");

    let button_next = document.getElementById("next_container_3");
    button_next.classList.remove("active_button");
    button_next.classList.add("inactive_button");

    let succed = document.getElementById("succed");
    let button = document.getElementById("next_container_4");
    let pic = document.getElementById("resultflex_container");

    succed.classList.toggle("inactive_succed");
    button.classList.toggle("inactive_button");
    pic.classList.toggle("result_inactive");
}
//--------------------------------------------------//
