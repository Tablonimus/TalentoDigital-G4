let URL_BASE = "https://digi-api.com/api/v1"; //   /digimon  /field  /atrribute

const getDigimons = async () => {
  let response = await fetch(`${URL_BASE}/digimon`); //🛑espero
  let data = await response.json(); //paresear la respuesta a json ¡OJO uso await!

  console.log(data);
};

getDigimons();



const getDigimons = async () => {
  let data = await fetch(`${URL_BASE}/digimon`)
    .then((response) => response.json())
    .catch((err) => err);

    console.log(data);
};

getDigimons();