function preload() {}

function setup() {
    canvas = createCanvas(400, 340);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 340);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 340);
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
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}