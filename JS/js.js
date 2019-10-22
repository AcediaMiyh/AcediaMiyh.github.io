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
  var click = 0;
  document.getElementById("button").onclick = function() {
    if (click == 0) {
      document.getElementById("text").append("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae temporibus ullam perspiciatis laudantium! Possimus nemo eius accusantium nesciunt laborum autem aperiam necessitatibus fuga. Cumque, magni. Deleniti repellendus ipsum repudiandae expedita.Officia necessitatibus sed illo beatae, deleniti nobis earum dicta blanditiis molestiae. Quae illo quis aperiam delectus natus adipisci, nulla suscipit ipsum architecto, impedit cupiditate! Nihil dolor explicabo tempore aliquam quod.Voluptatum nulla quis, mollitia numquam totam minima labore eveniet libero laborum soluta nostrum exercitationem voluptate sit officia nesciunt suscipit quos ullam assumenda cupiditate. Doloribus quos qui cum dignissimos atque iure!");
      click = 1;
    }
    else{
      document.getElementById("text").innerHTML = "";
      click = 0;
    }
  };
};
