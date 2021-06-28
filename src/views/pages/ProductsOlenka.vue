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
            :src="product.imagem"
            alt=""
          >
          <div class="description-container">
            <nav>
              <button
                id="beneficios"
                class="nav-button nav-button-selected"
                @click="clickTab('beneficios')"
              >
                BENEFÍCIOS
              </button>
              <button
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
              </button>
            </nav>
            <p
              id="beneficiosItem"
              style="display: block"
            >
              {{ product.benefits }}
            </p>
            <p
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
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="
              'https://api.whatsapp.com/send?phone=551532221110&amp;text=Ol%C3%A1%2C%20tudo%20bem%3F%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20' +
                product.name
            "
            class="wpp-button"
          ><strong style="color:white">COMPRE AQUI</strong></a>
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
import products from "../../utils/products";
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
      products,
      product: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      return this.products
        .filter((e) => e.id == this.id)
        .map((e) => (this.product = e));
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
/* #page-product {
  height: 100vh;
  width: 100vw;
}

#page-product main {
  margin: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#page-product main section {
  background-color: black;
  flex-direction: column;
  border-radius: 1rem;
  display: flex;
  width: 90%;
  padding: 2rem 2rem;
}

#page-product main section h1 {
  align-self: center;
  color: white;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 2rem;
  align-items: center;
  justify-items: center;
}

.description-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 34rem;
  border-radius: 1rem;
  overflow: hidden;
}

.description-container nav {
  background-color: orange;
  display: flex;
  align-items: center;
    //justify-content: flex-start;
  max-height: 5rem;
}

.nav-button {
  background-color: rgba(0, 0, 0, 0);
  color: black;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;
}

.nav-button-selected {
  background-color: white;

  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
}

.nav-button:hover {
  background-color: white;
}

.description-container p {
  padding: 1rem;
}

.wpp-button {
  margin: 2rem 0;

  font-size: 2rem;

  background-color: #00ff00;
  color: white;
  padding: 1rem;
  border-radius: 20px;
  grid-column: 2;
  max-width: 18rem;

  transition: 0.2s;
}

.wpp-button:hover {
  background-color: green;
}

.product-image {
  display: flex;
  height: 28rem;
  width: 28rem;
}

@media (max-width: 800px) {
  .product-container {
    display: flex;
    flex-direction: column;
  }

  .description-container {
    margin-top: 5rem;
  }
  .description-container nav {
    justify-content: center;
  }
  .nav-button {
    padding: 2rem 1rem;
    outline: none;
  }
  .nav-button-selected {
    padding: 2rem 1rem;
    outline: none;
  }
} */
*{
overflow-x: hidden;
}
</style>