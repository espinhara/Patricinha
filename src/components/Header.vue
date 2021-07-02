<template>
  <header class="page-header">
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&amp;display=swap"
      rel="stylesheet"
    >
    <div>
      <a href="/">
        <img
          src="../assets/logopt1.7e080f83.png"
          alt=""
          srcset=""
        >
        <img
          src="../assets/download.png"
          alt=""
          srcset=""
        >
      </a>
    </div>
    <nav>
      <a
        href="/"
        style="text-decoration: none"
      >
        <h1>Início</h1>
      </a>
      <div class="subnav">
        <h1 class="subnavbtn">Produtos <i class="fa fa-caret-down"></i></h1>
        <div class="subnav-content">
          <a href="/#olenka">Olenka</a>
          <a href="/#muy_biela">Muy Biela</a>
        </div>
      </div>
      <a
        href="/#quemsomos"
        style="text-decoration: none"
      >
        <h1>Quem Somos</h1>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: none;"
        href="https://api.whatsapp.com/send?phone=551532221110"
      >
        <h1>Fale Conosco</h1>
      </a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
  .subnav {
  float: left;
  overflow: hidden;
}
.subnav .subnavbtn {
  /* margin: 0; */
  /* border: none; */
  color: #faf0f0;
  transition: 0.3s;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 0.5rem 0;
  margin-right: 1rem;
  background: #000;
}
.subnav .subnavbtn:hover{
  color: #dea443;
  border-color: #dea443;
}
.subnav-content {
  display: none;
  position: absolute;
  /* left: 0; */
  /* background-color: red; */
  width: 100%;
  z-index: 1;
}
.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
  color: #dea443;
  border-color: #dea443;
}

/* Add a grey background color on hover */
.subnav-content a:hover {
  color: #dea443;
  border-color: #dea443;
}

/* When you move the mouse over the subnav container, open the subnav content */
.subnav:hover .subnav-content {
  display: block;
}
</style>