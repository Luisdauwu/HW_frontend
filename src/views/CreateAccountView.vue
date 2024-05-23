<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router'
export default {
  setup(){
    const toast = useToast();
    const router= useRouter();
    return { toast, router }

  },
  data: () => ({
    username: "",
    password: "",
  }),
  methods:{
    signUp(){
      axios.post("https://hw-backend-2sgk.onrender.com/signup",
        {
          username:this.username,
          password:this.password,
          role: "None"

        }
      ).then(response=>{
        this.toast.success("Registro realizado con exito!")
        this.router.push("/login")
      }).catch(error=>{
        this.toast.error(error.response.data.detail)
      })
    }
  }
}
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  <div id="textContainer">
    <img id="Fondo_Login" src="../assets/Fondo_Signup.png" alt="Login fondo">
    <div class="diagonal-rectangle">
        <img id="LoginLogo" src="../assets/HW_logo.png" alt="Hotwheels Logo">
        <div id="searchBar">
            <input type="email" v-model="username" placeholder="Username" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
          <div id="searchBarPass">
            <input type="password" v-model="password" placeholder="Password">
            <button class="Submit-button" v-on:click="signUp">
              <span class="Submit-button-text">Sign up</span>
            </button>
        </div>
      <a class="TextSign">Sign up to HW</a>
             </div>
         </div>
        </div>

</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: var(#000000);
  font-family: Arial, sans-serif;
  background-size: cover;
  background-position: center;
  background-attachment: fixed !important; /* Fija la imagen de fondo en la ventana del navegador */
  overflow: hidden; 
}
#header {
  background-color: #000000;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: relative; /* Permite controlar el z-index */
  z-index: 100; /* Coloca el navbar encima del fondo */
  box-shadow: 0px 10px 15px -7px rgba(255,255,255,0.5);
}
#textContainer {
  position: relative;
  width: 100vw;
  height: 100vh; /* Asegura que ocupe toda la ventana del navegador */
  overflow: hidden; /* Asegura que no haya overflow */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  z-index: 1;
}

#brandContainer {
  display: flex;
  justify-content: space-between; 
  align-items: center;
}
#Fondo_Login {
    margin-left: 940px;
    background-size: cover;
    background-position: center;
    width: 50%; /* Ajusta el ancho al 100% */
    height: 100%; /* Ajusta la altura al 100% */
    z-index: -1; /* Coloca el fondo detrás de todo */
    opacity: 0.5; /* Ajusta la opacidad según sea necesario */
    position: fixed; /* Asegura que el fondo cubra toda la pantalla */
    margin-top: 1%;

}

#brandLogo {
  width: 80px; 
  height: auto;
  margin: 0 50px; 
}
#LoginLogo {
width: 130px; /* Ancho del logo */
height: auto; /* Altura automática */
bottom: 300px;
left: 200px;
position: absolute;
transform: rotate(0deg); /* Rotación de 10 grados */


}
#AccountLogo {
  width: 20px; 
  height: auto;
  margin: 0 50px; 
}
#AccountLogo:hover {
  transform: scale(1.2); 
}
#header:hover {
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);


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
  margin-left: -150px; 
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
  color: #fff;
  padding: 5px 10px;
  border: 1px solid #000000;
  border-radius: 5px;
}

.brandTextLeft1:hover,
.brandTextLeft2:hover,
.brandTextLeft3:hover,
.brandTextRight:hover {
  background-color: #333;
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
#searchBar {
  width: 300px;
  height: 30px; 
  padding: -1px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000000;
  z-index: 2; /* Coloca la barra de búsqueda encima del fondo */
  transform: rotate(172deg); /* Rotación de -45 grados */
  margin-left: 120px;
  margin-top: 300px;
  transform: rotate(0deg); /* Rotación de 10 grados */


}
#searchBar input[type="email"]{
  width: 300px;
  height: 30px;
  padding: 5px;
  margin-top: 0px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: white; /* Fondo transparente */
  color: #000000; /* Texto blanco */
  font-size: 16px;
  outline: none; /* Sin borde de enfoque */
  margin-left: px;
  transform: rotate(0deg); /* Rotación de 10 grados */


}
.TextSign {
color: white;
font-size: 38px;
font-family: 'Bebas Neue', sans-serif;
position: absolute;
top: -200%;
left: 25%; /* Ajusta la posición del texto desde el lado izquierdo */
transform: translateY(-50%);

}
#searchBarPass {
  margin-top: 70px;
  margin-left: 5px;
  width: 300px;
  height: 30px; 
  padding: 0px;
  border-radius: 10px;
  color: #000000;
  position: center; /* Permite controlar el z-index */
  z-index: 2; /* Coloca la barra de búsqueda encima del fondo */
  transform: rotate(0deg); /* Rotación de 10 grados */

}
#searchBarPass input[type="password"] {
        width: 300px;
        height: 30px;
        padding: 5px;
        margin-top: 1px;
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: white; /* Fondo transparente */
        color: #000000; /* Texto blanco */
        font-size: 16px;
        outline: none; /* Sin borde de enfoque */
        margin-left: -5px;
        transform: rotate(0deg); /* Rotación de 10 grados */


}
.brandTextLeft5 {
    font-size: 15px;
    margin-left: -150px;
    margin-top: 10px; /* Ajusta la posición del texto hacia abajo */
    white-space: normal;
    position: absolute; /* Make the element positioned absolutely */
    color: #fff;

}
#container {
width: 400px; /* Adjust the width as needed */
}
.Submit-button {
        background-color: #ffffff;
        color: #000000;
        position: absolute;
        border: none;
        margin-left: 80px;
        margin-top: 2px;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        transition: 0.3s;
        width: 150px;
        height: 30px;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 17px;
    }

.Submit-button:hover {
  background: #03f40f;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03f40f,
              0 0 25px #03f40f,
              0 0 50px #03f40f,
              0 0 100px #03f40f;

}
.Submit-button-text {
  font-family: 'Bebas Neue', sans-serif; /* Ejemplo de estilo de fuente */
  font-size: 20px; /* Ejemplo de tamaño de fuente */
  color: #000000; /* Ejemplo de color de texto */
  position: relative; /* Ajusta la posición relativa */
  top: -6px;

}

</style>