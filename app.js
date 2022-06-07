const alertMsg=document.getElementById("alertArea");
const remainMsg=document.getElementById("remainNumber");
const endMsg=document.getElementById("remain");
let i = 0;
let txt = 'Guess The Number!..';
let speed = 100; 
let finishPoint=true;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headerText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
let remain=5;
remainMsg.innerHTML=remain;
 let theMainNumber= Math.floor(Math.random()*100+1);
console.log(theMainNumber);
 for(guess=1; guess<6; guess++) {
 (document.getElementById("submitguess").onclick ||  =function guess() {
     let userNumber= document.getElementById("userGuess").value;

     if(theMainNumber==userNumber){
         guess=5;
        alertMsg.innerHTML="CONGRATULATIONS!...";
        endMsg.innerHTML="SEE YOU SOON AGAIN DUDE!"

     }else if(theMainNumber<userNumber){
        alertMsg.innerHTML="TRY A SMALLER NUMBER!...";
        remain--;
     }else{
         alertMsg.innerHTML="TRY A GREATER NUMBER!...";
         remain--;
     }
     if(remain==0){
         alertMsg.innerHTML="THIS IS END OF THE GAME!...";
         endMsg.innerHTML="SEE YOU SOON AGAIN DUDE!"
     }
     if(remain>0 && remain<5){
     remainMsg.innerHTML=remain;}
 }}

 function resetButton(){
    window.location.reload();
   }
