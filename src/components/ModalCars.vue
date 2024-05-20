<template>
  <transition name="modal-fade">
  <div class="modal-backdrop" @click="close">
    <div class="modal">

      <section class="modal-body">
        <slot name="body">
          <img :src="car.imagen_principal" alt="">
         <!-- {{cars}} -->
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
            <h2>{{car.marca}} {{car.modelo}}</h2>
            <h3>{{car.precio}}</h3>
        </slot>
        <button class="Btn" @click="shop">
            Comprar
            <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
          </button>
      </footer>
    </div>
  </div>
</transition>
</template>
<script>
  export default {
    name: 'ModalCars',
    props:{
      car:{}
    },
    methods: {
      close() {
        this.$emit('close');
      
       },
       shop(){
        this.$emit('shop');
       }
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0vh;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    color: black;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    border: 2px solid grey;
    border-radius: 4vw;
    flex-direction: column;
    width: 40vw;
    position: relative;
    top: 6vh;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    flex-direction: row;
    justify-content: center;
    background-color: black;
    color: #fff;
    display: flex;
    gap: 8vh;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
  }

  .modal-body {
    position: relative;
    background-color: black;
    img{
      width: 100%;
    }

  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
    .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .Btn {
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 15, 15);
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
  }
  
  .svgIcon {
    width: 16px;
  }
  
  .svgIcon path {
    fill: white;
  }
  
  .Btn::before {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
  }
  
  .Btn:hover::before {
    transition-duration: .3s;
    transform: translate(100%,-50%);
    border-radius: 0;
  }
  
  .Btn:active {
    transform: translate(5px,5px);
    transition-duration: .3s;
  }
</style>