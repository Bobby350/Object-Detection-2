img = ""

function preload() {
    img = loadImage("lving.jpg")
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("#05EAFF")
    text("Couches", 50, 275)
    noFill()
    stroke("#25C2D5")
    rect(2, 160, 635, 250)
}