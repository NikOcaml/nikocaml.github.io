new TypeIt("#target1", {
    speed: 100,
    loop: false,
  }).type("Entdecke ungenutztes Potential", {speed: 50})
    .break()
    .type("mittels <span class='anaglyph'>Künstlicher Intelligenz</span>.", {speed: 50})
    .move(-55, {speed: 30})
    .delete(8)
    .type("Realisiere")
    .pause(1000)
    .move(null,{ to: "END", speed: 20 })
    .break().break()
    .type("Digitalisieren Sie Ihr Unternehmen")
    .break()
    .type("mit den Besten.")
    .go();