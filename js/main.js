causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});
//https://css-tricks.com/viewport-sized-typography/