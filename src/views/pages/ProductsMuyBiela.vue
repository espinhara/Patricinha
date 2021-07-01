<template>
  <div id="page-product">
    <Header />
    <main>
      <section>
        <h1>
          {{ product.name }}
        </h1>
        <div class="product-container">
          <img
            class="product-image"
            :src="product.image"
            alt=""
          >
          <div class="description-container">
            <nav>
              <button
                id="beneficios"
                class="nav-button nav-button-selected"
                @click="clickTab('beneficios')"
              >
                INFORMAÇÕES
              </button>
              <!-- <button
                id="servicos"
                class="nav-button"
                @click="
                  clickTab('servicos');
                  clickTab('servicos');
                "
              >
                SERVIÇOS
              </button>
              <button
                id="modo_de_uso"
                class="nav-button"
                @click="clickTab('modo_de_uso')"
              >
                MODO DE USO
              </button> -->
            </nav>
            <p
              id="beneficiosItem"
              style="display: block;"
            >
            {{ product.information }}
            </p>
            <!-- <p
              id="servicosItem"
              style="display: none"
            >
              {{ product.services }}
            </p>
            <p
              id="modo_de_usoItem"
              style="display: none"
            >
              {{ product.howtouse }}
            </p> -->
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="
              'https://api.whatsapp.com/send?phone=551532221110&amp;text=Ol%C3%A1%2C%20tudo%20bem%3F%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20' +
                product.name
            "
            class="wpp-button"
          ><strong style="color: white">COMPRE AQUI</strong></a>
        </div>
      </section>
    </main>
    <a
      class="wpp-container"
      href="https://api.whatsapp.com/send?phone=551532221110&amp;text=Ol%C3%A1%2C%20tudo%20bem%3F%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos"
    ><img
      src="../../assets/wppIcon.c34cca2a.png"
      alt="WhatsApp"
    >
    </a>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable */
import PoductsMuyBiela from "../../utils/poductsMuyBiela";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      id: this.$route.params.id,
      PoductsMuyBiela,
      product: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      return this.PoductsMuyBiela.filter((e) => e.id == this.id).map(
        (e) => (this.product = e)
      );
    },
    clickTab(ref) {
      let refs = ["beneficios", "servicos", "modo_de_uso"];
      let desableds = refs.filter((f) => f != ref).map((e) => e);
      desableds.forEach((el) => {
        document
          .querySelector(`#${el}`)
          .classList.remove("nav-button-selected");
        document.getElementById(`${el}Item`).style.display = "none";
      });
      document.querySelector(`#${ref}`).classList.add("nav-button-selected");
      document.getElementById(`${ref}Item`).style.display = "block";
    },
  },
};
</script>

<style>
*{
    overflow-x: hidden;    
}
</style>