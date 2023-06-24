const head = document.getElementById("header");
const img = ["img/img1.png","img/img2.png","img/img3.png","img/img4.png","img/img5.png","img/img6.png"]
var audio = document.getElementById("myAudio")


function reset() {
    head.innerHTML = "Let's Play the Game!"
}
function showHeader(head,para) {
    head.innerHTML = para
}


function playAudio() {
    audio.play();
  }

function pauseAudio() {
    audio.pause();
}

function audioDic(){
    let MyAudio = 
    `
     <source src="/music/ludo.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
    `
    audio.innerHTML = MyAudio;
    playAudio();


    
}
 

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function rotate(){
    audioDic();

    document.getElementById("img-dice").classList.add("img-dice-tr")
    var player1 =Math.floor(getRandomArbitrary(1,7))
    var player2 = Math.floor(getRandomArbitrary(1,7))
    const myTimeout = setTimeout(stp, 7000);

    function stp() {
        pauseAudio();
        document.getElementById("img-dice").classList.remove("img-dice-tr")
        DiceValue(player1, player2);
      }
      
    
}





function DiceValue(value1,value2){
    console.log(value1,value2);
    document.getElementById("pl1-dice").src = img[value1-1]
    document.getElementById("pl2-dice").src = img[value2-1]
    if (value1>value2){
        showHeader(head,"Player 1 won the game 🥳🥳!!");
        
    }else if(value2>value1){
        showHeader(head,"Player 2 won the game 🥳🥳!!");
    }else{
        showHeader(head,"Opps! It's Draw☹️☹️!!");
    }



}
function btn(){
    reset();
    rotate();
    
}

