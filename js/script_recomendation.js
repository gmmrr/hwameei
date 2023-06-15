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

    if (state === 0) {
        // Make first Tab Inactive
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state + 1].classList.remove("inactive");
        tab_arr[state + 1].classList.add("active");

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state + 1].classList.remove("inactive");
        div_arr[state + 1].classList.add("active");

        let container = document.getElementById("styleflex_container");
        container.style.display = "none";

        let container2 = document.getElementById("preferenceflex_container");
        container2.style.display = "flex";

        // let skip_button =document.getElementById("skip_button");
        // skip_button.classList.add("inactive_button");

        state++;
    } else if (state === 1) {
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state + 1].classList.remove("inactive");
        tab_arr[state + 1].classList.add("active");

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state + 1].classList.remove("inactive");
        div_arr[state + 1].classList.add("active");

        let container = document.getElementById("preferenceflex_container");
        container.style.display = "none";

        let container2 = document.getElementById("faceflex_container");
        container2.style.display = "flex";

        //Change button and hidde goback skip

        let button = document.getElementById("next_container");
        let button2 = document.getElementById("next_container_2");

        let skip_button = document.getElementById("skip_button");
        skip_button.style.display = "none";

        button.classList.remove("active_button");
        button.classList.add("inactive_button");

        button2.classList.remove("inactive_button");
        button2.classList.add("active_button");
        console.log("State==========>", state);
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
        console.log("State==========>", state);
    } else if (state === 1) {
        // Make first Tab Inactive
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state - 1].classList.remove("inactive");
        tab_arr[state - 1].classList.add("active");

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state - 1].classList.remove("inactive");
        div_arr[state - 1].classList.add("active");

        let container = document.getElementById("styleflex_container");
        container.style.display = "flex";

        let container2 = document.getElementById("preferenceflex_container");
        container2.style.display = "none";

        console.log("Hereee  State==========>", state);
        state--;
    }
    if (state === 2) {
        // Make first Tab Inactive
        tab_arr[state].classList.remove("active");
        tab_arr[state].classList.add("inactive");

        tab_arr[state - 1].classList.remove("inactive");
        tab_arr[state - 1].classList.add("active");

        //Make first divider Inactive
        div_arr[state].classList.remove("active");
        div_arr[state].classList.add("inactive");

        div_arr[state - 1].classList.remove("inactive");
        div_arr[state - 1].classList.add("active");

        let container = document.getElementById("preferenceflex_container");
        container.style.display = "flex";

        let container2 = document.getElementById("faceflex_container");
        container2.style.display = "none";

        //Change button and hidde goback skip

        let button = document.getElementById("next_container");
        let button2 = document.getElementById("next_container_2");

        let skip_button = document.getElementById("skip_button");
        skip_button.style.display = "flex";

        button2.classList.remove("active_button");
        button2.classList.add("inactive_button");

        button.classList.remove("inactive_button");
        button.classList.add("active_button");

        console.log("State==========>", state);
        state--;
    } else if (state === 3) {
        window.location.href = "./recomendation.html"; //actually change to recommended page
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
                    const camera_stream = document.getElementById("camera_stream");
                    camera_stream.srcObject = stream;

                    const canvas = document.createElement("canvas");
                    const imageDiv = document.getElementById("image_result_container");
                    const context = canvas.getContext("2d");
                    let frameCount = 0;

                    function captureTenthFrame() {
                        frameCount++;

                        if (frameCount === 10) {
                            canvas.width = camera_stream.videoWidth;
                            canvas.height = camera_stream.videoHeight;
                            context.drawImage(camera_stream, 0, 0, canvas.width, canvas.height);

                            const imageData = canvas.toDataURL("image/png");
                            const image = new Image();
                            image.src = imageData;

                            imageDiv.appendChild(image);
                        }

                        if (frameCount < 10) {
                            requestAnimationFrame(captureTenthFrame);
                        }
                    }

                    camera_stream.addEventListener("loadeddata", function () {
                        requestAnimationFrame(captureTenthFrame);
                    });
                })
                .catch(function (error) {
                    console.error("Cannot access camera media: ", error);
                });
        } else {
            console.error("getUserMedia API not supported");
        }

        //----------------------------//

        let button_1 = document.getElementById("next_container_2");
        button_1.classList.remove("active_button");
        button_1.classList.add("inactive_button");

        let button_container = document.getElementById("other_container");
        button_container.style.display = "none";

        let container_button = document.getElementById("next_button_container");
        container_button.classList.add("container_result");

        setTimeout(() => {
            let body = document.body;
            body.classList.toggle("active");
            let videoEl = document.getElementById("video_popup_container");
            videoEl.classList.toggle("active");
            let result_container = document.getElementById("resultflex_container");
            result_container.classList.remove("result_inactive");

            let text_container_4 = document.getElementById("succed");
            text_container_4.classList.remove("inactive_succed");
            text_container_4.classList.add("active_succed");

            let container_4 = document.getElementById("next_container_4");
            container_4.classList.remove("inactive_button");
            container_4.classList.add("active_button");

            let button_container = document.getElementById("other_container");
            button_container.style.display = "flex";
            button_container.style.position = "relative";
            button_container.style.bottom = "101px";

            try {
                close_camera();
            } catch (err) {
                console.log(err);
            }
            state++;
            console.log("State=====>", state);
        }, 1000);
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
function facetype_random() {
    let facetype_container = document.getElementById("button_pic");
    let facetype = Math.floor(Math.random() * 6) + 1;
    switch (facetype) {
        case 1:
            facetype_container.textContent = "圓臉";
            break;
        case 2:
            facetype_container.textContent = "方臉";
            break;
        case 3:
            facetype_container.textContent = "長臉";
            break;
        case 4:
            facetype_container.textContent = "橢圓臉";
            break;
        case 5:
            facetype_container.textContent = "心形臉";
            break;
        case 6:
            facetype_container.textContent = "菱形臉";
            break;
    }
}
facetype_random();
//--------------------------------------------------//

//---------------- show all face type --------------//
let show = false;
function all_facetype_switch() {
    let all_face_container = document.getElementById("all_face_container");
    let body = document.body;

    if (show === false) {
        body.classList.toggle("active");
        all_face_container.style.display = "flex";
    } else {
        body.classList.toggle("active");
        all_face_container.style.display = "none";
    }
    show = !show;
}
//--------------------------------------------------//

//--------- change the chosen button color ---------//
var chosen_tag = new Array(21);
for (let i = 0; i < chosen_tag.length; i++) {
    chosen_tag[i] = false;
}

function choose_button(i) {
    if (chosen_tag[i] === false) {
        chosen_tag[i] = true;
    } else {
        chosen_tag[i] = false;
    }
    chosen_button = document.getElementsByClassName("description_button");
    chosen_button[i].classList.toggle("chosen_button");
}
//--------------------------------------------------//

//--------- change the chosen button color ---------//
let video = document.getElementById("camera_stream");

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models/tiny_face_detector"),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models/tiny_face_landmark_68"),
]).then(startVideo());

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        (stream) => (video.srcObject = stream),
        (err) => console.error(err)
    );
}

document.addEventListener("DOMContentLoaded", function () {
    video.addEventListener("play", () => {
        let canvas = faceapi.createCanvasFromMedia(video);
        let canvas_container = document.getElementById("video_popup_container");

        canvas.setAttribute("id", "face_api_canvas");
        canvas_container.appendChild(canvas);

        const displaySize = { width: video.videoWidth, height: video.videoHeight };
        faceapi.matchDimensions(canvas, displaySize);

        let output_landmark = 0;
        setInterval(async () => {
            const useTinyModel = true;
            const detections = await faceapi
                .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks(useTinyModel);
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            if (output_landmark == 0) {
                resizedDetections.forEach((detection) => {
                    const landmarks = detection.landmarks;
                    landmarks.positions.forEach((point) => {
                        console.log(`X: ${point.x}, Y: ${point.y}`);
                    });
                });
                output_landmark = 1;
            }
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        }, 200);
    });
});

//-------------------- backend ---------------------//
document.addEventListener("DOMContentLoaded", function () {
    let complete_button = document.getElementById("next_button_4");

    complete_button.addEventListener("click", function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/recommendation/sendtag", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "text";

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

        xhr.send(JSON.stringify(chosen_tag));
    });
});
//--------------------------------------------------//
