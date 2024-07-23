import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 5,
    appName: "Mercadito Talentoso",
    products: [
      {
        id: 1,
        nombre: "Tomate rojo",
        precio: 1200, // Precio por kilo
        descripcion:
          "Un fruto carnoso, comestible, de color rojo intenso, con pulpa jugosa y semillas. Es rico en vitaminas A, C y K, y licopeno, un antioxidante con propiedades anticancerígenas. Ideal para ensaladas, salsas, guisos y pizzas.",
      },
      {
        id: 2,
        nombre: "Cebolla blanca",
        precio: 800, // Precio por kilo
        descripcion:
          "Un bulbo de color blanco o amarillo, con sabor fuerte y picante. Es rica en vitaminas B6 y C, y potasio. Se utiliza en una gran variedad de platos, desde sofritos hasta ensaladas y salsas.",
      },
      {
        id: 3,
        nombre: "Lechuga romana",
        precio: 600, // Precio por unidad
        descripcion:
          "Una hortaliza de hojas verdes, crujientes y de sabor suave. Es rica en vitamina K, ácido fólico y fibra. Ideal para ensaladas, sándwiches y wraps.",
      },
      {
        id: 4,
        nombre: "Papa amarilla",
        precio: 500, // Precio por kilo
        descripcion:
          "Un tubérculo de color amarillo o marrón, con sabor harinoso y textura suave. Es rica en carbohidratos, potasio y vitamina C. Se utiliza en una gran variedad de platos, desde guisos hasta purés y papas fritas.",
      },
      {
        id: 5,
        nombre: "Manzana roja",
        precio: 700, // Precio por kilo
        descripcion:
          "Una fruta de color rojo, con pulpa crujiente y sabor dulce. Es rica en vitaminas A, C y fibra. Ideal para comer como snack, ensaladas, tartas y compotas.",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
