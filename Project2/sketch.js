// Alexa Forberg
// Project 2



let isPlaying = false;
let b;
let bar;
let BarX;
let BarY;
let barHeight = 9;
let barWidth = 112;
let barColor;


let barColors;

function setup() {
    createCanvas(600, 600);
    background("#d6d6d6");
    noStroke();
    b = new Ball(300, 0);

    BarX = 244;
    BarY = 579;

    barColor = "#A6206A";

    barColors = ["#A6206A", "#EC1C4B", "#F16A43", "#F7D969", "#2F9395", "#30ff33", "#663399", "#5AD", "#5A17ED", "#0FF1C3"];
}

function draw() {

    background("#d6d6d6");

    //beginning screen actions
    if (isPlaying == false) {
        gradient();
        startButton();

    }
    //playing game actions
    if (isPlaying == true) {
        b.display();
        b.move();
        b.bounce();
        b.wrap();

        barCreation(barColor);

        //ball hit 
        if (b.x > BarX &&
            b.x < BarX + barWidth &&
            b.y + b.size / 2 > BarY &&
            b.y + b.size / 2 < BarY + barHeight * 3) {
            console.log("hit"); // just checking its called
            barColor = random(barColors);
            console.log(random(barColors));
            b.deltaY = -Math.abs(b.deltaY);

        }

    }
}


// creating the start button
function startButton() {



    fill("#66032c");
    noStroke();
    rect(181, 247, 200, 80, 10);

    fill("#B01055 ");
    noStroke();
    rect(190, 236, 200, 80, 10);

    textSize(46);
    fill("#fffff");
    text("Play", 245, 291);


}

// mouse clicks the play button
function mouseClicked() {

    if (mouseX > 190 && mouseX < 390 && mouseY > 236 && mouseY < 316) {
        isPlaying = true;

    }

}

// creating the bar
function barCreation(color) {

    fill(color);
    bar = rect(BarX, BarY, barWidth, barHeight);


}

// moving with keys
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        BarX -= 60;
    }

    if (keyCode === RIGHT_ARROW) {
        BarX += 60;

    }

    if (keyCode === UP_ARROW) {
        BarY -= 20;

    }

    if (keyCode === DOWN_ARROW) {
        BarY += 20;


    }


}

//gradient
function gradient() {

    var i = 0;
    while (i < 600) {
        stroke(255, 199, i / 2); 
      
        line(0, i, width, i);
        i++;
    }
}

