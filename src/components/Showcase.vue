<template>
  <section>
    <!--TODO Arrumar imagem olenka para mobile... reduzir tamanho -->
    <img
      style="margin-bottom: 10px; height: 80px; margin-top: 10px"
      src="..\assets\logo_olenka-min.png"
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
              :src="prod.image"
              alt=""
            >
          </div>
          <strong>{{ prod.name }}</strong>
        <!-- </a> -->
        </router-link>
      </span>
    </div>
    <img
      style="margin-bottom: 10px; margin-top: 10px"
      src="..\assets\logo_muy_biela_rosa.png"
      alt=""
    >
    <div class="vitrine">
      <div
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
          <strong>{{ prod.name }}</strong>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import ProductsMuyBiela from "../utils/poductsMuyBiela";
export default {
  data() {
    return {
      muyBiela: [...ProductsMuyBiela],
      products: [
        {
          id: 1,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_bio-reconstrutor_gloss01_500ml-1024x881.png",
          name: "BIO RECONSTRUTOR",
        },
        {
          id: 2,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_royal-blond_250ml-RTW-1024x881.png",
          name: "ROYAL BLOND",
        },
        {
          id: 3,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_royal-soft_1kg--1024x880.png",
          name: "ALISANTE CAPILAR...",
        },
        {
          id: 4,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/11/mockup_blend-de-proteinas_600g-red-min.png",
          name: "BLEND DE PROTEÍN...",
        },
        {
          id: 5,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/imagem_1057_1018_0_bp_ultrap.png",
          name: "BLOND LEX",
        },
        {
          id: 6,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mont_banner_produtos_hidra3-01.png",
          name: "KIT PROFISSIONAL...",
        },
        {
          id: 7,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_banho_de_colageno_display-RTW-1024x880.png",
          name: "KIT BANHO DE COL...",
        },
        {
          id: 8,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mont_banner_produtos_especialidades-PROD.png",
          name: "KIT LAVATÓRIO ES...",
        },
        {
          id: 9,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_royal-finish_500g-818x1024.png",
          name: "MÁSCARA PARA FIN...",
        },
        {
          id: 10,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_selfcare_mascara_250ml_cacheadosSS-1024x881.png",
          name: "SELF CARE CABELO...",
        },
        {
          id: 11,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_selfcare_shampoo_250ml_regeneracao-1-1024x880.png",
          name: "Self Care Regene...",
        },
        {
          id: 12,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_selfcare_shampoo_250ml_loiros-01-1024x880.png",
          name: "SELF CARE PROTEÇ...",
        },
        {
          id: 13,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_selfcare_shampoo_250ml_liso-01-1024x880.png",
          name: "SELF CARE MANUTE...",
        },
        {
          id: 14,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/06/mont_banner_produtos_blond_tech-BANNERR-min-300x300.png",
          name: "LINHA BLOND TECH",
        },
        {
          id: 15,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_happy-end_spray_60ml-min-1024x880.png",
          name: "SPRAY DE ALTO BR...",
        },
        {
          id: 16,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_happy-end_oleo_60ml-min-1024x881.png",
          name: "ÓLEO DE REPARAÇÃ...",
        },
        {
          id: 17,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_happy-end_pomada_80g-1024x764.png",
          name: "POMADA DE FINALI...",
        },
        {
          id: 18,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/ATIVADOR-DE-CACHOS-SECRET-CURL-1024x881.png",
          name: "ATIVADOR DE CACH...",
        },
        {
          id: 19,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mockup_hair-spray01_400ml-min-1536x1321.png",
          name: "HAIR SPRAY",
        },
        {
          id: 20,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/06/mont_produtos_cc-cream.png",
          name: "CC CREAM LEAVE I...",
        },
        {
          id: 21,
          image:
            "https://olenkacosmeticos.com.br/wp-content/uploads/2020/11/mockup_happy-end_po-modelador_20g-min-1.png",
          name: "PÓ MODELADOR",
        },
      ],
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