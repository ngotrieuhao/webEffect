var container = document.querySelector(".container");

for (let i = 0; i < 351; i++) {
  var square = document.createElement("div");
  let changeColor = randomColor();
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseenter", function (e) {
    let el = e.currentTarget;
    el.style.background = `${changeColor}`;
    el.style.boxShadow = `0 0 2px ${changeColor}, 0 0 100px ${changeColor}`;
  });
  square.addEventListener("mouseleave", function (e) {
    let el = e.currentTarget;
    el.style.background = "#1d1d1d";
    el.style.boxShadow = "0 0 2px #1d1d1d";
  });
}

function randomColor() {
  var charColor = "0123456789ABCDEF";
  var hash = "#";

  for (var i = 0; i < 6; i++) {
    hash += charColor[Math.floor(Math.random() * charColor.length)];
  }
  return hash;
}
