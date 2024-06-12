const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";
const URL_BASE = "https://api.openweathermap.org/data/2.5";

/* ETIQUETAS HTML */
const searchInput = document.getElementById("search-input");
const cardContainer = document.getElementById("card-container");
const searchForm = document.getElementById("search-form"); //=>OPCIÓN 1 con evento submit
// const searchButton = document.getElementById("search-btn")//=>OPCIÓN 2=> para usar esta opción no olvides cambiar el atributo type="submit" por  type="button" en el <button> del html

async function getCityWeather(apiURL) {
  try {
    const apiData = await fetch(apiURL); //=> lo que devuelva fetch lo almacena en una variable
    //-formatear la respuesta de la api a json

    const jsonData = await apiData.json();
    if (jsonData.cod == 404) {
      alert("Ciudad no encontrada");
      return jsonData;
    }

    return jsonData;
  } catch (error) {
    console.log("ESTE ES EL ERROR QUE OCURRIÓ", error);
    return alert("hay un error!!!");
  }
}

function showWeatherCard(cityData) {
  const card = `
            <div>
                <h2>${cityData.name}</h2>
                <ul>
                    <li>Humedad: ${cityData.main.humidity}</li>
                    <li>Sensación Térmica: ${cityData.main.feels_like}</li>
                    <li>Máxima: ${cityData.main.temp_min}</li>
                    <li>Mínima: ${cityData.main.temp_max}</li>
                </ul>
            </div>
    `;

  cardContainer.innerHTML = card;
}

searchForm.addEventListener("submit", async (event) => {
  //el evento submit por defecto te refresca la página, debemos utilizar el método preventDefault para que esto no suceda.
  event.preventDefault();

  const cityInput = searchInput.value; //Recolectamos el valor del input

  if (cityInput.length > 4) {
    const finalURL = `${URL_BASE}/weather?q=${cityInput}&appid=${API_KEY}&units=metric`; //formamos la url que la api que consumiremos.
    const cityData = await getCityWeather(finalURL);
    //-mostrar en pantalla la respuesta de la api
    showWeatherCard(cityData);
  } else {
    alert("Debes escribir mas de 4 letras para buscar algo.");
  }
}); //=>OPCIÓN 1 con evento submit

/* 
 
 searchButton.addEventListener("click",(event)=>{
  const cityInput = searchInput.value; //Recolectamos el valor del input

  if (cityInput.length > 4) {
    const finalURL = `${URL_BASE}/weather?q=${cityInput}&appid=${API_KEY}&units=metric`; //formamos la url que la api que consumiremos.
    const cityData = await getCityWeather(finalURL);
    //-mostrar en pantalla la respuesta de la api
    showWeatherCard(cityData);
  } else {
    alert("Debes escribir mas de 4 letras para buscar algo.");
  }


    })//=>OPCIÓN 2
 */
