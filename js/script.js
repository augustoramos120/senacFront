function menushow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = ".icons/baricon.png";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = ".icons/close.png";
    }
}


  //var count = 0;

  //function playPause(){
   // if(count == 0){
     //   count = 1;
      //  audio.play();
   // }else{
     //   count = 0;
     //   audio.pause();
    //}
  //}

  var audio = new Audio('audio/audio-index/frase-index.mp3');
      
  function playAudio() {
    audio.play();
  }
  var count = 0;

  //function playPause(){
   // if(count == 0){
     //   count = 1;
      //  audio.play();
   // }else{
     //   count = 0;
     //   audio.pause();