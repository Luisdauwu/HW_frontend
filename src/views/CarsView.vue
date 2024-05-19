<script>
import axios from "axios";
export default {
  data() {
    return {
      cars: [],
    };
  },
   mounted() {
       axios.get("http://127.0.0.1:8000/cars")
           .then(response => {
               this.cars = response.data.data;
               console.log(this.cars)
           })
           .catch(error => {
               // Handle any errors that occurred during the API request
           });
        }
      }
</script>

<template>
  <div class="container">
    <div v-for="car in cars" :key="car.id" class="cars-container">
      <div class="car-container">
        <img :src="car.imagen_principal" />
        <div class="img-title">{{ car.marca }} {{ car.modelo }}</div>
      </div>
    </div>
  </div>
  <div id="loader">
    <img src="../assets/HW_logo.png" alt="Brillando"> 

  </div>
</template>

<style scoped>
#app {
  max-width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;

}
body {
  overflow-y: scroll !important;

}
.container {
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(4, 50vh); 
  grid-template-rows: auto; 
  position: relative;
  top: 11vh;
  
  
}
.cars-container {
  height: 45vh;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
.car-container {
  width: 100%;
  height: 100%;
  transition: transform 0.7s ease;
}
.car-container:hover {
  transform: scale(1.04);
}

.img-title {
  position: relative;
  left: 11px;
  color: white;
  background-color: #0000008f;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  top: -55px;
  width: 15vw;
  text-align: center;
  
}
#loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
  display: none; /* Ocultar por defecto */
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegurar que esté encima de todo */
}

#loader p {
  color: white;
  font-size: 14px;
}
</style>