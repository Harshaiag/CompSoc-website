let a = 1;
let aChange = 0.1;
let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); // Adjust the height to fit the banner
    canvas.parent('p5Canvas'); // Place the canvas in the banner element
    background(0); // Set the background to black
    canvas.style('z-index', '-2');
    canvas.position(0, 0);
    pixelDensity(1);

}

function draw() {
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let val = tan((x - width / 2) ** 2 + (y - height / 2) ** 2);
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
    }
}
			