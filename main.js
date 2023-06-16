var shutter = document.getElementById("shutter");
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

camera = document.getElementById("camera");
Webcam.set({


    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90,
    flip_horiz: true
});

function start()
{

    //use  recognition.start();
    recognition.start()
Content = "";

} 

recognition.onresult = function(event){
    console.log(event);
//extract the result using -- event.results[0][0].transcript
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("body").style.backgroundColor = Content;

    if(Content == "take my selfie"){
    console.log("taking selfie...");
    Webcam.attach(camera);
    speak();
    }else{
    speak2();
    }
}



function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
if(img_id=="selfie1"){
    shutter.play();
    document.getElementById("result1").innerHTML = '<img id="img1" src="'+data_uri+'"/>';
}
if(img_id=="selfie2"){
    shutter.play();
    document.getElementById("result2").innerHTML = '<img id="img2" src="'+data_uri+'"/>';
}
if(img_id=="selfie3"){
    shutter.play();
    document.getElementById("result3").innerHTML = '<img id="img3" src="'+data_uri+'"/>';
}
    });
}

function speak(){

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your first Selfie in 1, 2, 3, 4, 5";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

setTimeout(function(){

    img_id = "selfie1";
    //call   take_snapshot();
    take_snapshot();
    speak_data = "Next in 6, 7, 8, 9, 10";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},5000);

setTimeout(function(){

    img_id = "selfie2";
    take_snapshot();
    speak_data = "Last one 11, 12, 13, 14, 15";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},10000);

setTimeout(function(){

    img_id = "selfie3";
    take_snapshot();
},16000);



}

function speak2(){
    var synth = window.speechSynthesis;
    speak_data = "To use this app, say the command, take my selfie";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
