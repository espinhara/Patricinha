<template>
  <!-- <footer class="page-footer">
    <img
      src="data:image/jpeg;base64,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"
      alt=""
    />
    <span
      >Patricinha Cosméticos ©Copyright 2020<br />Todos os Direitos
      Reservados</span
    ><span>
      <ul>
        <h1>CONTATO</h1>
        <li>
          <strong>Email:</strong> Patricinhacosmeticossorocaba@outlook.com
        </li>
        <li><strong>Whatsapp:</strong> 15 32221110</li>
      </ul>
    </span>
  </footer> -->
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3>Serviços</h3>
            <ul>
              <li><a href="#">Web design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3>Sobre</h3>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>Patricinha Cosméticos</h3>
            <p>
              Endereço: Avenida Doutor Américo
              Figueiredo nº 882, Jardim Simus Sorocaba SP.
            </p>
            <p>
              CEP: 18055-132
            </p>
            <p>
              Fone e Whatsapp: 15 32221110. 
            </p>
            <p>
              CNPJ: 29.618.280/0001-88  
            </p> 
          </div>
          <div class="col item social">
            <a href="https://www.facebook.com/Patricinhacosmeticossorocaba"><i class="icon ion-social-facebook"></i></a>
            <!-- <a href="#"><i class="icon ion-social-twitter"></i></a>
            <a href="#"><i class="icon ion-social-snapchat"></i></a> -->
            <a href="https://www.instagram.com/patricinhacosmeticos/"><i class="icon ion-social-instagram"></i></a>
          </div>
        </div>
        <p class="copyright">Patricinha Cosméticos © 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-dark {
  padding: 50px 0;
  color: #f0f9ff;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}

/* https://epicbootstrap.com/snippets/footer-dark */
</style>