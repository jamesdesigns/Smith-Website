// NEW BACK TO TOP LINK
// var backToTopBtn = document.getElementById("scrollUp");

// backToTopBtn.onclick = function() {
//     TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:90}});
//   }


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#scrollUp').fadeIn();
    } else {
        $('#scrollUp').fadeOut();
    }
});
$(document).ready(function() {
    $("#scrollUp").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/