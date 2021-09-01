
var nav = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
var list = nav.getElementsByClassName("listitem");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction(clickedId,txt,dot) {
  var dots = document.getElementById(dot);
  var moreText = document.getElementById(txt);
  var btnText = document.getElementById(clickedId);

  if (dots.style.display ==="none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function showProfile(){
  var p=document.getElementById("profile");
  p.style.display="block";
  if(p.style.display=="none")
    p.style.display="block";
}