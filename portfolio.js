function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "Top_Navigation") {
      x.className += " responsive";
    } else {
      x.className = "Top_Navigation";
    }
  }
  function scrollToElement(element, duration) {
    var target = document.querySelector(element);
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  document.querySelector('a[href="#about_me"]').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToElement('#about_me', 600);
  });

  function loadPDF() {
    window.open("files/Kechi_emerole_resume_.pdf");
  } 
  

// JavaScript function to add/remove a class for styling the navigation bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var navbar = document.getElementById("myTopnav");
  if (window.pageYOffset >= 40) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
 