const menuToggle = document.querySelector('.menu-toggle input');
const navBar = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  navBar.classList.toggle('slide');
});

//Get the button
var mybutton = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
