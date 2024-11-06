<template>
  <div class="anasayfa">
    <!-- BilgeCan Resmi -->
    <section class="bilgecan-section">
      <img src="@/assets/Bilgecan.png" alt="BilgeCan" class="bilgecan-logo" />
      <div class="bilgecan-title">BilgecAI</div>
    </section>

    <!-- Lorem Ipsum Metni -->
    <section class="lorem-section">
      <h1><strong>Hoş Geldiniz!</strong></h1>
      <p>
  Merhaba sevgili öğrenciler! BilgecAI'a hoş geldiniz! <strong>BilgecAI</strong>, öğrenme yolculuğunuz boyunca yanınızda olacak, sorularınızı yanıtlayacak ve size rehberlik edecek bir dijital asistan. Matematikten fiziğe, tarihten kimyaya kadar merak ettiğiniz konuları birlikte keşfedeceğiz. İster sınavlara hazırlanıyor olun, ister sadece öğrenmenin tadını çıkarıyor olun, BilgeBot her zaman hazır! Sormak istediklerinizi çekinmeden sorun, çünkü BilgecAI'ın amacı sizinle birlikte büyümek ve sizi daha da ileriye taşımak. Hazırsanız, başlayalım!
    </p>

    </section>

    <section class="image-gallery">
      <div class="image-item" v-for="(image, index) in images" :key="index">
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.alt" />
        </div>
        <div class="text-content">
          <p class="caption">{{ image.caption }}</p>
          <p class="description">{{ image.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bilgecan from '@/assets/anasayfa/mat-teach.png';
import Fizik from '@/assets/anasayfa/fizik-teach.png';
import Kimya from '@/assets/anasayfa/kimya-teach.png';
export default {
  name: 'AnaSayfa',
  data() {
    return {
      images: [
        {
          src: Bilgecan,
          alt: 'Matematik Dersi',
          caption: 'Matematiğin Sınırsız Dünyasına Hoş Geldiniz',
          description: 'Matematik dersinde, analitik düşünceyi geliştiren ve gerçek hayat problemlerine çözümler üreten konuları keşfedeceksiniz.'
        },
        {
          src: Fizik,
          alt: 'Fizik Dersi',
          caption: 'Fizik Kuralları ile Evreni Anlama',
          description: 'Fizik dersinde, evrenin işleyişini anlamanıza yardımcı olacak kuvvet, hareket ve enerji gibi temel konularla tanışacaksınız.'
        },
        {
          src: Kimya,
          alt: 'Kimya Dersi',
          caption: 'Kimyanın Gizemli Reaksiyonları',
          description: 'Kimya dersinde, maddelerin yapısını ve bu yapıların nasıl dönüştüğünü keşfederek kimyanın büyülü dünyasına adım atın.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.anasayfa {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #333;
  padding: 60px 20px 20px; /* Adjusted padding to create more space below the title */
}

.bilgecan-section {
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.bilgecan-container {
  position: relative;
  display: inline-block;
}

.bilgecan-logo {
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bilgecan-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.bilgecan-title {
  position: absolute;
  top: +375px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #34dbe6, #3f88e8);
  -webkit-background-clip: text;
  color: transparent;
  padding: 10px 20px;
  font-size: 2.5em;
  font-weight: bold;
  font-style: italic;
  font-family: 'Dancing Script', cursive; /* Changed font to give it a handwritten feel */
  text-align: center;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.lorem-section {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
}

.lorem-section h1 {
  color: #4256b9;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.lorem-section p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.image-wrapper {
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.image-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.image-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

.text-content {
  text-align: center;
}

.caption {
  font-size: 1.3em;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
}

.description {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .image-gallery {
    grid-template-columns: 1fr;
  }
  .lorem-section {
    padding: 15px;
  }
  .lorem-section h1 {
    font-size: 2em;
  }
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>