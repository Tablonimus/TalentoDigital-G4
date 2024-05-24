let actionButton = $("#action");

actionButton.on("click", function () {
  let valorDelSelect = $("select > option:selected").val();
  console.log(valorDelSelect);
});

/* JS VANILLA */
// let actionButton = document.getElementById("action");

// actionButton.addEventListener("click", function () {
//   let valorDeSelect = document.getElementById("selector").value;
//   console.log(valorDeSelect);
// });
