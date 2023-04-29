var first_time = 1;
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
    if (first_time) {
        hamburger_content.style.display = "block";
        hamburger_content_shadow.style.display = "block";
        first_time = !first_time;
    }
}