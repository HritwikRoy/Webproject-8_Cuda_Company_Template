$(document).ready(function() {
    //sticky menu
    $(".js--service-section").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    //mixitup portfolio
    var mixer = mixitup('.container');
});
//mobile nenu

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}