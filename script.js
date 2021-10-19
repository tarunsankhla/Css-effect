var button_disperse = document.querySelector("#button-disperse");
var imagegun = document.querySelector("#gun");
var imagenoise = document.querySelector("#noise");

button_disperse.addEventListener('click', function(){
    var audio = document.getElementById("audio");
    audio.play();
   
    setTimeout(function(){
        window.location.href = 'https://www.google.co.in/';
    }, 13000);
    css_effect();
})

function css_effect(){
    imagenoise.style.transform = " translateX(-1px) scaleX(1)";


    imagegun.style.height= "400px";
	imagegun.style.transform=  "translateX(200px) scaleX(0)";
	imagegun.style.transition= "transform 3s ease";
	imagegun.style.width= "100%";
}
