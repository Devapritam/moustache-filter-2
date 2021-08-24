noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/mDCcGL4x/image-removebg-preview-13.png");
}

function setup() {
    canvas = createCanvas(400, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 340);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save('MyFilterImage.png')
}

function modelLoaded() {
    window.alert('PoseNet Model Has Been Successfully Loaded');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 162;
        noseY = results[0].pose.nose.y - 80;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 400, 340);
    // fill(255, 0, 0);
    // stroke(255, 0, 0);
    // circle(noseX, noseY, 20);
    image(moustache, noseX, noseY, 320, 140);
}
