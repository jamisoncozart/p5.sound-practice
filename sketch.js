let song;
let sliderRate;
let button;
let amp;

function setup() {
  createCanvas(200,200);
  song = loadSound("assets/coalesce.mp3", loaded);
  song.setVolume(0.3);
  amp = new p5.Amplitude();
  console.log(amp);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
  song.setVolume(0.5);
  sliderRate = createSlider(0.5,1.5,1,0.01);
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
  background(40);
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.5, 10, 200);
  fill(0, 200, 255);
  ellipse(width/2, height/2, diam, diam)
  if(song.currentTime() > 1) {
    song.rate(sliderRate.value());
  }
}