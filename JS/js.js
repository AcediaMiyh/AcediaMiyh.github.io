window.onload = function() {
  var i = 0;
  setInterval(left,3000);
  function left() {
    var slide = document.getElementById("lin");
    i = i - 300;
    if (i < -900) {
      i = 0;
    }
    slide.style.left = i + "px";
  }
};
