window.onload = function()
{
  var i = 0;
  setInterval(left,3000);
  function left()
  {
    var slide = document.getElementById("lin");
    i = i - 300;
    if (i < -900) 
    {
      i = 0;
    }
    slide.style.left = i + "px";
  }
  var click = 0;
  document.getElementById("button").onclick = function() 
  {
    if (click == 0)
    {
      document.getElementById("text").append("Lorem ignissimos atque iure!ipsum dolor sit amet, consectetur adipisicing elit. Molestiae temporibus ullam perspiciatis laudantium! ");
      click = 1;
    }
    else
    {
      document.getElementById("text").innerHTML = "";
      click = 0;
    }
  }
}
