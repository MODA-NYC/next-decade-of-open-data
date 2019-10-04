// init controller
var controller = new ScrollMagic.Controller({
  // globalSceneOptions: { duration: 300 }
});

// build scenes
new ScrollMagic.Scene({ triggerElement: "#pillar--1" })
  .setClassToggle("#pillar1", "pillar--active") // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#pillar--2" })
  .setClassToggle("#pillar2", "pillar--active") // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#pillar--3" })
  .setClassToggle("#pillar3", "pillar--active") // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);


// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);
