let song;
let sliderRate;
let button;
let amp;

function setup() {
  createCanvas(600,200);
  song = loadSound("assets/coalesce.mp3", loaded);
  fft = new p5.FFT(0.6);
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
  background(60);
  let spectrum = fft.analyze();
  let bass = fft.getEnergy("bass");
  // let lowMid = fft.getEnergy(80, 200);
  // let mid = fft.getEnergy(200, 500);
  // let speach = fft.getEnergy(500, 800);
  // let highMid = fft.getEnergy(800, 1400);
  // let lowHigh = fft.getEnergy(1400, 2500);
  // let high = fft.getEnergy(2500, 8000);
  // let highHigh = fft.getEnergy(8000, 20000);
  // let bass = fft.getEnergy("bass");
  // let lowMid = fft.getEnergy("lowMid");
  // let mid = fft.getEnergy("mid");
  // let highMid = fft.getEnergy("highMid");
  // let treble = fft.getEnergy("treble");
  
  noStroke();
  fill(0, 255, 255);
  if(bass > 100) {
    let h = -height + map(bass, 101, 255, height, 0);
    rect(10, height, 40, h);
  }

  // for (var i = 0; i< spectrum.length; i++){
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, width / spectrum.length, h );
  // }
  if(song.currentTime() > 1) {
    song.rate(sliderRate.value());
  }
}