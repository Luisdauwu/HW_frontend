<script setup>

</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  <div id="textContainer">
    <img id="Hwfondo" src="../assets/HW_fondo.png" alt="Hw fondo">
    <div class="subcontainer">
      <h2 class="sub">AN ALL-ELECTRIC SUPERCAR, THE ROADSTER MAXIMIZES THE POTENTIAL OF AERODYNAMIC ENGINEERING AND DELIVERS UNRIVALED PERFORMANCE AND EFFICIENCY.</h2>
    </div>
    <div>
      <h3 class="left-text">TESLA</h3>
    </div>
    <div>
      <h4 class="left2-text">ROADSTER</h4>
    </div>
    <div>
      <h5 class="left3-text">2006</h5>
    </div>
    <div>
      <button id="verMasButton" class="left4-text black-text">
        <router-link to="/cars">VER MÁS</router-link>
      </button>
    </div>
    <div class="diagonal-rectangle"></div>
    <div class="vertical-rectangle"></div>
    <div class="horizontal-rectangle"></div>
  </div>
  

</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Oculta el scroll */
  
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
}

#Hwfondo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen de fondo cubra todo el contenedor */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition-duration: 500ms;
}

.subcontainer {
  width: 31%;
  position: relative;
  z-index: 2; /* Coloca el contenido por encima del fondo */
  text-align: center;
}

.black-text a {
  color: #000 !important;
}

body {
  color: var(--color-text);
  background: #000000;
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}

#AccountLogo {
  width: 20px;
  height: auto;
  margin: 0 50px;
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
  margin-right: 10px;
  margin-left: 10px;
}

.brandTextLeft2 {
  margin-right: 10px;
}

.brandTextLeft3 {
  margin-right: 10px;
}

.brandTextRight {
  margin-left: 350px;
}

.brandTextLeft1,
.brandTextLeft2,
.brandTextLeft3,
.brandTextRight {
  text-decoration: none;
  color: #fff !important;
  padding: 5px 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  transition-duration: 500ms;
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
  margin: 20px;
  top: 150%;
  right: 220%;
  font-size: 128px;
  position: relative;
  font-family: 'Bebas Neue', sans-serif;
}

.left2-text {
  color: white;
  text-align: left;
  margin: 20px;
  top: 10px;
  right: 220px;
  font-size: 128px;
  transform: translate(-120%, 110%); /* Centrar en su contenedor */
  font-family: 'Bebas Neue', sans-serif;

}

.left3-text {
  color: white;
  text-align: left;
  margin: 20px;
  font-size: 40px;
  top: 645px;
  right: 1345px;
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;

}

.sub {
  color: white;
  text-align: center;
  margin: 20px; /* Reducido el margen */
  font-size: 20px; /* Aumentado el tamaño de fuente */
  position: absolute;
  transform: translate(1%, 870%); /* Centrado vertical y horizontal */
  width: 90%; /* Ajustar para que el texto se divida en dos líneas */
  white-space: normal;
  font-family: 'Bebas Neue', sans-serif;
}


.left4-text {
  text-align: left;
  margin: 20px;
  font-size: 22px;
  text-decoration: none;
  color: #000000;
  padding: 5px 30px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: white;
  border-color: white;
  position: relative;
  top: 200%;
  z-index: 5;
  font-family: 'Bebas Neue', sans-serif;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  

  }
.left4-text:hover{
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  border-color: #23c483;
  color: #fff;
  transform: translateY(-1px);
  }



.diagonal-rectangle {
  width: 113%;
  height: 150px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%) rotate(10deg);
  z-index: 0;
}

.vertical-rectangle {
  width: 1px;
  height: 300px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -113%);
}

.horizontal-rectangle {
  width: 1100px;
  height: 1px;
  background-color: white;
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-12%, -50%);
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
