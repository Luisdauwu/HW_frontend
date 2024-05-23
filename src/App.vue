<script>
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from "vue-toastification";
import VueJwtDecode from 'vue-jwt-decode'

export default {
  setup(){
    const toast = useToast();
    return { toast }

  },
  data() {
    return {
      logged: Boolean(sessionStorage.getItem("access_token")),
      username:"",
      role: false
    };
  },
  mounted(){
    const token = sessionStorage.getItem("access_token");
    if(token){
      const decoded = VueJwtDecode.decode(token);
      this.username = decoded.username
      this.role = decoded.role==="admin"
      console.log(this.role)
    }
  },
   methods:{
    logout(){
      sessionStorage.removeItem("access_token") 
      this.toast.info("Cerraste sesion!")
      this.logged=false
      this.role= false
      
    }
        },
        addCar() {
      axios.post("https://hw-backend-2sgk.onrender.com/cars", {
        brand: this.carBrand,
        model: this.carModel,
        year: this.carYear,
        price: this.carPrice,
        mileage: this.carMileage,
        color: this.carColor,
        image_principal: this.carImage,
        descripcion: this.carDescription,
        urlShop: this.carUrl
      })
      .then(response => {
        this.toast.success("Auto agregado con éxito");
        this.fetchCars();
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
    }
  }
       
</script>

<template>
  <header id="header">
    <div id="brandContainer">
      <a  class="brandTextLeft1"><router-link to="/">HOME</router-link></a>
      <a href="https://github.com/Luisdauwu" target="_blank" class="brandTextLeft3">CONTACT</a>
      <a ><router-link to="/">
        <img id="brandLogo" src="./assets/HW_logo.png"  alt="Hotwheels Logo">
        </router-link>
      </a>
      <a v-if="!logged" class="brandTextRight"><router-link to="/login">ACCOUNT</router-link></a>
      <button v-on:click="logout" v-if="logged" class="Btn">
  
        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        
        <div class="text">Logout, {{ username }}</div>
      </button>
            
      <a ><router-link to="/login">
        <img id="AccountLogo" src="./assets/Account.png" alt="ACCOUNT Logo">
        </router-link>
      </a>
      
    </div>
    <div id="loader">
      <img src="./assets/HW_logo.png" alt="Brillando"> 
  
    </div>
    <div  v-if="role" id="home">
      <button @click="goToInventory" class="navigate-button">
        <router-link to="/inventory" >Inventario</router-link></button>
      
  
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
    #header {
    background-color: #000000;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0px;
    height: 14vh;
    left: 0;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);

    }
    body {
    min-height: 100vh;
    background: var(#000000);
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; 
    overflow-y: hidden; 
}

    #brandContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #brandLogo {
      width: 80px;
      height: auto;
      margin: 0 50px;
      margin-left: 100%;
    }

    #AccountLogo {
      width: 20px;
      height: auto;
      margin: 0 50px;
    }

    #Hwfondo {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      position: absolute;
      /* Cambiamos a posición absoluta */
      top: 0;
      left: 0;
      z-index: 1;
      /* Colocar el fondo detrás del contenido */
      transition-duration: 500ms;
      /* Transición de 500ms para el botón */

    }


    #Hwfondo:hover {
      transform: scale(1.1);
    }

    #AccountLogo:hover {
      transform: scale(1.2);
    }

    .left4-text:hover {
      transform: scale(1.2);

    }

    .brandTextLeft1,
    .brandTextLeft2,
    .brandTextLeft3,
    .brandTextRight {
      font-size: 12px;
      margin: 0 5px;
    }

    .brandTextLeft1 {
      font-size: 12px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .brandTextLeft2 {
      font-size: 12px;
      margin-right: 10px;
      margin-left: -120px;
    }

    .brandTextLeft3 {
      font-size: 12px;
      margin-right: 10px;
      margin-left: -150px;
    }

    .brandTextRight {
      font-size: 12px;
      margin-left: 350px;
      margin-right: -310px;
    }

    .brandTextLeft1,
    .brandTextLeft2,
    .brandTextLeft3,
    .brandTextRight {
      text-decoration: none;
      color: #fff!important;
      padding: 5px 10px;
      border: 1px solid #000000;
      border-radius: 5px;
      transition-duration: 500ms;
      /* Transición de 500ms para el botón */

    }

    .brandTextLeft1:hover,
    .brandTextLeft2:hover,
    .brandTextLeft3:hover,
    .brandTextRight:hover {
      background-color: #333;
    }

    .left-text {
      color: white;
      text-align: left;
      margin-right: 1300px;
      margin-top: 334px;
      font-size: 70px;
      position: relative;
      top: -62px;
    }

    .left2-text {
      color: white;
      text-align: left;
      margin-right: 939px;
      margin-top: -80px;
      font-size: 70px;
    }

    .left3-text {
      color: white;
      text-align: left;
      margin-right: 950px;
      margin-top: -200px;
      font-size: 30px;
      position: absolute;
      top: 94%;
      left: 30%;
    }

    .sub {
      color: white;
      text-align: center;
      margin-top: 369px;
      margin-bottom: -400px;
      font-size: 10px;
    }

    .left4-text {
      text-align: left;
      margin-right: 150px;
      margin-left: -100px;
      margin-top: -10px;
      font-size: 20px;
      text-decoration: none;
      color: #000000;
      padding: 5px 30px;
      border: 1px solid white;
      border-radius: 50px;
      font-family: 'Bebas Neue', sans-serif;
      background-color: white;
      position: absolute;
      /* Posición absoluta para estar por encima del fondo */
      z-index: 5;
      transition-duration: 500ms;
      /* Transición de 500ms para el botón */


    }

    #textContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - -250px);
      /* Resta la altura del navbar */

    }

    .diagonal-rectangle {
      width: 113%;
      height: 150px;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 10%) rotate(-172deg);
      /* Rotar -45 grados */
      z-index: -1;
      /* Asegurar que esté detrás del texto */
    }

    .vertical-rectangle {
      width: 1px;
      height: 300px;
      background-color: white;
      position: absolute;
      margin-left: 1573px;
      margin-bottom: 495px;

    }

    .horizontal-rectangle {
      width: 1100px;
      height: 1px;
      background-color: white;
      position: absolute;
      margin-left: 471px;
      margin-bottom: 795px;
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
      font-size: 24px;
    }

    #fixedContent1 {
      position: fixed;
      top: 20%;
      left: 0%;
      z-index: 999;
      /* Asegura que esté por encima de todo */
      /* Agrega otros estilos según sea necesario */
    }

    .left-textCar1 {
      color: white;
      text-align: left;
      margin-right: 1300px;
      margin-top: 290px;
      font-size: 70px;
    }

    #fixedContent2 {
      position: fixed;
      height: 100px;
      top: 20%;
      left: 35%;
      z-index: 999;
      /* Asegura que esté por encima de todo */
      /* Agrega otros estilos según sea necesario */
    }

    #fixedContent3 {
      position: fixed;
      height: 100px;
      top: 20%;
      left: 69%;
      z-index: 999;
      /* Asegura que esté por encima de todo */
      /* Agrega otros estilos según sea necesario */
    }

    #fixedContent4 {
      position: fixed;
      height: 100px;
      top: 65%;
      left: 69%;
      z-index: 999;
      /* Asegura que esté por encima de todo */
      /* Agrega otros estilos según sea necesario */
    }

    #fixedContent5 {
      position: fixed;
      height: 100px;
      top: 65%;
      left: 35%;
      z-index: 999;
      /* Asegura que esté por encima de todo */
      /* Agrega otros estilos según sea necesario */
    }

    #fixedContent6 {
      position: fixed;
      height: 100px;
      top: 65%;
      left: 0%;
      z-index: 999;
      /* Asegura que esté por encima de todo */
      /* Agrega otros estilos según sea necesario */
    }
    .Btn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 30px;
      height: 30px;
      left: 21%;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition-duration: .3s;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
      background-color: rgb(255, 65, 65);
    }
    
    /* plus sign */
    .sign {
      width: 100%;
      transition-duration: .3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .sign svg {
      width: 17px;
    }
    
    .sign svg path {
      fill: white;
    }
    /* text */
    .text {
      position: absolute;
      right: 0%;
      width: 0%;
      opacity: 0;
      color: white;
      font-size: 1.2em;
      font-weight: 600;
      transition-duration: .3s;
    }
    /* hover effect on button width */
    .Btn {
      width: 20vh;
      border-radius: 40px;
      transition-duration: .3s;
      left: 260px;
    }
    
    .Btn:hover .sign {
      width: 30%;
      transition-duration: .3s;
      padding-left: 20px;
    }
    /* hover effect button's text */
    .Btn:hover .text {
      opacity: 1;
      width: 70%;
      transition-duration: .3s;
      padding-right: 10px;
    }
    /* button click effect*/
    .Btn:active {
      transform: translate(2px ,2px);
    }
    .navigate-button {
      background-color: #ffffff;
      color: #000000;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      position: absolute;
      margin-top: -47%;
      left: 90%;
      cursor: pointer;
      transition: 0.3s;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 17px;
      z-index: 4;
    }
    
    .navigate-button:hover {
      background: #03f40f;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #03f40f, 0 0 25px #03f40f, 0 0 50px #03f40f, 0 0 100px #03f40f;
    }
    
    .input {
      display: flex;
      flex-direction: column;
      width: 200px;
      background-color: #0D1117;
      justify-content: center;
      border-radius: 5px;
    }
    
    .value {
      background-color: transparent;
      border: none;
      padding: 10px;
      color: white;
      display: flex;
      position: relative;
      gap: 5px;
      cursor: pointer;
      border-radius: 4px;
    }
    
    .value:not(:active):hover,
    .value:focus {
      background-color: #21262C;
    }
    
    .value:focus,
    .value:active {
      background-color: #1A1F24;
      outline: none;
    }
    
    .value::before {
      content: "";
      position: absolute;
      top: 5px;
      left: -10px;
      width: 5px;
      height: 80%;
      background-color: #2F81F7;
      border-radius: 5px;
      opacity: 0;
    }
    
    .value:focus::before,
    .value:active::before {
      opacity: 1;
    }
    
    .value svg {
      width: 15px;
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
