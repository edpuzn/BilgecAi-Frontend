<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          <!-- Adding back the original image logo -->
          <img src="@/assets/Bilgecan.png" alt="BilgeCan Logo" />
        </router-link>
      </div>

      <div class="logo bilgecai-logo">
        <router-link to="/">
          <!-- Enlarged BilgecAI logo SVG with new color scheme -->
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 500 200">
            <!-- Background Gradient -->
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#34dbe6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3f88e8;stop-opacity:1" />
              </linearGradient>
            </defs>

            <!-- Text Design -->
            <text x="50" y="150" font-family="'Dancing Script', cursive" font-size="100" font-weight="bold" fill="url(#grad1)" style="filter: drop-shadow(0px 5px 10px rgba(0,0,0,0.3));">
              BilgecAI
            </text>

            <!-- Reflection Effect -->
            <text x="50" y="180" font-family="'Dancing Script', cursive" font-size="100" font-weight="bold" fill="url(#grad1)" style="opacity: 0.2; transform: scaleY(-1);">
              BilgecAI
            </text>
          </svg>
        </router-link>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Anasayfa</router-link></li>
        <li><router-link to="/hakkimizda">Hakkımızda</router-link></li>
        <li>
          <router-link to="/nasil-kullanilir">Nasıl Kullanırım</router-link>
        </li>
        <li><router-link to="/bilgebot-choice">BilgecAI</router-link></li>
      </ul>
    </nav>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <p><strong>&copy; 2024 BilgecAİ</strong> </p>
        </div>
        <div class="footer-right">
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener"
            ><i class="fab fa-facebook"></i
            ></a>
            <a href="#" target="_blank" rel="noopener"
            ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" target="_blank" rel="noopener"
            ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" target="_blank" rel="noopener"
            ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 10px 20px;
  height: 80px;
}

.logo img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo img:hover {
  transform: scale(1.3);
  box-shadow: 0 15px 30px rgb(255, 255, 255);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.bilgecai-logo {
  margin-left: 20px;
}

.logo {
  font-size: 1.5em;
  color: #8f3434;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  transition: color 0.3s, transform 0.3s, box-shadow 0.3s;
  padding: 10px 15px;
  border-radius: 10px;
}

.nav-links a:hover {
  color: #ffffff;
  transform: scale(1.1);
  box-shadow: 0px 4px 15px rgb(0, 154, 214);
  background-color: rgba(
      255,
      255,
      255,
      0.1
  );
}

.nav-links li {
  /* Her menü öğesi için biraz boşluk */
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  flex: 1;
  text-align: left;
  font-size: 0.9em;
}

.footer-right {
  flex: 1;
  text-align: right;
}

.footer-left p {
  margin: 5px 0;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.5em;
  transition: color 0.3s, transform 0.3s;
}

.social-links a .fa-facebook {
  color: #3b5998;
}

.social-links a .fa-twitter {
  color: #00acee;
}

.social-links a .fa-instagram {
  color: #e1306c;
}

.social-links a .fa-linkedin {
  color: #0e76a8;
}

.social-links a:hover {
  transform: scale(1.3);
}

.social-links a:hover .fa-facebook {
  color: #6d84b4;
}

.social-links a:hover .fa-twitter {
  color: #33bfff;
}

.social-links a:hover .fa-instagram {
  color: #fd1d1d;
}

.social-links a:hover .fa-linkedin {
  color: #0077b5;
}

.footer-left,
.footer-right {
  flex: 1;
  margin: 10px 0;
}
</style>