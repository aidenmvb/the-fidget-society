/* Product copy and image paths. Replace a picture by changing its path here.
   Page heroes use the same files named in each page's img src.
   The product images and hero stills are reference-based AI illustrations. */
(function (root) {
  root.FIDGET_CATALOG = [
    {
      id: "knob-fidget",
      name: "Knob Fidget",
      motion: "Move",
      summary: "A raised knob with room to move inside a rounded base.",
      movement: "Hold the outer base and use your fingers to move the raised center knob.",
      image: "images/illustrations/knob-fidget.jpg",
      hero: "images/heroes/knob-fidget.jpg",
      heroAlt: "AI illustration of blue mushroom-shaped center knob with a visible gap inside its round housing.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "AI illustration of blue mushroom-shaped center knob with a visible gap inside its round housing.",
      cardFocus: "68% 55%"
    },
    {
      id: "planetary-gears",
      name: "Planetary Gears",
      motion: "Turn",
      summary: "An interconnected circle of gears that invites a repeating turning motion.",
      movement: "Use a fingertip to turn an accessible gear and watch the neighboring gears move through their interlocking teeth.",
      image: "images/illustrations/planetary-gears.jpg",
      hero: "images/heroes/planetary-gears.jpg",
      heroAlt: "AI illustration of gray interlocking gears around an open center inside a scalloped housing.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "AI illustration of gray interlocking gears around an open center inside a scalloped housing.",
      cardFocus: "74% 52%"
    },
    {
      id: "infinity-cube",
      name: "Infinity Cube",
      motion: "Fold",
      summary: "Hinged blocks that fold from a compact cube into an extended shape.",
      movement: "Hold the blocks in both hands and fold them along their hinges. Continue flipping the connected sections between different shapes.",
      image: "images/illustrations/infinity-cube.jpg",
      hero: "images/heroes/infinity-cube.jpg",
      heroAlt: "AI illustration of the Infinity Cube folded in blue and extended in pink, with the block hinges visible.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "AI illustration of the Infinity Cube folded in blue and extended in pink, with the block hinges visible.",
      cardFocus: "68% 54%"
    },
    {
      id: "gear-rollers",
      name: "Gear Rollers",
      motion: "Roll",
      summary: "Two chunky, ridged rollers held inside a small frame.",
      movement: "Hold the frame and use your thumb or fingers to roll the ridged pieces.",
      image: "images/illustrations/gear-rollers.jpg",
      hero: "images/heroes/gear-rollers.jpg",
      heroAlt: "AI illustration of two lime green diagonally ridged rollers and their end discs inside a supporting frame.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "AI illustration of two lime green diagonally ridged rollers and their end discs inside a supporting frame.",
      cardFocus: "72% 50%"
    },
    {
      id: "ring-fidget",
      name: "Ring Fidget",
      motion: "Turn",
      summary: "A finger-loop grip paired with a small ridged wheel.",
      movement: "Hold the body using the large finger opening and use another finger to turn the ridged wheel at the opposite end.",
      image: "images/illustrations/ring-fidget.jpg",
      hero: "images/heroes/ring-fidget.jpg",
      heroAlt: "AI illustration of two-lobed Ring Fidget with a large finger opening and a smaller ridged wheel.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "AI illustration of two-lobed Ring Fidget with a large finger opening and a smaller ridged wheel.",
      cardFocus: "70% 52%"
    },
    {
      id: "flexible-mesh",
      name: "Flexible Mesh",
      motion: "Bend",
      summary: "A linked sheet that bends and drapes with your hands.",
      movement: "Lift, bend, and drape the connected pieces, or trace the repeating texture with your fingertips.",
      image: "images/illustrations/flexible-mesh.jpg",
      hero: "images/heroes/flexible-mesh.jpg",
      heroAlt: "AI illustration of black rectangular sheet with repeating linked segments, visible gaps and individual edge pieces.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "AI illustration of black rectangular sheet with repeating linked segments, visible gaps and individual edge pieces.",
      cardFocus: "72% 48%"
    }
  ];

  root.FIDGET_PAGE_HEROES = {
    home: {
      src: "images/heroes/home-knob.jpg",
      alt: "AI illustration of hands holding a blue Knob Fidget over a speckled counter.",
      credit: "AI illustration."
    },
    fidgets: {
      src: "images/heroes/catalog-new.jpg",
      alt: "AI illustration of the Knob Fidget and Gear Rollers arranged on an oak table.",
      credit: "AI illustration."
    },
    how: {
      src: "images/heroes/packing-new.jpg",
      alt: "AI illustration of the Knob Fidget and Infinity Cube beside a kraft box, tissue and twine. Not a photograph of a delivery.",
      credit: "AI illustration."
    },
    about: {
      src: "images/heroes/workbench-new.jpg",
      alt: "AI illustration of the Knob Fidget and Gear Rollers on a workbench with a printer and filament. Not a photograph of Hendrik or his home.",
      credit: "AI illustration."
    },
    request: {
      src: "images/heroes/note-new.jpg",
      alt: "AI illustration of the Knob Fidget and Infinity Cube beside a blank card and open envelope. Not a photograph of a request.",
      credit: "AI illustration."
    }
  };

  root.FIDGET_COLORS = [
    { id: "", label: "No preference" },
    { id: "sand", label: "Sand" },
    { id: "sage", label: "Sage" },
    { id: "terracotta", label: "Terracotta" },
    { id: "slate", label: "Slate" },
    { id: "honey", label: "Honey" },
    { id: "olive", label: "Olive" }
  ];

  root.FIDGET_MATERIAL_NOTE =
    "Ask about the material when you request a design.";
})(window);
