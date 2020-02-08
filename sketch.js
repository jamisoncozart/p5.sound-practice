let song;
let sliderRate;
let button;

function setup() {
  createCanvas(200,200);
  song = loadSound("assets/coalesce.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  song.setVolume(0.5);
  sliderRate = createSlider(0.5,1.5,1,0.01);
}

function loaded() {
  console.log("song loaded");
}

function togglePlaying() {
  if(!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}

function draw() {
  background(0);
  song.rate(sliderRate.value());
}