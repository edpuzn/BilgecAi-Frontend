<template>
  <div class="how-to-use-container">
    <!-- Adım Adım Rehber -->
    <section class="step-guide">
      <div class="step-card">
        <div class="step-number">1</div>
        <div class="step-icon">
          <img src="@/assets/nasil-kullanilir/HowToUse-1.png" alt="İlk Sorunuzu Sorun" class="circle-image" />
        </div>
        <h3>İlk Sorunuzu Sorun</h3>
        <p>Hangi dersiniz zayıf geldi? Matematik mi? Fizik mi? Hiç fark etmez.<strong> BilgecAI</strong> ile zorlandığınız her konuda eğlenceli, anlaşılır ve hızlı çözümler bulabilirsiniz! BilgecAI, karmaşık problemleri basitleştirir, anlamadığınız konuları sizinle yeniden keşfeder ve adım adım öğrenmenize yardımcı olur. Artık sıkıcı ders çalışma yöntemlerine veda edin ve BilgecAI ile bilgiye keyifle ulaşın! 🚀✨</p>
      </div>
      <div class="step-card">
        <div class="step-number">2</div>
        <div class="step-icon">
          <img src="@/assets/nasil-kullanilir/HowToUse-2.webp" alt="BilgecAI Cevaplasın" class="circle-image" />
        </div>
        <h3>BilgecAI Cevaplasın</h3>
        <p>📚 Öğrenmenin keyfini çıkarın ve her sorunuzda bir adım daha ileri gidin! 🚀 BilgecAI, sadece bilgi sunmakla kalmaz, aynı zamanda anlamayı kolaylaştırarak bilgiyi derinlemesine kavramanıza yardımcı olur. 🤓 Size uygun tempoda, karmaşık konuları basit ve eğlenceli hale getirir. 🎉 Her adımda kendinizi geliştirin, her keşifte yeni şeyler öğrenin ve BilgecAI ile öğrenme serüveninizi bir üst seviyeye taşıyın! 🌟</p>
      </div>
    </section>

    <!-- Hemen Başlayın Butonu -->
    <div class="cta-container">
      <button class="cta-button" @click="$router.push('/bilgebot-choice')">Hemen Başlayın</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NasilKullanilir',
  data() {
    return {
      steps: [
        { title: 'İlk Sorunuzu Sorun', icon: 'fas fa-question-circle', description: 'Sohbet paneline girin ve merak ettiklerinizi yazın.' },
        { title: 'BilgecAI Cevaplasın', icon: 'fas fa-comments', description: 'BilgecAI’den en iyi cevapları alın ve öğrenmeye devam edin.' }
      ]
    };
  }
};
</script>

<style scoped>
.how-to-use-container {
  padding: 30px;
  font-family: 'Poppins', sans-serif;
}

/* Step Guide */
.step-guide {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.step-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.step-number {
  font-size: 1.5rem;
  color: #D7AB53FF;
  font-weight: bold;
  margin-bottom: 10px;
}

.step-icon {
  margin-bottom: 15px;
}

.circle-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.circle-image:hover {
  transform: scale(1.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.step-icon img {
  max-width: 100%;
  height: auto;
}

.step-card h3 {
  font-size: 1.4rem;
  color: #4a90e2;
  margin-bottom: 10px;
}

.step-card p {
  font-size: 1.1rem;
  color: #666;
}

/* CTA Button */
.cta-container {
  text-align: center;
  margin-top: 20px;
}

.cta-button {
  background: linear-gradient(45deg, #ff6b6b, #f06595, #c084fc);
  color: #ffffff;
  border: none;
  padding: 20px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  background: linear-gradient(45deg, #ff8b8b, #ff75a1, #d4a1ff);
  transform: scale(1.1) rotate(-3deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.cta-button:active {
  transform: scale(0.95);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
</style>
