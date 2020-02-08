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
  noStroke();
  fill(0, 255, 255);
  //---------------------------------------------------------
  //CUSTOM FREQUENCY BARS
  // let bass = fft.getEnergy(20, 80);
  // let lowMid = fft.getEnergy(80, 200);
  // let mid = fft.getEnergy(200, 500);
  // let speach = fft.getEnergy(500, 800);
  // let highMid = fft.getEnergy(800, 1400);
  // let lowHigh = fft.getEnergy(1400, 2500);
  // let high = fft.getEnergy(2500, 8000);
  // let highHigh = fft.getEnergy(8000, 20000);
  // if(bass > 100) {
  //   let bassh = -height + map(bass, 101, 255, height, 0);
  //   rect(10, height, 40, bassh);
  // }
  // if(lowMid > 100) {
  //   let lMh = -height + map(lowMid, 101, 255, height, 0);
  //   rect(60, height, 40, lMh);
  // }
  // if(mid > 100) {
  //   let midh = -height + map(mid, 101, 255, height, 0);
  //   rect(110, height, 40, midh);
  // }
  // if(speach > 100) {
  //   let speachh = -height + map(speach, 101, 255, height, 0);
  //   rect(160, height, 40, speachh);
  // }
  // if(highMid > 100) {
  //   let hmh = -height + map(highMid, 101, 255, height, 0);
  //   rect(210, height, 40, hmh);
  // }
  // if(lowHigh > 100) {
  //   let lhh = -height + map(lowHigh, 101, 255, height, 0);
  //   rect(260, height, 40, lhh);
  // }
  // if(high > 100) {
  //   let highh = -height + map(high, 101, 255, height, 0);
  //   rect(310, height, 40, highh);
  // }
  // if(highHigh > 100) {
  //   let hhh = -height + map(highHigh, 101, 255, height, 0);
  //   rect(360, height, 40, hhh);
  // }
                  
  // --------------------------------------------------------
  // FULL SPECTRUM ANALYZER
  let spectrum = fft.analyze();
  for (var i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h );
  }
  if(song.currentTime() > 1) {
    song.rate(sliderRate.value());
  }
}