var x = Math.floor(6*(Math.random())+1);
var y = Math.floor(6*(Math.random())+1);
const X = "images/dice"+x+".png";
const Y = "images/dice"+y+".png";
document.querySelector(".img1").setAttribute("src",X);
document.querySelector(".img2").setAttribute("src",Y);

if(x>y){
  document.querySelector("h1").innerHTML = "Player1 WINS!";
}
else if(x<y){
  document.querySelector("h1").innerHTML = "Player2 WINS!";
}
else if(x==y){
  document.querySelector("h1").innerHTML = "Draw! Refresh Again";
  document.querySelector("h1").style.fontSize = "5rem";
}
