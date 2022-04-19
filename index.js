/* first try
let targets = gsap.utils.toArray("#main");

targets.forEach((obj) => {
  obj.anim = gsap.to(obj, { height: 200 }).reversed(true);
  obj.addEventListener("click", switching);
});

function switching() {
  this.anim.reversed(!this.anim.reversed());
} */

/* second try
var 
$container=('#main');
tl1 = gsap.timeline({paused:true, repeat:1, yoyo:true}); // start paused 
tl1.to($container, {}) //transformOrigin =
.to($container, {duration:4, left:1000}, 0)

document.getElementById("switch").addEventListener("click", myFunction);
function myFunction() {
tl1.play();
}
 */


/*this one works fine to increment the size of the #main but I don't know how to stop it
and it disappears from frame. Also gotta search how to move the grids */
/* var logo = document.getElementById("main"),
tweenBtn = document.getElementById("switch");
  
logo.onclick = function() {
  //logo will animate 100px to the right of its current position
TweenLite.to(logo, 0.3, {scale:"+=0.3", onComplete:showScale});

};

function showScale() {
//logo.innerHTML = logo._gsTransform.scaleX;
console.log(logo._gsTransform)
} */


/* let switching = documement.getElementByClassName(".switch");
let box = document.getElementsByClassName(".copy__box--300x600");

switching.onclick = function(){
  box.animate({"width": "300px", "height": "600px"})
} */

/* //with onclick in html
  function myFunction() {
  document.getElementById("main").style.gridTemplateRows = "200px";

} */


const switching = document.getElementById("switch");
const frame1 = document.getElementById("frame1");


switching.addEventListener("click", function() {
  document.getElementById("frame1").style.gridTemplateRows = "60px";
  document.getElementById("frame1").style.alignItems = "center";
  /*   document.getElementById("frame1").style.top = "10px";
  document.getElementById("frame1").style.left = "100px"; */

  document.getElementById("frame2").style.gridTemplateRows = "200px";

  document.getElementById("frame3").style.gridTemplateRows = "150px";
  document.getElementById("frame3").style.alignItems = "center";
/*   document.getElementById("frame1").style.position = "absolute";
  document.getElementById("frame1").style.left = "130px"; */

  document.getElementById("logoprueba").style.gridTemplateRows = "55px";
  document.getElementById("logoprueba").style.position = "absolute";
  document.getElementById("logoprueba").style.top = "155px";
  document.getElementById("logoprueba").style.left = "10px"; 

/*   document.getElementById("frame1").style.position = "absolute";
  document.getElementById("frame1").style.top = "344px";
  document.getElementById("frame1").style.left = "130px"; */



});