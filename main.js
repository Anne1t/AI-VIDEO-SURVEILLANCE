video="";
staus="";

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 640, 420);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting...";
}

function modelLoaded(){
    console.log("Model is loaded!🌈");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

