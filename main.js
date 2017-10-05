var activeID = "";
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("mobileMenuContent").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("mobileMenuContent").style.width = "0%";
}

$(":button").click(function() {
    $("body").addClass("noScroll");
});

$(".close").click(function() {
    $("body").removeClass("noScroll");
});

function openPopUp(thisid) {
    document.getElementById("closebutton").style.visibility = "visible";
    document.getElementById(thisid).style.height = "100%";
    activeID = thisid;
    //document.getElementById(id).style.overflow = "auto";
};

function closePopUp() {
    document.getElementById("closebutton").style.visibility = "hidden";
    document.getElementById(activeID).style.height = "0%";
};


//$(document).ready(function(){
//    $("img").hover(function(){
//        $(this).css("opacity", "0.0");
//        }, function(){
//        $(this).css("opacity", "1.0");
//    });
//});

function showGif(x){
    x.style.opacity = '0';
}

function hideGif(x){
    x.style.opacity = '1';
}

function showIrena(){
    document.getElementById("IRENA").style.opacity = '1';
    document.getElementById("leaf").style.filter = 'grayscale(0%)';
}

function hideIrena(){
    document.getElementById("IRENA").style.opacity = '0'; document.getElementById("leaf").style.filter = 'grayscale(100%)';
}