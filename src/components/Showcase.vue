<template>
  <section>
    <!--TODO Arrumar imagem olenka para mobile... reduzir tamanho -->
    <img
      style="margin-bottom: 10px; height: 80px; margin-top: 10px"
      src="https://olenkacosmeticos.com.br/wp-content/uploads/2020/03/logo_olenka-min.png"
      alt=""
    >
    <div class="vitrine">
      <span
        v-for="prod in products"
        :key="prod.id"
      >
        <router-link
          :key="prod.id"
          class="produto"
          :to="`/productsOlenka/${prod.id}`"
        >
          <!-- <a
          
          class="produto"
          :href="'productsOlenka/'+prod.id"
        > -->
          <div>
            <img
              class="foto"
              :src="prod.imagem"
              alt=""
            >
          </div>
          <strong>{{ prod.name && prod.name.length>15? prod.name.substring(0,12)+'...':prod.name  }}</strong>
        <!-- </a> -->
        </router-link>
      </span>
    </div>
    <img
      style="margin-bottom: 10px; margin-top: 10px;" 
      src="https://static.wixstatic.com/media/5ae693_af6ae2281cc54401936023c9f519a58f~mv2.png/v1/crop/x_429,y_648,w_1501,h_1129/fill/w_186,h_136,al_c,q_85,usm_0.66_1.00_0.01/logo%20muy%20biela%20rosa.webp" 
      alt=""
      >
    <div class="vitrine">
      <span
        v-for="prod in muyBiela"
        :key="prod.id"
        class="produto"
      >
        <router-link
          :key="prod.id"
          class=""
          :to="`/productsMuyBiela/${prod.id}`"
        >
          <div>
            <img
              class="foto"
              :src="prod.image"
              alt=""
            >
          </div>
          <strong>{{  prod.name && prod.name.length>20? prod.name.substring(0,20)+"...":prod.name }}</strong>
        </router-link>
      </span>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import ProductsMuyBiela from "../utils/productsMuyBiela";
import Products from "../utils/products";
export default {
  data() {
    return {
      muyBiela: [...ProductsMuyBiela],
      products: [...Products],
    };
  },
};
</script>

<style>

.produto {
    padding: 1rem;
    box-shadow: 0.5rem 0.5rem 0.5em rgb(0 0 0 / 40%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 21rem;
}
.produto, .vitrine {
    border-radius: 1rem;
}
a, body, button, input {
    font: 400 16px Lato,sans-serif;
    border: 0;
    text-decoration: none;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>