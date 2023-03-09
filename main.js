function preload(){
    img=loadImage("i.jpg");
}
function setup(){
    canvas=createCanvas(600, 600);
    canvas.position(850,80);
    video=createCapture(VIDEO);
    video.size(600,600)
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(img, 0,0,600,600);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}