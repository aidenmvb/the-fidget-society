/* Product copy and image paths. Replace a picture by changing its path here.
   Page heroes use the same files named in each page's img src.
   Hero stills are wide AI illustrations, except the homepage photograph. */
(function (root) {
  root.FIDGET_CATALOG = [
    {
      id: "palm-stone",
      name: "Palm Stone",
      motion: "Hold",
      summary: "A quiet weight with a thumb well.",
      movement: "It rests in the palm. A thumb can sit in the well or rub there. Nothing has to be finished.",
      image: "images/illustrations/palm-stone.jpg",
      hero: "images/heroes/palm-stone.jpg",
      heroAlt: "AI illustration of a sand-colored Palm Stone on an oak table. Not a photograph of a finished fidget.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "Illustration of a sand-colored oval Palm Stone with a thumb well, on a plain ivory surface. Not a photograph of a finished fidget.",
      colorName: "Sand",
      cardFocus: "68% 55%"
    },
    {
      id: "orbit",
      name: "Orbit",
      motion: "Spin",
      summary: "Two nested rings, one inside the other.",
      movement: "One ring sits inside the other. The motion is spinning that ring.",
      image: "images/illustrations/orbit.jpg",
      hero: "images/heroes/orbit.jpg",
      heroAlt: "AI illustration of two nested sage rings, the Orbit fidget, on an oak table. Not a photograph of a finished fidget.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "Illustration of two nested sage-green rings, the Orbit fidget, on a plain ivory surface. Not a photograph of a finished fidget.",
      colorName: "Sage",
      cardFocus: "70% 52%"
    },
    {
      id: "clicker",
      name: "Clicker",
      motion: "Press",
      summary: "A rounded piece with two large buttons.",
      movement: "Two large buttons sit on a rounded body. The motion is pressing them.",
      image: "images/illustrations/clicker.jpg",
      hero: "images/heroes/clicker.jpg",
      heroAlt: "AI illustration of a terracotta Clicker with two round buttons, on an oak table. Not a photograph of a finished fidget.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "Illustration of a terracotta Clicker with two round buttons, on a plain ivory surface. Not a photograph of a finished fidget.",
      colorName: "Terracotta",
      cardFocus: "68% 54%"
    },
    {
      id: "path",
      name: "Path",
      motion: "Slide",
      summary: "Beads that travel a closed loop.",
      movement: "Beads move along a closed loop. The motion is sliding them, or tracing the loop with a finger.",
      image: "images/illustrations/path.jpg",
      hero: "images/heroes/path.jpg",
      heroAlt: "AI illustration of a slate Path fidget, a closed loop with beads, on an oak table. Not a photograph of a finished fidget.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "Illustration of a slate-colored Path fidget, a closed loop with beads, on a plain ivory surface. Not a photograph of a finished fidget.",
      colorName: "Slate",
      cardFocus: "72% 50%"
    },
    {
      id: "twist",
      name: "Twist",
      motion: "Twist",
      summary: "Two halves that screw together.",
      movement: "Two halves meet on a thread. The motion is twisting them together or apart.",
      image: "images/illustrations/twist.jpg",
      hero: "images/heroes/twist.jpg",
      heroAlt: "AI illustration of a honey-colored Twist fidget in two halves, on an oak table. Not a photograph of a finished fidget.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "Illustration of a honey-colored Twist fidget in two screw-together halves, on a plain ivory surface. Not a photograph of a finished fidget.",
      colorName: "Honey",
      cardFocus: "72% 48%"
    },
    {
      id: "gears",
      name: "Gears",
      motion: "Turn",
      summary: "Gears that stay on a table while hands turn them.",
      movement: "The piece stays on a table. The motion is turning the gears.",
      image: "images/illustrations/gears.jpg",
      hero: "images/heroes/gears.jpg",
      heroAlt: "AI illustration of an olive Gears fidget on an oak table. Not a photograph of a finished fidget.",
      width: 1400,
      height: 933,
      heroWidth: 1280,
      heroHeight: 720,
      alt: "Illustration of an olive Gears fidget, two gears on a small base, on a plain ivory surface. Not a photograph of a finished fidget.",
      colorName: "Olive",
      cardFocus: "74% 52%"
    }
  ];

  root.FIDGET_PAGE_HEROES = {
    home: {
      src: "images/hands.jpg",
      alt: "Hands holding a sand-colored palm stone on a speckled counter.",
      credit: ""
    },
    fidgets: {
      src: "images/heroes/collection.jpg",
      alt: "AI illustration of six fidgets arranged on an oak table. Not photographs of finished fidgets.",
      credit: "AI illustration."
    },
    how: {
      src: "images/heroes/packing.jpg",
      alt: "AI illustration of fidgets beside a small kraft box, tissue, and twine. Not a photograph of a delivery.",
      credit: "AI illustration."
    },
    about: {
      src: "images/heroes/workbench.jpg",
      alt: "AI illustration of a maker’s workbench with a small printer, filament, and fidgets. Not a photograph of Hendrik or his home.",
      credit: "AI illustration."
    },
    request: {
      src: "images/heroes/note.jpg",
      alt: "AI illustration of fidgets beside a blank card and an open envelope. Not a photograph of a request.",
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
    "Printed in sanded PLA, with large parts and rounded edges. Not every design will suit every person.";
})(window);
