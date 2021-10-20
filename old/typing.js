const type3=new TypeIt("#target3", {
  speed: 100,
  loop: false,
});

function typing3(){
  type2.destroy();
  type3
  .type("<span class='anaglyph' href='dasd'>Mehr Erfahren</span>")
  .go();
}

const type2=new TypeIt("#target2", {
    speed: 100,
    loop: false,
    afterComplete: function (instance) {
      typing3();
    }
  });



function typing2(){
  type1.destroy();
  type2.type("Digitalisieren Sie Ihr Unternehmen mit den Besten.")
  .break()
  .type("<span class='anaglyph' href='dasd'>Mehr Erfahren</span>")
  .go();
}
const type1=new TypeIt("#target1", {
    speed: 100,
    loop: false,
    afterComplete: function (instance) {
      typing2();
    }
  });
type1.type("Entdecke ungenutztes", {speed: 50})
.break()
.type("Potential mittels", {speed: 50}).break()
.type("<span class='anaglyph'>Künstlicher Intelligenz</span>.", {speed: 50})
.move(-55, {speed: 30})
.delete(8)
.type("Realisiere")
.pause(1000)
.move(null,{ to: "END", speed: 20 })
.break().break()
// .type("Digitalisieren Sie Ihr")
// .break()
// .type("Unternehmen")
// .break()
// .type("mit den Besten.")
 .go();
