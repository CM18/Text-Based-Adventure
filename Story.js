var coachSatifaction = 0;
var energy = 100;
var inventory = [] ;
function pushNew(){
  document.getElementById("inv_box").innerHTML= inventory;
}
var goalCommentary = new Audio ("Ray Hudson - Best Commentary Moments (1).mp3");

document.getElementById("s1").style.display="block"

document.getElementById('s1c1').addEventListener("click", function(){
document.getElementById('s2').style.display="block";
document.getElementById('s1c2').style.display='none';

coachSatifaction = coachSatifaction + 10;
alert("your coach satisfaction is now: " + coachSatifaction);
inventory.push("Passer Badge");
pushNew();

});

document.getElementById('s1c2').addEventListener("click", function(){
document.getElementById('s3').style.display="block";
document.getElementById('s1c1').style.display='none';
inventory.push("Agressive Badge");
pushNew();
});

document.getElementById('s2c1').addEventListener('click', function(){
document.getElementById('s4').style.display='block';
document.getElementById('s2c2').style.display='none';
energy=energy-10;
alert("Your energy is now: "+energy);
goalCommentary.play();
inventory.push("Scorer Badge");
pushNew();
});

document.getElementById('s2c2').addEventListener("click", function(){
document.getElementById('s5').style.display="block";
document.getElementById('s2c1').style.display='none';

});

document.getElementById('s3c1').addEventListener("click", function(){
document.getElementById('s6').style.display="block";
document.getElementById('s3c2').style.display='none';

});

document.getElementById('s3c2').addEventListener("click", function(){
document.getElementById('s7').style.display="block";
document.getElementById('s3c1').style.display='none';
energy=energy-10;
alert("Your energy is now: "+energy);

if (energy <=70){

  alert("You are to tired to play. Your coach takes you out of the game. Game Over");
  location.reload();
}

});
