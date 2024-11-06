<template>
  <div class="container">
    <div class="card-container">
      <div class="card" @click="handleClick('matematik')">
        <h3><i>Matematik</i></h3>
        <p>Matematiğin karmaşık dünyasını basitleştirerek, cebirden kalkülüsü kadar her konuda derin bilgi sunuyorum. Problemleri eğlenceli ve anlaşılır bir şekilde çözmenizi sağlıyorum. Matematik artık bir zorluk değil, zihinsel bir macera olacak!</p>
      </div>
      <div class="card" @click="handleClick('turkce')">
        <h3><i>Türkçe</i></h3>
        <p>Dil bilgisi, edebiyat, ve yazım kurallarını sadece öğrenmekle kalmayıp, ifade gücünüzü de artırıyorum. Türkçenin zenginliğini keşfetmeniz ve etkileyici yazılar yazmanız için size rehberlik ediyorum. Türkçe dersleri artık keyifli bir dil yolculuğu!</p>
      </div>
      <div class="card" @click="handleClick('fizik')">
        <h3><i>Fizik</i></h3>
        <p>Fiziğin gizemli kurallarını anlamanızı sağlıyorum. Kuvvetlerden elektrik alanlara, kuantum mekaniğine kadar her konuda merakınızı uyandırarak evreni keşfetmenize yardımcı oluyorum. Fizik dersleri artık formüllerin ötesinde bir hayat deneyimi olacak!</p>
      </div>
      <div class="card" @click="handleClick('kimya')">
        <h3><i>Kimya</i></h3>
        <p>Atomların ve moleküllerin dünyasını keşfedin! Kimyasal reaksiyonları anlamaktan, organik kimyaya kadar tüm konularda size rehberlik ediyorum. Kimya artık sadece laboratuvar değil, günlük hayatınızda gördüğünüz sihirli bir dünya olacak!</p>
      </div>
      <div class="card" @click="handleClick('biyoloji')">
        <h3><i>Biyoloji</i></h3>
        <p>Canlıların büyüleyici dünyasına hoş geldiniz! Hücrelerden ekosistemlere kadar hayatın tüm boyutlarını derinlemesine keşfetmeniz için buradayım. Biyoloji, artık doğanın sırlarını anlamanın ve bu sırları kendi yararınıza kullanmanın bir yolu olacak!</p>
      </div>
      <div class="card" @click="handleClick('din')">
        <h3><i>Din</i></h3>
        <p>Din kültürünü ve ahlak bilgisini, yaşamınızı zenginleştirecek ve farklı kültürlere anlayış kazandıracak şekilde sunuyorum. Dini değerlerin derin anlamlarını keşfederek, manevi dünyanızı genişletmenize yardımcı oluyorum. Din dersleri artık sadece öğrenmek değil, hayatı anlamlandırmak!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BilgebotChoice",
  methods: {
    handleClick(topic) {
      const defaultSuggestions = {
        matematik: "Matematik dünyasında neler merak ediyorsunuz? Cebir, geometri veya kalkülüs hakkında sorularınız varsa, size yardımcı olabilirim.",
        turkce: "Türkçe konusunda hangi konuda yardıma ihtiyacınız var? Dil bilgisi, edebiyat veya yazım kuralları ile ilgili sorularınız olabilir.",
        fizik: "Fizik dünyasında neyi keşfetmek istersiniz? Kuvvetler, hareket veya elektrik gibi konular hakkında konuşabiliriz.",
        kimya: "Kimyanın büyüleyici dünyasına adım atmaya ne dersiniz? Kimyasal reaksiyonlar, elementler veya organik kimya hakkında sorularınızı bekliyorum.",
        biyoloji: "Biyoloji konusunda hangi konuda bilgi almak istersiniz? Hücre biyolojisi, evrim veya ekosistemler gibi konulara dalabiliriz.",
        din: "Din kültürü ve ahlak bilgisi konusunda sorularınız varsa, farklı kültürleri ve dini değerleri anlamanıza yardımcı olabilirim."
      };

      this.$router.push({
        name: topic,
        query: {
          suggestion: defaultSuggestions[topic] || "Bu konuda size nasıl yardımcı olabilirim?"
        }
      });
    }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #ffffff, #ffffff);
  min-height: 100vh;
  color: #ffffff;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 40px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  color: #fffbfb;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 15px 25px rgb(30, 169, 223);
}

.card h3 {
  margin-bottom: 15px;
  font-size: 1.6em;
  font-weight: bold;
  color: #0596e4;
}

.card p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #000000;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 20px;
  }
}
</style>
