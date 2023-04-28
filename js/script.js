function show_hamburger_content() {
    var hamburger_content = document.getElementById("hamburger_content");
    if (hamburger_content.style.display === "none") {
        hamburger_content.style.display = "block";
    } else {
        hamburger_content.style.display = "none";
    }
}