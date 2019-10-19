jQuery(document).ready(function() {
    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#loading").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");



    /*------------------------
    Wow Animation
    --------------------------*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();

    if (jQuery("#scene").length) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }
});





    $(function () { 






var controller = new ScrollMagic.Controller();
    // build scenes
    var revealElements = document.getElementsByClassName("digit");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,                        // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "visible") // add class toggle
              .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
              .addTo(controller);
    }

// var tween = TweenMax.to("#target", 1, {rotation: 360, ease: Linear.easeNone});
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 1500})
//                         .setTween(tween)
//                         .setPin("#target", {pushFollowers: false})
//                         .addIndicators() // add indicators (requires plugin)
//                         .addTo(controller);


    });

