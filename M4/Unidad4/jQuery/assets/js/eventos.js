/* EVENTO CHANGE */
$("#pais").change(function () {
  let paisSeleccionado = $(this).children("option:selected").val();

  $(".resultado").text(paisSeleccionado); // .text("Lo que quiero") =>  .textContent= "Lo que quiero"
});


/* EVENTO CLICK */
const clickMeBtn = $("#clickMe");
clickMeBtn.click(function (){
    console.log("HICE CLICK CON .CLICK() !!!!")
})


/* EVENTO ON... con selector guardado en variable */
const clickMeBtn2 = $("#clickMe2");

clickMeBtn2.on("click", function () {
  console.log("Gracias por hacer click!");
});

/* ---------------------------------------------------------------------------- */

$("#btn").on("click", function () {
  /* IMPARES */
  $("li").filter(":even").css("background-color", "yellow");//EVEN => PARES
  /* PARES */
  $("li").filter(":odd").css("background-color", "blue");// ODD => IMPARES
});

/* ---------------------------------------------------------------------------- */

let contador = 0;

$("#ejemplo").on("click", function () {
  contador++;
  console.log("---> hiciste " + contador + " clic!/clics!");
  $("#counter").html(contador);// Equivalente al innerHTML = 
});
