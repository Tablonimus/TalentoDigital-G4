$("p").dblclick(function () {
  $(this).hide();
});

$("p").click(function () {
  $(this).css({
    color: "yellow",
    "text-decoration": "underline",
    "background-color": "blue",
  });
});

$("#titulo").click(function () {
  $(this).hide();
});
