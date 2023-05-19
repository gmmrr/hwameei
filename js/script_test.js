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

let video = document.getElementById("face_api_video");

Promise.all([
    // faceapi.nets.tinyFaceDetector.loadFromUri("/models/tiny_face_detector"),
    // faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models/tiny_face_landmark_68"),
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
        let canvas_container = document.getElementById("face_api");

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
