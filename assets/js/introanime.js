let a = 1;
let aChange = 0.001;
let canvas;
let values = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    background(0);
    canvas.style('z-index', '-2');
    canvas.position(0, 0);
    pixelDensity(1);

    calculateValues();
}

function draw() {
    loadPixels();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let val = values[x][y];

            if (abs(val - a) < 0.01) {
                let pix = (x + y * width) * 4;
                pixels[pix + 0] = 0;
                pixels[pix + 1] = random(255);
                pixels[pix + 2] = random(255);
                pixels[pix + 3] = random(255);
            }
        }
    }

    updatePixels();

    a += aChange;

    if (a > 0.05 * PI || a < -0.05 * PI) {
        a = 0;
        calculateValues(); // Recalculate values when a reaches the limit
    }
}

function calculateValues() {
    values = [];

    for (let x = 0; x < width; x++) {
        values[x] = [];

        for (let y = 0; y < height; y++) {
            values[x][y] = tan((x - width / 2) ** 2 + (y - height / 2) ** 2);
        }
    }
}
