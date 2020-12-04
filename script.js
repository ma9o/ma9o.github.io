const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
var imagesArray = [
  "https://images-na.ssl-images-amazon.com/images/I/811ZPN%2B7KML._AC_SL1500_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/6/6a/Braidlogo.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png",
  "https://images-na.ssl-images-amazon.com/images/I/71UQZy7HEjL._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51lWXIqX9PL._AC_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9f/Waltz_with_Bashir_Poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51P24AAS71L._SY445_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/a/a4/Ascent_poster.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTFmMzUzN2ItNmU3OS00ZmQxLTg1ODMtNjJjM2E4OWFkYWI5XkEyXkFqcGdeQXVyNTA1NjYyMDk@._V1_FMjpg_UY872_.jpg",
  "https://m.media-amazon.com/images/I/51+KQqz2SJL.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9d/SICP_cover.jpg",
  "http://www.libreriamedievale.com/sites/default/files/confessioni%209788811584391.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51I4+6aYJ3L._SX326_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51DST-PS8hL._SX331_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51AbtV8zFkL._SX295_BO1,204,203,200_.jpg",
  "https://m.media-amazon.com/images/I/51yIXAsd4fL.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570956428l/537094._SY475_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71QchwVeB%2BL._SY445_.jpg",
  "https://laplumefrancophone.files.wordpress.com/2016/09/camus-l_c3a9tranger.jpg?w=284&h=481",
  "https://media.adelphi.it/spool/546fa8b0202e1a74759ecf9fa76c1bf6_w600_h_mw_mh_cs_cx_cy.jpg",
  "https://www.mondojapan.net/wp-content/uploads/2018/08/6.jpg",
  "https://m.media-amazon.com/images/I/41w52FCezEL._SY346_.jpg",
  "https://m.media-amazon.com/images/I/419eYPcjeaL._SY346_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41zUeBe6NeL._SX331_BO1,204,203,200_.jpg",
];

shuffleArray(imagesArray);

console.log(imagesArray.length);

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  World = Matter.World,
  Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
  world = engine.world;

// create renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: vw,
    height: vh,
    wireframes: false,
  },
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

const MAX_WIDTH = 120;

const N_PER_ROW = 8;

imagesArray.forEach((src, idx) => {
  const img = new Image();
  img.onload = function () {
    const x = 100 + ((idx * MAX_WIDTH) % (MAX_WIDTH * N_PER_ROW));
    const y = Math.floor(idx / N_PER_ROW) * 300;

    const width = this.width > MAX_WIDTH ? MAX_WIDTH : this.width;
    const height = (width * this.height) / this.width;

    const rec = Bodies.rectangle(x, y, width, height, {
      render: {
        sprite: {
          xScale: width / this.width,
          yScale: height / this.height,
          texture: this.src,
        },
      },
    });

    World.add(world, rec);
    const angle = Math.round(Math.random() * 90) - 90;
    Matter.Body.rotate(rec, angle);
  };
  img.src = src;
});

var walls = [
  Bodies.rectangle(vw / 2, 0, vw, 50, { isStatic: true }),
  Bodies.rectangle(vw / 2, vh, vw, 50, { isStatic: true }),
  Bodies.rectangle(vw, vh / 2, 50, vh, { isStatic: true }),
  Bodies.rectangle(0, vh / 2, 50, vh, { isStatic: true }),
];
World.add(world, walls);

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: vw, y: vh },
});
