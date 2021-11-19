function preload(){
    }
    function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
        c=createCapture(VIDEO);
        c.size(300,300);
        c.hide();
        pose=ml5.poseNet(c,m);
        pose.on("pose",m2);
    }
    function draw(){
    image(c,0,0,300,300);
    }
    function m(){
        console.log("hello");
    }
    function ts(){
        save("NothingIsHere.png");
    }
    function m2(results){
        if(results.length>0){
        console.log(results);
        console.log("x is"+ results[0].pose.nose.x);
        console.log("y is"+ results[0].pose.nose.y);
       }
    }