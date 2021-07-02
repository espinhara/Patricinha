<template>
  <div id="page-home">
    <Header />
    <a
      class="wpp-container"
      href="https://api.whatsapp.com/send?phone=551532221110&amp;text=Ol%C3%A1%2C%20tudo%20bem%3F%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos"
      ><img src="../../assets/wppIcon.c34cca2a.png" alt="WhatsApp" />
    </a>
    <main>
      <div class="ads">
        <img
          src="https://olenkacosmeticos.com.br/wp-content/uploads/2020/02/mont_banner_produtos_blond_plex-1.jpg"
          alt=""
        />
      </div>
      <Showcase />
      <Aboutme />
    </main>
    <Footer />
  </div>
</template>


<script>
/* eslint-disable */
import Aboutme from "../../components/Aboutme";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Showcase from "../../components/Showcase";
export default {
  components: {
    Aboutme,
    Footer,
    Header,
    Showcase,
  },
};
</script>

<style>
.page-header {
  background-color: #000;
  min-height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
}
.page-header nav {
  display: flex;
}
.page-header nav a {
  color: #faf0f0;
  transition: 0.3s;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 0.5rem 0;
  margin-right: 1rem;
}
.page-header nav a:hover {
  color: #dea443;
  border-color: #dea443;
}
.page-header img:first-child {
  width: 4.5rem;
}
.page-header img:last-child {
  width: 12rem;
}
@media (max-width: 700px) {
  .page-header {
    justify-content: center;
  }
  .page-header img:first-child {
    width: 5.7rem;
  }
  .page-header img:last-child {
    width: 15rem;
  }
  .page-header div:last-child,
  .page-header nav {
    display: none;
  }
}
.page-footer {
  background-color: #000;
  min-height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;
  overflow: hidden;
}
.page-footer > span {
  color: #fff;
  text-align: center;
}
.page-footer h1 {
  color: #dea443;
}
@media (max-width: 700px) {
  .page-footer {
    flex-direction: column-reverse;
    padding: 2rem 0;
  }
  .page-footer img {
    border-radius: 50%;
    padding-bottom: 2rem;
  }
  .page-footer > span {
    padding-bottom: 1rem;
  }
}
#page-home {
  width: 100%;
  height: 100%;
}
#page-home main {
  width: 100%;
  overflow: hidden;
}
.ads img {
  width: 100%;
}
#page-home main > section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
}
#page-home main > section h1 {
  color: #333;
  font-size: 5.5rem;
}
.vitrine {
  background-color: #d3d3d3;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem 2rem;
  gap: 3rem 2rem;
}
.produto,
.vitrine {
  border-radius: 1rem;
}
.produto {
  padding: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5em rgba(0, 0, 0, 0.4);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 21rem;
}
.produto strong {
  text-align: center;
  text-decoration: none;
  color: grey;
}
.produto div {
  overflow: hidden;
}
.foto {
  max-width: 18rem;
  height: auto;
  transition: 0.2s;
}
.foto:hover {
  transform: scale(1.5);
}
.quem-somos {
  background-color: #000;
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  border-radius: 1rem 1rem 0 0;
}
.quem-somos section {
  text-align: center;
  font-size: 20px;
  padding-left: 2rem;
}
.quem-somos img {
  width: 55rem;
  border-radius: 1rem;
}
.quem-somos section h1 {
  font-size: 5rem;
  color: #dea443;
}
@media (max-width: 700px) {
  .vitrine {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 2rem;
    padding: 2rem;
  }
  .quem-somos {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
  .quem-somos img {
    width: 30rem;
    margin-bottom: 2rem;
  }
  .produto {
    width: 14rem;
    height: 15rem;
  }
  .produto img {
    max-width: 12rem;
  }
}
.wpp-container {
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 1rem;
}
.wpp-container img {
  width: 6.5rem;
  height: 6.5rem;
}
#page-product {
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
  background-color: #000;
  flex-direction: column;
  border-radius: 1rem;
  display: flex;
  width: 90%;
  padding: 2rem;
}
#page-product main section h1 {
  align-self: center;
  color: #fff;
}
.product-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 2rem;
  align-items: center;
  justify-items: center;
}
.description-container {
  background-color: #fff;
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
  justify-content: flex-start;
  max-height: 5rem;
}
.nav-button {
  background-color: transparent;
  cursor: pointer;
}
.nav-button,
.nav-button-selected {
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
}
.nav-button-selected,
.nav-button:hover {
  background-color: #fff;
}
.description-container p,
.wpp-button {
  padding: 1rem;
}
.wpp-button {
  margin: 2rem 0;
  font-size: 2rem;
  background-color: #0f0;
  color: #fff;
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
  /* width: 28rem; */
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
  .nav-button,
  .nav-button-selected {
    padding: 2rem 1rem;
    outline: none;
  }
}
html {
  font-size: 70%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#root,
body,
html {
  height: 100vh;
}
body {
  background: #f0f0f7;
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
}
a,
body,
button,
input {
  font: 400 16px Lato, sans-serif;
  border: 0;
  text-decoration: none;
}
h1 {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 1.8rem;
}
.container {
  width: 90vw;
  max-width: 700px;
}
@media (max-width: 700px) {
  html {
    font-size: 62.5%;
  }
}
/*# sourceMappingURL=main.ddc4ea62.chunk.css.map */
</style>