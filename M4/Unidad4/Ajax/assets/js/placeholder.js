let requestConfig = {
  url: "https://jsonplaceholder.typicode.com/posts", //A donde voy a hacer la petición `URL_BASE + /endpoint`
  type: "GET", //Verbo HTTP => GET, POST, PUT, DELETE 📛no cambiar
  dataType: "json", // El tipo de dato que se manipulará 📛no cambiar

  success: function (response) {
    const posts = response;

    let htmlPosts = "";

    posts.forEach((post) => {
      let postCard = `<p>${post.id} - ${post.title}</p>`;

      htmlPosts += postCard;
    });

    $("#posts-section").html(htmlPosts);
  }, //Función que se ejeucta si la petición es exitosa

  error: function (error) {
    console.log("DIOS MIO HA OCURRIDO UN ERROR!!! =>", error);
    alert("PELIGRO! Hay un error!");
  }, //Función que se ejeucta caso de error
};

/* EJUCUCIÓN DIRECTA */
$.ajax(requestConfig); // Método .ajax() ejecuta una petición con las configuraciones pasadas por parámetro.

/* EJECUCIÓN POR MÉTODO */
// $("#submit-btn").click(function (){
//     $.ajax(requestConfig);
// })
