/* Para consumir una api desde js necesito alguna manera de hacer una petición a la API */
/* Para hacer una petición puedo utilizar => AJAX, fetch() , AXIOS */
/* A TENER EN CUENTA:
    1- Las peticiones nos llegan en un formato que no es JS!!! es JSON.
    2- Necesitamos parsear la información y convertirla en un tipo de dato JS.
    SOLUCION => .json() 
    3- Las peticiones demoran... y debemos utilizar asincronia para manejarlas.
    SOLUCION => async/await  |  IMPORTANTE =>  html usar  type="module"
    Para utilizar async/await  debemos decirle al navegador que nuestro archivo JS es de tipo modulo
*/

/* Paso 1 => utilizar await y fetch para consumir la API */
const apiResponse = await fetch("https://dragonball-api.com/api/characters"); //🛑 con await espera a que la petición se cumpla

const data = await apiResponse.json(); ////🛑 con await espera a que se convierta a json

const characters = data.items;
console.log(characters);

/* Paso 2 => Mostrar el contenido en el html = MANIPULAR EL DOM = AGARRAR ETIQUETAS! */
const cardSection = document.getElementById("card-section");

characters.forEach((character) => {
  let characterCard = `
    <div class="card p-2" style="width: 18rem;">
        <img src="${character.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Afiliacion: ${character.affiliation}</p>     
        </div>
    </div>
`;

  cardSection.innerHTML += characterCard;
});
