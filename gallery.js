/* girls.js - Interaktywna Galeria
 * Plik gallery.js
 * Tutaj będziemy dodawać nasz kod. 
 */
 let currentNumber = 1 ;
 let playing = false;
 let slideshowInterval;
 const slideNumbers = [1, 2, 3, 4, 5];
 const photos = Array.from(document.querySelectorAll(".photo"));
 document.querySelector("#pin1").classList.add("selected");
 

for (let i = 1; i <= slideNumbers.length; i++ ){
    document.querySelectorAll(".photo")[i-1].classList.add("slide"+i);
}
document.querySelector("#pin1").addEventListener("click", function () {showSlide(1)});

// function showSlide2 () {
//     showSlide(2);
//   }
// document.querySelector("#pin2").addEventListener("click", showSlide2);

// function showSlide3 () {
//     showSlide(3);
//   }
// document.querySelector("#pin3").addEventListener("click", showSlide3);

// function showSlide4 () {
//     showSlide(4);
//   }
// document.querySelector("#pin4").addEventListener("click", showSlide4);

// function showSlide5 () {
//    showSlide(5);
//   }
// document.querySelector("#pin5").addEventListener("click", showSlide5);
photos.map((element)=> element +1)

function selectPin(newNumber) {
    document.querySelector(".selected").classList.remove("selected");
    document.querySelector("#pin"  + newNumber).classList.add("selected");
    }


 function showSlide(newNumber) {
    console.log( document.querySelector(".photo slide2"))
    document.querySelector(".show").classList.remove("show");
    document.querySelector(".slide" + newNumber).classList.add("show");
    selectPin(newNumber);
    currentNumber = newNumber; 
}

for (let nrPinu = 1; nrPinu <= slideNumbers.length; nrPinu++){
    document.querySelector("#pin"+ nrPinu ).addEventListener("click", function(){showSlide(nrPinu)});     
}s

function showNextSlide () {
    
    let newNumber = currentNumber + 1;
    console.log(newNumber)
    if (newNumber > slideNumbers.length){
        newNumber = 1;
    }
    showSlide(newNumber)
    }
document.querySelector("#next").addEventListener("click", showNextSlide );

function showPreviousSlide() {
    let newNumber = currentNumber - 1;
    console.log(newNumber)
    if (newNumber < 1){
        newNumber = slideNumbers.length;
    }
    showSlide(newNumber)
}

document.querySelector("#prev").addEventListener("click", showPreviousSlide );

function playButtonClicked (){
if (playing === true) {
    stopSlideshow();
}
else{
    startSlideshow();
}
};

document.querySelector("#play").addEventListener("click", playButtonClicked);

function startSlideshow (){
    document.querySelector("#play").classList.add("on");
    playing = true;  
    slideshowInterval = setInterval(showNextSlide, 3000);
}  



function stopSlideshow (){
    document.querySelector("#play").classList.remove("on");
    playing = false;  
    clearInterval(slideshowInterval);
}