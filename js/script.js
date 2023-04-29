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


var first_time_homepage_switching = 1;
let homepage_switching = anime({
    targets: '#homepage_background',
    opacity: ['0.7', '1'],
    easing: 'easeOutSine',
    duration: '1000',
    endDelay: '2000'
});
var homepage_index = 1;
function homepage_change(){
    
    pic = document.getElementById("homepage_background");
    pic.style.backgroundImage = `url("src/homepage_backgnd${homepage_index}.jpg")`;
    if(!first_time_homepage_switching) {
        homepage_switching.restart();
    }

    if(homepage_index >= 3){
        homepage_index = 1;
    } else {
        homepage_index++;
    }

    first_time_homepage_switching = 0;
}
setInterval(homepage_change,3000);



// anime({
//     targets: '#homepage_background',
//     easing: 'easeOutQuad'
// });

