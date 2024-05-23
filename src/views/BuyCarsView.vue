<template>
   
        <form class="payment-form" @submit.prevent="submitPayment">
          <h2>Información de Pago</h2>
          <input type="text" v-model="paymentInfo.cardNumber" placeholder="Número de Tarjeta" required />
          <input type="text" v-model="paymentInfo.cardHolder" placeholder="Titular de la Tarjeta" required />
          <input type="text" v-model="paymentInfo.expiryDate" placeholder="Fecha de Vencimiento" required />
          <input type="text" v-model="paymentInfo.cvv" placeholder="CVV" required />
          <button type="submit">Pagar</button>
        </form>
      
      <ModalCars v-if="isModalVisible" :car="carSelected" @close="closeModal" @shop="shopModal(carSelected)" />

  </template>
  
  <script>
  import axios from "axios";
  import ModalCars from "@/components/ModalCars.vue";
  
  export default {
    components: { ModalCars },
    data() {
      return {
        cars: [],
        carSelected: null,
        isModalVisible: false,
        paymentInfo: {
          cardNumber: '',
          cardHolder: '',
          expiryDate: '',
          cvv: ''
        }
      };
    },
    mounted() {
      axios.get("https://hw-backend-2sgk.onrender.com/cars")
        .then(response => {
          this.cars = response.data.data;
        })
        .catch(error => {
          console.error("There was an error!", error);
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
      shopModal(car) {
        window.open(car.urlShop, "_blank");
      },
      submitPayment() {
        // Aquí puedes enviar la información de pago a tu backend para procesar el pago
        console.log("Información de pago enviada:", this.paymentInfo);
        // Puedes agregar aquí la lógica para procesar el pago
      }
    }
  };
  </script>
  
  <style scoped>
  .buy-cars {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 150px;
  }
  
  .car-card {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    transition: transform 0.2s;
    cursor: pointer;
  }
  
  .car-card:hover {
    transform: scale(1.05);
  }
  
  .car-card img {
    max-width: 100%;
    border-radius: 8px;
  }
  
  .car-card h3 {
    margin: 10px 0;
    font-size: 1.2em;
  }
  
  .car-card p {
    font-size: 1em;
    color: #555;
  }
  
  .payment-form {
    display: flex;
    margin-top: 400px;
    flex-direction: column;
    align-items: center;
    margin-left: -80%;
  }
  
  .payment-form h2 {
    margin-bottom: 10px;
  }
  
  .payment-form input {
    margin-bottom: 10px;
    padding: 8px;
  }
  
  .payment-form button {
    background-color: #4AAE9B;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .payment-form button:hover {
    background-color: #3a8f83;
  }
  </style>
  