var bigsmal = document.querySelectorAll(".preview");

for (var i = 0; i < bigsmal.length; i++) {
  var n = bigsmal[i].setAttribute("onmouseenter", "bigImg(this)");
  var o = bigsmal[i].setAttribute("onmouseleave", "normalImg(this)");
  var f = bigsmal[i].setAttribute("onfocus", "focusFunction()");
  var b = bigsmal[i].setAttribute("onblur", "blurFunction()");
  function bigImg(x) {
    x.style.height = "12%";
    x.style.width = "12%";
  }
  function normalImg(x) {
    x.style.height = "10%";
    x.style.width = "10%";
    x.addEventListener("blur", myBlurFunction, true);
  }
}
function upDate(previewPic) {
  let imageSRC = previewPic.src;
  document.getElementById("image").style.backgroundImage =
    "url(" + imageSRC + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
  x.style.height = "64px";
  x.style.width = "64px";
}
function unDo() {
  document.getElementById("image").style.backgroundImage = "url()";
  document.getElementById("image").innerHTML = "Hover over an image.";
  x.style.height = "32px";
  x.style.width = "32px";
}
function we() {
  alert("welcome in my gallery website");
}
console.log("thanks for your visit , ahmad");
