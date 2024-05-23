<script>
import ModalCars from "@/components/ModalCars.vue";
import axios from "axios";
export default {
  components: { ModalCars },
  data() {
    return {
      carSelected: {},
      isModalVisible: false,
      cars: [],
    };
  },
  mounted() {
    axios.get("https://hw-backend-2sgk.onrender.com/cars")
      .then(response => {
        this.cars = response.data.data;
        console.log(this.cars)
      })
      .catch(error => {
        // Handle any errors that occurred during the API request
      });
  },
  methods: {
    showModal(car) {
      this.carSelected = car;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    shopModal(car){
      console.log(car)
      window.open(car.urlShop,"_blank")
      console.log(car.urlShop)
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-for="car in cars" :key="car.id" class="cars-container">
      <div v-on:click="open" class="car-container">
        <img :src="car.imagen_principal" @click="showModal(car)"/>
        <div class="img-title">{{ car.marca }} {{ car.modelo }}</div>
      </div>
      <ModalCars v-if="isModalVisible" :car="carSelected" @close="closeModal" @shop="shopModal(carSelected)">

      </ModalCars>
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
  cursor: pointer;
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
  font-family: 'Bebas Neue', sans-serif;

}

#loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  /* Fondo semitransparente */
  display: none;
  /* Ocultar por defecto */
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* Asegurar que esté encima de todo */
}

#loader p {
  color: white;
  font-size: 14px;
}
.navigate-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  position: relative;
  left: 42%;
  cursor: pointer;
  transition: 0.3s;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 17px;
  z-index: 4;
  top: -60px;
  
}
.navigate-button:hover {
  background: #e22424;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #dd0e0e,
              0 0 25px #dd0e0e,
              0 0 50px #dd0e0e,
              0 0 100px #dd0e0e;
}
.navigate-button a {
  color: #000000; /* Reemplaza esto con el color del enlace de router-link */
}

</style>