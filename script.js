const imagesArray = [
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
  "https://seeklogo.com/images/E/erlang-logo-025A1D4DFC-seeklogo.com.png",
  "https://www.bitmat.it/wp-content/uploads/2014/07/Red-Hat.jpg",
  "https://3u26hb1g25wn1xwo8g186fnd-wpengine.netdna-ssl.com/files/2019/06/mozilla-logo-bw-rgb-1024x293.png",
  "https://e.snmc.io/i/300/s/fd8f5828efb56a9ef0d3d1d0523f2512/2317304",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
  "https://e.snmc.io/i/300/s/05c3aaa99d8d855bb50f763450efd9e4/6902522",
  "https://t2.genius.com/unsafe/1203x0/https%3A%2F%2Fimages.genius.com%2F7328b00fe1166bece35a926ede9974bd.1000x1000x1.jpg",
  "https://e.snmc.io/i/300/s/9cbac30794b1949058d7843c000ce548/1921759",
  "https://e.snmc.io/i/300/s/8531fa769eb42c16ca0efa5df54f9480/1934344",
  "https://e.snmc.io/i/300/s/4fabfba87a1fe2bbe17d35cd8eb80931/1353614",
  "https://e.snmc.io/i/300/s/a4f0a796a13bad6343a1e8bf97de3c59/2295231",
  "https://e.snmc.io/i/300/s/f6b85186e76903b082546c0a3da5f719/4316688",
  "https://e.snmc.io/i/300/s/0a32aabc1670258f8997c0448ff85a98/2161189",
  "https://e.snmc.io/i/300/s/a96069f98816b4f959fc7975dde7af64/1335429",
  "https://e.snmc.io/i/300/s/6e7119c95fe85a48fff1bbd03d887e6f/2405956",
  "https://www.lifegate.it/app/uploads/stalker-stanza.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Alice%27s_Adventures_in_Wonderland_cover_%281865%29.jpg",
  "https://www.mam-e.it/wp-content/uploads/2019/10/mame-arte-umberto-boccioni-e-larte-in-movimento2-1280x620.jpg",
  "https://artinwords.de/wp-content/uploads/bosch-garten-der-lueste-versuchung-des-hl-antonius/Hieronymus-Bosch-Der-Garten-der-Lueste-lebensbrunnen-1024x506.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/DIT-FFT-butterfly.png",
  "https://mokuhankan.com/flea_market/images/Y022.jpg",
  "https://upload.wikimedia.org/wikipedia/en/4/4c/LLVM_Logo.svg",
];

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

shuffleArray(imagesArray);

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  World = Matter.World,
  Bodies = Matter.Bodies;

const engine = Engine.create(),
  world = engine.world;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: vw,
    height: vh,
    wireframes: false,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

const MAX_WIDTH = vh / 8;
const N_PER_ROW = 12;

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

const walls = [
  Bodies.rectangle(vw / 2, 0, vw, 50, { isStatic: true }),
  Bodies.rectangle(vw / 2, vh, vw, 50, { isStatic: true }),
  Bodies.rectangle(vw, vh / 2, 50, vh, { isStatic: true }),
  Bodies.rectangle(0, vh / 2, 50, vh, { isStatic: true }),
];

World.add(world, walls);

const mouse = Mouse.create(render.canvas),
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

render.mouse = mouse;

Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: vw, y: vh },
});
