let song;
let slider;

function setup() {
  createCanvas(200,200);
  song = loadSound("assets/coalesce.mp3", loaded);
  slider = createSlider(0,1,0.1,0.01);
}

function loaded() {
  song.play();
}

function draw() {
  background(0);
  song.setVolume(slider.value());
}