const todasLasTD = $("td")
console.log(todasLasTD);

$("td:gt(5)").css("backgroundColor", "blue");/* greater than  */
$("td:lt(3)").css("backgroundColor", "yellow");/* less than */
$("tr:first").css("color", "red");/* first => primer elemento */
$("td:eq(5)").css("color", "red");/* equal => elemento en la posición especificada */


