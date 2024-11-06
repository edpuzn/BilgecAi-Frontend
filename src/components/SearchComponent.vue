<template>
  <div class="chat-container">
    <div class="header">
      <h1>BilgecAI</h1>
    </div>
    <div class="chat-box">
      <div class="chat-history">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          <div v-if="message.sender === 'ai'" class="bot-avatar">
            <img src="@/assets/Bilgecan.png" alt="BilgecAI" />
          </div>
          <div class="message-content-wrapper">
            <div class="message-content" v-html="formatMessage(message.text)"></div>
            <div v-if="message.images && message.images.length" class="images">
              <div v-for="(image, imgIndex) in message.images" :key="imgIndex" class="image-container">
                <img :src="image.url" :alt="image.alt" class="message-image" />
                <p class="image-caption">{{ image.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-area">
      <input v-model="query" type="text" placeholder="Aramak istediğin şeyi yaz..." @keyup.enter="performSearch" />
      <button @click="performSearch" class="search-button">Ara</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { marked } from 'marked';

export default {
  name: "SearchComponent",
  data() {
    return {
      query: '',
      messages: [],
    };
  },
  created() {
    this.addSuggestionFromQuery();
  },

  methods: {
    addSuggestionFromQuery() {
      const suggestion = this.$route.query.suggestion;
      if (suggestion) {
        this.messages.push({
          sender: 'ai',
          text: suggestion
        });
      }
    },
    async performSearch() {
      if (this.query.trim() === '') {
        return;
      }
      this.messages.push({ sender: 'user', text: this.query });
      try {
        const response = await axios.post('http://localhost:8080/api/search', {
          query: this.query,
        });
        if (response && response.data && Array.isArray(response.data)) {
          const aiResponse = response.data[0];
          this.messages.push({
            sender: 'ai',
            text: aiResponse.text || aiResponse,
            images: aiResponse.images || []
          });
        }
        this.query = '';
      } catch (error) {
        console.error('Hata oluştu:', error);
      }
    },
    formatMessage(text) {
      return text ? marked(text) : '';
    },
  },
};
</script>

<style scoped>
/* Genel chat-container ayarları */
.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 900px;
  margin: 30px auto;
  background: linear-gradient(145deg, #ffffff, #e6e9f0);
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 2px solid #4a90e2;
  transition: all 0.3s ease-in-out;
}

/* Başlık stili */
.header {
  background: linear-gradient(to right, #4a90e2, #6a5acd);
  color: #ffffff;
  text-align: center;
  padding: 25px;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Sohbet geçmişi alanı */
.chat-box {
  height: 500px;
  overflow-y: auto;
  padding: 30px;
  background: #f0f4f8;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

/* Mesaj stili */
.message {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  max-width: 60%;
  word-wrap: break-word;
  transition: transform 0.3s, box-shadow 0.3s;
}

/* Kullanıcı ve AI mesajları için farklı renkler */
.user {
  align-self: flex-end;
  background: #cdeffc;
  color: #00796b;
  box-shadow: 0 8px 25px rgba(0, 121, 107, 0.2);
  margin-left: auto;
}

.ai {
  align-self: flex-start;
  background: #e1f5c4;
  color: #33691e;
  box-shadow: 0 8px 25px rgba(51, 105, 30, 0.2);
  margin-right: auto;
  display: flex;
}

.bot-avatar {
  margin-right: 10px;
  flex-shrink: 0;
  align-self: flex-start;
}

.bot-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.message-content-wrapper {
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 60px);
}

.message:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

/* Mesaj içeriği */
.message-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Görsel ve açıklama alanı */
.images {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.image-container {
  margin-bottom: 15px;
  border-radius: 15px;
  overflow: hidden;
}

.message-image {
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.image-caption {
  font-size: 1rem;
  color: #666;
  margin-top: 8px;
}

/* Giriş alanı */
.input-area {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #f9fafc;
  border-top: 1px solid #ddd;
}

input {
  flex: 1;
  padding: 15px;
  border-radius: 30px;
  border: 2px solid #ccc;
  font-size: 1.1rem;
  margin-right: 15px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  border-color: #4a90e2;
  outline: none;
  box-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
}

.search-button {
  background: linear-gradient(to right, #4a90e2, #6a5acd);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
}

.search-button:hover {
  background: linear-gradient(to right, #357ab7, #483d8b);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
</style>
