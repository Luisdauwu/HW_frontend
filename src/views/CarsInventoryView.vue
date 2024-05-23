<template>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  <div id="textContainer">
    <img id="Fondo_Login" src="../assets/Fondo_Inventory.png" alt="Inventario fondo">
    <div class="diagonal-rectangle">
      <img id="LoginLogo" src="../assets/HW_logo.png" alt="Hotwheels Logo">
      <div id="inventoryContainer">
        <h1 class="TextSign">Inventario de Autos</h1>
        <form class="form" v-on:submit.prevent="addCar">
          <div class="title">Añadir un Auto<br></div>
          <input type="text" v-model="carBrand" placeholder="Marca" class="input" required>
          <input type="text" v-model="carModel" placeholder="Modelo" class="input" required>
          <input type="number" v-model="carYear" placeholder="Año" class="input" required>
          <input type="text" v-model="carPrice" placeholder="Precio" class="input" required>
          <input type="number" v-model="carMileage" placeholder="Kilometraje" class="input" required>
          <input type="text" v-model="carColor" placeholder="Color" class="input" required>
          <input type="text" v-model="carImage" placeholder="Imagen Principal" class="input" required>
          <textarea v-model="carDescription" placeholder="Descripción" class="input" required></textarea>
          <input type="text" v-model="carUrl" placeholder="URL Shop" class="input" required>
          <button class="button-confirm">Agregar Auto →</button>
        </form>
        <ul id="carList">
          <li>
            <select v-model="carIdToDelete">
              <option disabled value="">Por favor elegir uno</option>
              <option v-for="car in cars" :value="car.id">{{car.marca}} {{car.modelo}}</option>
            </select>
            <button class="delete-button" v-on:click="deleteCar(carIdToDelete)">Eliminar</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data: () => ({
    carBrand: "",
    carModel: "",
    carYear: "",
    carPrice: "",
    carMileage: "",
    carColor: "",
    carImage: "",
    carDescription: "",
    carUrl: "",
    cars: []
  }),
  methods: {
    fetchCars() {
      axios.get("https://hw-backend-2sgk.onrender.com/cars")
        .then(response => {
          this.cars = response.data.data;
        })
        .catch(error => {
          console.log(error);
          this.toast.error("Error al cargar el inventario de autos");
        });
    },
    addCar() {
      axios.post("https://hw-backend-2sgk.onrender.com/cars", {  
        marca: this.carBrand,
        modelo: this.carModel,
        año: parseInt(this.carYear),
        precio: this.carPrice,
        kilometraje: parseInt(this.carMileage),
        color: this.carColor,
        imagen_principal: this.carImage,
        descripcion: this.carDescription,
        urlShop: this.carUrl
      })
      .then(response => {
        const carId = response.data.car_id;
        this.toast.success(`Auto agregado con éxito. ID: ${carId}`);
        this.fetchCars();
        this.clearForm();
      })
      .catch(error => {
        console.log(error);
        this.toast.error("Error al agregar el auto");
      });
    },
    deleteCar(carId) {
      axios.delete(`https://hw-backend-2sgk.onrender.com/cars/${carId}`)
      .then(response => {
        this.toast.success("Auto eliminado con éxito");
        this.fetchCars();
      })
      .catch(error => {
        console.log(error);
        this.toast.error("Error al eliminar el auto");
      });
    },
    clearForm() {
      this.carBrand = "";
      this.carModel = "";
      this.carYear = "";
      this.carPrice = "";
      this.carMileage = "";
      this.carColor = "";
      this.carImage = "";
      this.carDescription = "";
      this.carUrl = "";
    }
  },
  mounted() {
    this.fetchCars();
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: #000000;
  font-family: Arial, sans-serif;
  background-size: cover;
  background-position: center;
  background-attachment: fixed !important;
  overflow: hidden;
}
#textContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  z-index: 1;
}
#Fondo_Login {
  margin-left: 940px;
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  position: fixed;
  margin-top: 1%;
}
#LoginLogo {
  width: 130px;
  height: auto;
  bottom: 370px;
  left: 280px;
  position: absolute;
  transform: rotate(0deg);
  z-index: 2;
}
.diagonal-rectangle {
  width: 700px;
  height: 495px;
  background-color: transparent;
  position: absolute;
  border-radius: 10%;
  border-color: #fff;
  top: 20%;
  left: 5%;
}
#inventoryContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.form {
  --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    padding: 20px;
    background: lightgrey;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 20px;
    row-gap: 20px;
    column-gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    flex-wrap: wrap;
    justify-content: space-around;
    position: absolute;
}
.title {
  color: var(--font-color);
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 25px;
  position: absolute;
}
.input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
  top: 50px;
  position: relative;
}
.input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}
.input:focus {
  border: 2px solid var(--input-focus);
}
.button-confirm {
  margin: 50px auto 0 auto;
  width: 250px;
  height: 45px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}
.button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}
#carList {
  list-style: none;
  padding: 0;
  position: absolute;
  top: 110%;
  display: flex;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
}
#carList li {
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: lightgrey;
  color: #000;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  
}
.input-id {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid var(--main-color);
  margin-top: 10px;
}
.delete-button {
  background-color: #575656;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
.delete-button:hover {
  background-color: #cc0000;
}
</style>
