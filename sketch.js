//해결해야 하는 것들
//multitouch는 됨 -> 화음 연주 가능하게 발전
//mousePressed, mouseX, mouseY를 사용 중이다
//문제점: mouseX -> touches.x 로 변환 시 작동 자체는 됨
//근데 전체 건반 중 마지막 건반에서만 소리가 난다 <<왜???

let vol=0.01;

var oscil;
var freq;
var amp;

function setup() {
  createCanvas(displayWidth, displayHeight);
  oscil = new p5.Oscillator("sine");
  
  //볼륨 업 버튼
  AmpUpButton = createButton('volume up');
  AmpUpButton.position(70,430);
  AmpUpButton.size(55,55);
  AmpUpButton.mouseClicked(AmpUp); //touches로 바꾸기
  
  //볼륨 다운 버튼
  AmpDownButton = createButton('volume down');
  AmpDownButton.position(150,430);
  AmpDownButton.size(55,55);
  AmpDownButton.mouseClicked(AmpDown);

}

function draw() {
  background(220);
 
  text("[volume control]", 50,420);
  text("볼륨: " + vol, 160, 420);
  
  
  fill(255, 255, 255);

  rect(0, 0, 100, 400); //C3
  rect(100, 0, 100, 400); //레
  rect(200, 0, 100, 400); //미
  rect(300, 0, 100, 400); //파
  rect(400, 0, 100, 400); //솔
  rect(500, 0, 100, 400); //라
  rect(600, 0, 100, 400); //시
  rect(700, 0, 100, 400); //C4

  //기울기에 따라 검은건반 색 바뀌기
  
  fill(rotationX,rotationY, rotationZ);
  rect(60, 0, 80, 200); //C#3
  fill(0,rotationY,rotationZ);
  rect(160, 0, 80, 200); //레#
  fill(rotationY, rotationX, rotationZ);
  rect(360, 0, 80, 200); //파#
  fill(rotationZ, 38, rotationX);
  rect(460, 0, 80, 200); //솔#
  fill(rotationX, rotationZ, rotationY);
  rect(560, 0, 80, 200); //라#
  fill(rotationZ, rotationX, 172);
  rect(760, 0, 40, 200); //C#4

  //기울기 정보 화면에 표시
  console.log(rotationX);
  text(rotationX, 250, 430);
  text(rotationY, 250, 450);
  text(rotationZ, 250, 470);
  
  //multitouch array로 받고 touch 부분 표시하기
  fill('magenta');
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 50, 90);
  }
}

//피아노 소리
function mousePressed() {
  if (mouseX <= 60 && mouseY < 400) {
    //C3-1
    console.log("C3");
    oscil.freq(262);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX >= 60 && mouseX < 100 && mouseY > 200 && mouseY < 400) {
    //C3-2
    console.log("C3");
    oscil.freq(262);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX > 100 && mouseX < 200 && mouseY >= 200 && mouseY < 400) {
    //D3-1
    console.log("D3");
    oscil.freq(294);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 140 && mouseX < 160 && mouseY <= 200) {
    //D3-2
    console.log("D3");
    oscil.freq(294);
    oscil.amp(vol);
    oscil.start();

  }
  if (mouseX > 200 && mouseX <= 240 && mouseY > 200 && mouseY < 400) {
    //E3-1
    console.log("E3");
    oscil.freq(330);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX >= 240 && mouseX < 300 && mouseY < 400) {
    //E3-2
    console.log("E3");
    oscil.freq(330);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 300 && mouseX <= 360 && mouseY < 400) {
    //F3-1
    console.log("F3");
    oscil.freq(349);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX >= 360 && mouseX < 400 && mouseY > 200 && mouseY < 400) {
    //F3-2
    console.log("F3");
    oscil.freq(349);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX > 400 && mouseX < 500 && mouseY >= 200 && mouseY < 400) {
    //G3-1
    console.log("G3");
    oscil.freq(392);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX > 440 && mouseX < 460 && mouseY <= 200) {
    //G3-2
    console.log("G3");
    oscil.freq(392);
    oscil.amp(0.2);
    oscil.start();
  }

  if (mouseX > 500 && mouseX < 600 && mouseY >= 200 && mouseY < 400) {
    //A3-1
    console.log("A3");
    oscil.freq(440);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 540 && mouseX < 560 && mouseY <= 200) {
    //A3-2
    console.log("A3");
    oscil.freq(440);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX > 600 && mouseX <= 640 && mouseY > 200 && mouseY < 400) {
    //B3-1
    console.log("B3");
    oscil.freq(494);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX >= 640 && mouseX < 700 && mouseY < 400) {
    //B3-2
    console.log("B3");
    oscil.freq(494);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX > 700 && mouseX <= 760 && mouseY < 400) {
    //C4-1
    console.log("C4");
    oscil.freq(524);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX >= 760 && mouseX < 800 && mouseY > 200 && mouseY < 400) {
    //C4-2
    console.log("C4");
    oscil.freq(524);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 60 && mouseX < 140 && mouseY < 200) {
    //C#3
    console.log("C#3");
    oscil.freq(277);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 160 && mouseX < 240 && mouseY < 200) {
    //D#3
    console.log("D#3");
    oscil.freq(311);
    oscil.amp(vol);
    oscil.start();
  }
 

  if (mouseX > 360 && mouseX < 440 && mouseY < 200) {
    //F#3
    console.log("F#3");
    oscil.freq(370);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 460 && mouseX < 540 && mouseY < 200) {
    //G#3
    console.log("G#3");
    oscil.freq(415);
    oscil.amp(vol);
    oscil.start();
  }
  
  if (mouseX > 560 && mouseX < 640 && mouseY < 200) {
    //A#3
    console.log("A#3");
    oscil.freq(466);
    oscil.amp(vol);
    oscil.start();
  }

  if (mouseX > 760 && mouseX < 800 && mouseY < 200) {
    //C#4
    console.log("C#4");
    oscil.freq(554);
    oscil.amp(vol);
    oscil.start();
  }
}

function mouseReleased() {
  oscil.stop();
  // oscil.amp(0, 0.3, 0.1);

}


//볼륨 조절
function AmpUp(){
  if (0 <= vol <= 1){
  vol = vol + 0.1;
  console.log(vol);
  }
  if (vol>1){
    vol = 1;
    console.log(vol);
  }
  if(vol < 0){
    vol = 0;
    console.log(vol);
  }
  }


function AmpDown(){
  if (0<= vol <= 1){
     vol = vol - 0.1;
     console.log(vol);
  }
    if (vol>1){
    vol = 1;
    console.log(vol);
  }
  if(vol < 0){
    vol = 0;
    console.log(vol);
  }
  }

 
