// Global transition speed
var transitionSpeed = .5;

// Global ease setting
var easing = Power1.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

var tlBG;

var tlSatellite;

var frameDuration1 = 0; /* @otomo number b_frameDuration1 */

// back up image go to en frame immediatly variable
var back_up_image = "no"; /* @otomo string c_back_up_image_yes_no */

var IEBoolean;

var SafariBoolean;

var headline1Splitlines;

// Init tricggered by onLoad in Body tag
function init() {

    // Set Banner duration timer
    startTime = new Date();

    // Set Global Timeline
    tl = gsap.timeline({ onComplete: endTime });

    tlBG = gsap.timeline({});

    tlSatellite = gsap.timeline({});

    setUp();

    isIE();

    checkCTAForDecenders();

    setRollover();

    animate();

    if (back_up_image == "no") {
        // tl.seek("end");
        // tl.seek("frame_2");
        // tl.seek("frame_3");
        // tl.seek("end_frame");
        tl.play();
    } else {
        tl.progress(1).pause();
        tlBG.progress(1).pause();
    }
}

function setUp() {

    var headline1Split = new SplitText("#headline1", { type: "lines", linesClass: "linesClass linesClass++" });

    headline1Splitlines = headline1Split.lines;

    //gsap.set(["#img1"], { scale: 1, x:-780, y:-700, force3D: true, transformOrigin:"40% 90%" });
    gsap.set(["#img1"], { scale: 0.65, x: -600, y: -620, force3D: true, transformOrigin: "40% 90%" });

    gsap.set(["#img1_holder"], { scale: 1, x: "-=50px", y: "-=400px", force3D: true });

    //gsap.set(["#satellite"], { x:38, y:0, force3D: true, rotation: 0 });


    //gsap.set(["#satellite_holder_holder"], { y:10, x:40, rotation: .001, force3D: true});

    //gsap.set(["#satellite_holder"], { y:-408, rotation: .001, force3D: true});

    //gsap.set(["#satellite_images"], { y:408, rotation: .001, force3D: true});

}

function animate() {

    tl.pause();

    tl.call(animateBG);

    tl.call(animateSatellite);

    tl.set(["#main_content", "#headline1", "#satellite", "#satellite_holder"], { autoAlpha: 1, force3D: true, rotation: .001 }, 0);

    tl.staggerTo([headline1Splitlines], 1, { autoAlpha: 1, delay: 4.5 }, 1);

    tl.to("#cta", 1, { autoAlpha: 1, y: 0, ease: "power1.out" }, "+=" + frameDuration1);
}

function animateBG() {

    tlBG.to(["#img1"], 5, { scale: .5, x: -580, y: -530, force3D: true, ease: "power1.out" });
}

function animateSatellite() {

    //tlSatellite.to(["#satellite_holder"], 3.5, { y:-200, force3D: true, ease: "power1.inOut"}, "-=.5");

    //tlSatellite.to(["#satellite_images"], 3.5, { y:200, force3D: true, ease: "power1.inOut"}, "-=3.5");

    //tlSatellite.to(["#satellite_holder_holder"], 5, { y:0, x:0, force3D: true, ease: "power1.out"}, "-=3.5");
    tlSatellite.from("#satellite", 3.5, { x: "-=150px", ease: "power1.out" }, 0);
    tlSatellite.to("#satellite_holder", 6, { width: "600px", borderBottomRightRadius: "150px", ease: "power1.out" }, 0);
}

// End timer

function endTime() {

    // show total banner animation time in browser console.
    var endTime = new Date();

    console.log("Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

function setRollover() {
    document.getElementById('btn').addEventListener('mouseover', defaultOver, false);
    document.getElementById('btn').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
    document.getElementById("cta").classList.add('ctaOver');
    document.getElementById("cta").classList.remove('cta');
}

function defaultOut() {
    document.getElementById("cta").classList.add('cta');
    document.getElementById("cta").classList.remove('ctaOver');
}

///

function rollover() {}

function clickthrough() {}

function checkCTAForDecenders() {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // console.log('Its Safari');
        var paddingBottomNumber = getCSSPoperty(document.getElementById("cta"), "padding-bottom");
        paddingBottomNumber = parseInt(paddingBottomNumber, 10);
        var bottomCTAPadding = Math.ceil(paddingBottomNumber - paddingBottomNumber * .2);
        console.log("bottomCTAPadding " + bottomCTAPadding);
        document.getElementById("cta").style.paddingBottom = bottomCTAPadding + "px";

        var paddingBottomNumber = getCSSPoperty(document.getElementById("cta"), "padding-bottom");
        // console.log("paddingBottomNumber " + paddingBottomNumber);
    }
    var ctaText = document.getElementById("cta").innerHTML;
    ///have to cut the chevron off bedcause the ascii code has a g in it i.e a decender
    ctaText = ctaText.split('&gt;');
    ctaText = ctaText[0];
    // console.log("ctaText " + ctaText); 
    var pattern = new RegExp(/[gjqpy]/); //unacceptable chars
    if (pattern.test(ctaText)) {
        console.log("contains decenders");
        return false;
    }
    // isIE();
    setCTAPadding();
    console.log("contains no decenders ");
    return true; //good user input
}

function setCTAPadding() {
    var paddingBottomNumber = getCSSPoperty(document.getElementById("cta"), "padding-bottom");
    paddingBottomNumber = parseInt(paddingBottomNumber, 10);
    if (IEBoolean == true) {
        console.log("adjust cta for IE");
        var bottomCTAPadding = Math.ceil(paddingBottomNumber - paddingBottomNumber * .2);
        document.getElementById("cta").style.paddingBottom = bottomCTAPadding + "px";
    } else {
        console.log("not ie so no adjustment");
        var bottomCTAPadding = Math.ceil(paddingBottomNumber - paddingBottomNumber * .25);
        document.getElementById("cta").style.paddingBottom = bottomCTAPadding + "px";
    }
}

/* Sample function that returns boolean in case the browser is Internet Explorer*/
function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
}

/* Create an alert to show if the browser is IE or not */
if (isIE()) {
    IEBoolean = true;
    console.log('It is InternetExplorer');
} else {
    IEBoolean = false;
    console.log('It is NOT InternetExplorer');
}

function getCSSPoperty(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}