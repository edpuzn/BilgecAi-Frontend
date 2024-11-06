<template>
    <section class="hakkimizda">
      <div class="hakkimizda-container">
        <h1>Hakkımızda</h1>
        <p>
          Merhaba! Biz, öğrenciler için öğrenme deneyimini daha eğlenceli ve etkili hale getirmeyi amaçlayan bir ekip olarak buradayız. BilgecAI projesi, farklı derslerde öğrencilere yardımcı olmak, anlamadıkları konuları daha anlaşılır kılmak ve öğrenme sürecini kolaylaştırmak için geliştirildi. BilgecAI ile her öğrenciye bireysel bir öğretmen sunuyoruz; istediğiniz zaman soru sormaktan, zorlandığınız konuları yeniden gözden geçirmekten ve hatta sınavlara hazırlanırken pratik yapmaktan çekinmeyin!
        </p>
        <p>
          Ekibimiz, alanında uzman eğitimciler ve teknolojiyi seven geliştiricilerden oluşuyor. Amacımız, teknolojinin gücüyle eğitimi daha ulaşılabilir ve herkes için erişilebilir kılmak. Yenilikçi yaklaşımımız ve öğrenci odaklı metodolojimiz sayesinde, herkesin kendi hızında ve kendi tarzında öğrenmesini destekliyoruz.
        </p>
        <p>
          Unutmayın, öğrenme süreci bazen zorlayıcı olabilir, ama birlikte başaramayacağımız hiçbir şey yok. BilgecAI ekibi olarak, her öğrencinin potansiyelini gerçekleştirmesine yardımcı olmayı taahhüt ediyoruz. Hep birlikte, bilginin büyülü dünyasında yeni keşifler yapmaya var mısınız?
        </p>
        <h2>Bizimle İletişime Geçin</h2>
        <p>
          BilgecAI hakkında daha fazla bilgi almak ya da öneri ve sorularınızı bizimle paylaşmak için bize ulaşın. Sizlerin geri bildirimleri, bizi daha da ileriye taşır!
        </p>
        <router-link to="/" class="contact-button">Bize Ulaşın</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line
    name: 'Hakkimizda'
  }
  </script>
  
  <style scoped>
  .hakkimizda-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .hakkimizda h1 {
    font-size: 2.5em;
    color: #4256b9;
    margin-bottom: 20px;
  }
  
  .hakkimizda p {
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
  }
  
  .contact-button {
    display: inline-block;
    margin-top: 20px;
    padding: 15px 25px;
    font-size: 1.2em;
    color: white;
    background-color: #4256b9;
    text-decoration: none;
    border-radius: 10px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .contact-button:hover {
    background-color: #314498;
    transform: translateY(-3px);
  }
  </style>