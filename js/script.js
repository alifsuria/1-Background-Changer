$(document).ready(function() {
  $(".button-trigger").on("click", function() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    $(".red").html(red);
    $(".green").html(green);
    $(".blue").html(blue);

    document.body.style.backgroundColor =
      "rgba(" + red + "," + green + "," + blue + ")";
  });
});
