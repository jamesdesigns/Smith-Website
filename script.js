// TweenMax.from(".logo", 1.5, {x:300, opacity:0, scale:0.4});


// NEW BACK TO TOP LINK
//  var backToTopBtn = document.getElementById("scrollUp");

//  backToTopBtn.onclick = function() {
//      TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:90}});
//    }




// New GreenSock animation
TweenMax.fromTo('.viewport', 2, {
    backgroundSize: function(i, e) { //I use a function-based value so that it works with multiple targets and so that it grabs the value EXACTLY at the time the tween starts.
        return getBGSize(e);
    }
}, {
    // backgroundSize: "300px 250px",
    backgroundSize: "1250px 461px",
    yoyo: true,
    repeat: 0, 
    delay: .5, 
    ease: Power0.easeInOut
});


//this function converts the backgroundSize of an element from "cover" or "contain" or "auto" into px-based dimensions. To set it immediately, pass true as the 2nd parameter.
function getBGSize(element, setInPx) {
var e = (typeof(element) === "string") ? document.querySelector(element) : element,
        cs = window.getComputedStyle(e),
        imageUrl = cs.backgroundImage,
        size = cs.backgroundSize,
        image, w, h, iw, ih, ew, eh, ratio;
if (imageUrl && !/\d/g.test(size)) {
    image = new Image();
    image.setAttribute("src", imageUrl.replace(/(^url\("|^url\('|^url\(|"\)$|'\)$|\)$)/gi, "")); //remove any url() wrapper. Note: some browsers include quotes, some don't.
    iw = image.naturalWidth;
    ih = image.naturalHeight;
    ratio = iw / ih;
    ew = e.offsetWidth;
    eh = e.offsetHeight;
    if (!iw || !ih) {
        console.log("getBGSize() failed; image hasn't loaded yet.");
    }
    /*
    if (size === "cover") {
        if (iw / ew > ih / eh) { //must stretch height more than width
            h = eh;
            w = eh * ratio;
        } else {
            w = ew;
            h = ew / ratio;
        }
        
    } else if (size === "contain") {
        if (iw / ew > ih / eh) { //must fit to width
            w = ew;
            h = ew / ratio;
        } else {
            h = eh;
            w = eh * ratio;
        }
        
    } else if (size === "auto") {
        w = iw;
        h = ih;
    }
    */
    //simplified/shorter version of above logic
    if (size === "cover" || size === "contain") {
        if ((size === "cover") === (iw / ew > ih / eh)) {
            h = eh;
            w = eh * ratio;
        } else {
            w = ew;
            h = ew / ratio;	
        }
    } else { //"auto"
        w = iw;
        h = ih;
    }
    size = Math.ceil(w) + "px " + Math.ceil(h) + "px";
    if (setInPx) {
        e.style.backgroundSize = size;
    }
}
return size;
}




TweenLite.to(scrollUp, 2, {scrollTo:{y:"max"}});



