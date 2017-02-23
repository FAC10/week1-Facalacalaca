window.onload = function(){

//Modal
var git = "https://github.com/";
var codewars = "https://codewars.com/users/";
var linkedIn = "https://www.linkedin.com/in";

var links = [git+"smarthutza", codewars+"smarthutza", linkedIn+"smarhutza",
git+"alexis-l8", codewars+"alexis-l8", linkedIn + "alexisluiccaf",
git+"samatar26", codewars+"samatar26", linkedIn + "",
git+"ConchobarMacNessa", codewars+"aec58", linkedIn + "alice-eleanor-carr-207b1a77" ]

var name = document.getElementById("name");
var text=document.getElementById("text");
var socialLinks = document.getElementsByClassName("socialLinks");
for (var i = 0; i<3; i++){
  console.log(socialLinks[i].href);
}

var alexis = document.getElementById("alexis");
var alice = document.getElementById("alice");
var martha = document.getElementById("martha");
var samatar = document.getElementById("samatar");
var profiles = [alexis, alice, martha, samatar];


var modal = document.getElementById("modaljs");
var closeButton = document.getElementById("closeButton")


function fullModal(ev){
    modal.style.display="block";
    if(ev.target===alexis){
      for (var i = 0; i<3; i++){
        socialLinks[i].href=links[i+3];
      }
      name.style.background="black";
      name.innerText = "Alexis";
      text.innerText = "Alexis has plans to take over the world, what a world it would be indeed."
    }
    if(ev.target===alice){
      for (var i = 0; i<3; i++){
        socialLinks[i].href=links[i+9];
      }
      name.innerText="Alice";
      name.style.background="red";
      text.innerText = "Alice wants to travel the world."

    }
    if(ev.target===samatar){
      for (var i = 0; i<3; i++){
        socialLinks[i].href=links[i+6];
      }
      name.innerText="Samatar";
      name.style.background="black"
      text.innerText = "Samatar wants to improve his coding skills to the point he can do it in his sleep."

    }
    if(ev.target===martha){
      for (var i = 0; i<3; i++){
        socialLinks[i].href=links[i];
      }
      name.innerText="Martha";
      name.style.background="red";
      text.innerText = "Martha wants to live in a cottage house in the country in Romania."

    }
}

function closeModal(){
  modal.style.display = "none";
}

function modalClose() {
    if(event.target == modal) {
      modal.style.display="none";
    }
}



window.addEventListener("click", modalClose);
for (var i = 0; i<4; i++){
  profiles[i].addEventListener("click", fullModal);
}
alexis.addEventListener("click", fullModal);
closeButton.addEventListener("click", closeModal);

















// SMOOTH SCROLLING - Pure Javascript - Credit: http://web.archive.org/web/20140103045600/http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

function currentYPosition() {
    if (window.pageYOffset) return window.pageYOffset; //pageXOffset and pageYOffset properties returns the pixels the current document has been scrolled from the upper left corner of the window, horizontally and vertically
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;	// option for bi-directional scrolling
    if (distance < 10) {
        scrollTo(0, stopY); return;					// does not scroll if too close
    }
    var speed = Math.round(distance / 100);			// speed if faster is destination is further away
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;	// increments to leap after every delay
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

}
