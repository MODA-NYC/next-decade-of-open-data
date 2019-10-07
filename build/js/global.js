// init controller
var controller = new ScrollMagic.Controller({
  // globalSceneOptions: { duration: "100%" }
  // scene.duration("100%");
});

var controllerMobile = new ScrollMagic.Controller({
  // globalSceneOptions: { duration: "100%" }
});

// build scenes
new ScrollMagic.Scene({ triggerElement: "#pillar--1" })
  .setClassToggle("#pillar1", "pillar--active")
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#pillar--2" })
  .setClassToggle("#pillar2", "pillar--active")
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#pillar--3" })
  .setClassToggle("#pillar3", "pillar--active")
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);


// mobile frameworkNav

var frameworkNavButtons = document.querySelectorAll('.frameworkNav__button');

frameworkNavButtons.forEach(function(x) {
  x.addEventListener('click', function(e) {
    e.preventDefault();
    // console.dir(x)

    // get anchor link
    let link = x.children[0].hash;
    // console.log(link)

    // find distance from top
    let pos = document.querySelector(link).offsetTop;
    console.log(pos);

    // scroll to link
    let offset = 80;
    window.scroll({ top: (pos - offset), left: 0, behavior: 'smooth' });

  })
})

// build scenes
new ScrollMagic.Scene({ triggerElement: "#pillar--1" })
  .setClassToggle(".frameworkNav__button--experience", "frameworkNav__button--active")
  // .addIndicators() // add indicators (requires plugin)
  .duration(function() {
    return document.getElementById("pillar--1").offsetHeight;
  })
  .addTo(controllerMobile);

new ScrollMagic.Scene({ triggerElement: "#pillar--2" })
  .setClassToggle(".frameworkNav__button--capacity", "frameworkNav__button--active")
  // .addIndicators() // add indicators (requires plugin)
  .duration(function() {
    return document.getElementById("pillar--2").offsetHeight;
  })
  .addTo(controllerMobile);
new ScrollMagic.Scene({ triggerElement: "#pillar--3" })
  .setClassToggle(".frameworkNav__button--community", "frameworkNav__button--active")
  // .addIndicators() // add indicators (requires plugin)
  .duration(function() {
    return document.getElementById("pillar--3").offsetHeight;
  })
  .addTo(controllerMobile);


// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);
