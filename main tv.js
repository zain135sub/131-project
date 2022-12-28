function back_tv(){
    window.location="index main.HTML"
}
img_tv=""
status=""
objects=[]
function preload(){
    img_tv=loadImage("tv and ac.webp")
}
function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modalloaded)
    document.getElementById("status_tv").innerHTML="status:Detecting Objects"
}
function modalloaded(){
    console.log("modal is loaded!!")
    objectDetector.detect(img_tv,gotResult)
    status=true
}
function draw(){
    image(img_tv,0,0,640,420)

    if(status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status_tv").innerHTML=" status:Object Detected"
            document.getElementById("number_objects").innerHTML="number of objects detected are:"+objects.length
            fill("#03fc17")
            percent=floor(objects[i].confidence*100)
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill()
            stroke("#03fc17")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}
function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects=results
    }
}