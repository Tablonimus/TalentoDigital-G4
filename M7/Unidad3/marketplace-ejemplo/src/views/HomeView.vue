<template>
  <div class="home">
    <ul>
      <li :key="index" v-for="(product, index) of products">
        <img :src="product.image" alt="image" />
        <br />
        <span>{{ product.name }}</span> | <span>${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore"; //Métodos de Firestore Database
import app from "../config/firebaseConfig.js"; //Mis credenciales de la plataforma Firebase

export default {
  name: "HomeView",
  data() {
    return {
      products: [],
    };
  },

  async mounted() {
    try {
      const db = getFirestore(app); //=> me conecto a mi firestore database con mis credenciales

      const querySnapshot = await getDocs(collection(db, "productos")); //=> getDocs es la función que me traerá los documentos de mi base de datos. Le debo especificar de donde los quiero traer. Este método no nos devuelve los datos en formato JSON, sino que entrega una "instantanea de la consulta".

      querySnapshot.forEach((snap) => {
        const product = snap.data(); //.data() es un método de las intantaneas para que puedas verlas como JSON.
        this.products.push(product); // pusheo cada producto a mi array de productos.
      }); //Recorro el array de instantaneas y por cada una transformo el elemento en data que pueda interpretar desde mi código.
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scope>
img {
  height: 150px;
  width: 200px;
  object-fit: contain;
}
</style>
