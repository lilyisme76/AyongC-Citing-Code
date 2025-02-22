
// Reference: https://p5js.org/examples/animation-and-variables-drawing-lines.html
// Reference: https://editor.p5js.org/alexanderchen/sketches/OBm3LsLK8

let colourPicker;
let strokeWeightSlider;
let bgColourPicker;
let isAnimating = false;
let angle = 0;

function setup(){
    let canvas = createCanvas(720, 300);
    canvas.parent('canvas-container');

    colourPicker = createColorPicker('deeppink');
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    bgColourPicker = createColorPicker('lightblue');

    let bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed(repaint);

    background(bgColourPicker.value());
}


// ✨ Function: Allows Freehand Drawing
function draw() {
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function drawUserDrawing() {
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());

    if (mouseIsPressed) {
        let point = { 
            x1: mouseX, y1: mouseY, 
            x2: pmouseX, y2: pmouseY, 
            weight: strokeWeightSlider.value(), 
            color: colourPicker.value() 
        };
        drawing.push(point);
        line(point.x1, point.y1, point.x2, point.y2);
    }
}

function replayDrawing() {
    if (replayIndex < drawing.length) {
        let point = drawing[replayIndex];

        stroke(point.color);
        strokeWeight(point.weight);
        line(point.x1, point.y1, point.x2, point.y2);

        replayIndex++;
    } else {
        isReplaying = false; 
    }
}




function generateRandomPattern() {
    background(bgColourPicker.value());
    for (let i = 0; i < width; i += 40) {
        for (let j = 0; j < height; j += 40) {
            fill(random(255), random(255), random(255));
            rect(i, j, 30, 30);
        }
    }
}

// ✨ Function: Resets the Canvas
function repaint(){
    background(bgColourPicker.value());
}

