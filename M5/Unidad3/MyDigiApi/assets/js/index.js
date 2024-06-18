import { getData, getDigimonDetail } from "./controllers/controllers.js";

const cardSection = document.getElementById("card-section");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const previousPageBtn = document.getElementById("previous-page");
const nextPageBtn = document.getElementById("next-page");
/* PAGINACIÓN */
let currentPage = 0;
let nextPage = "";
let prevPage = "";

const showCards = async (url) => {
  //las peticiones de digimon vienen en un array de objetos dentro de  var digimons
  const data = await getData(url); // {content:[..], pageable:{console.log(digimons);
  const digimons = data.content;
  const pageable = data.pageable;

  currentPage = pageable.currentPage;
  nextPage = pageable.nextPage;
  prevPage = pageable.previousPage;

  let idBotones = []; //1,2,3,4,6,5
  let digimonCards = "";

  digimons.forEach((digimon) => {
    idBotones.push(digimon.id);
    digimonCards += `      
                        <figure class="effect-honey  ">
                            <img src=${digimon.image} alt="img04" class="w-100"/>
                            <figcaption>
                                <h2> ${digimon.name} <i>${digimon.id}</i></h2>
                                <span  id=${digimon.id} data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="miCard" href=${digimon.href}>Ver detalle</span>
                            </figcaption>			
                         </figure>
      `;
  });

  cardSection.innerHTML = digimonCards;

  idBotones.forEach((id) => {
    let card = document.getElementById(id);


    card.addEventListener("click", async () => {
      let digimonDetail = await getDigimonDetail(id);
      modalTitle.innerHTML = ` <span class="text-black fw-bold">${digimonDetail.name}</span>`;
      modalBody.innerHTML = `   <div class="d-flex-column justify-content-center">
                                  <span class="text-black fw-bold">First apparition :
                                  ${digimonDetail.releaseDate}</span>
                                  <p class="text-black p-4">${
                                    digimonDetail.descriptions[0].language ===
                                    "en_us"
                                      ? digimonDetail.descriptions[0]
                                          .description
                                      : digimonDetail.descriptions[1]
                                          .description
                                  }</p>
                                  <img src=${digimonDetail.images[0].href}/>
                                </div>             
      `;
    });
  });
};

previousPageBtn.addEventListener("click", () => {
  console.log("prevv");
  showCards(prevPage);
});
nextPageBtn.addEventListener("click", () => {
  console.log("nextt");
  showCards(nextPage);
});

/* Primer Renderizado */
showCards();
