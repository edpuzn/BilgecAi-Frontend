import { createRouter, createWebHistory } from 'vue-router';
import Anasayfa from "@/components/Anasayfa.vue";
import BilgebotChoice from "@/components/BilgebotChoice.vue";
import BilgebotChat from "@/components/BilgebotChat.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import Hakkimizda from '@/components/Hakkimizda.vue';
import NasılKullanilir from '@/components/NasılKullanilir.vue';
import NasilKullanilir from '@/components/NasilKullanilir.vue';

const routes = [
  {
    path: '/',
    name: 'Anasayfa',
    component: Anasayfa
  },
  {
    path: '/bilgebot-choice',
    name: 'BilgebotChoice',
    component: BilgebotChoice
  },
  {
    path: '/bilgebot-chat',
    name: 'BilgebotChat',
    component: BilgebotChat
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: Hakkimizda
  },
  {
    path: '/nasil-kullanilir',
    name: 'NasilKullanilir',
    component: NasilKullanilir
  },
  {
    path: '/matematik',
    name: 'matematik',
    component: SearchComponent
  },
  {
    path: '/turkce',
    name: 'turkce',
    component: SearchComponent
  },
  {
    path: '/fizik',
    name: 'fizik',
    component: SearchComponent
  },
  {
    path: '/kimya',
    name: 'kimya',
    component: SearchComponent
  },
  {
    path: '/biyoloji',
    name: 'biyoloji',
    component: SearchComponent
  },
  {
    path: '/din',
    name: 'din',
    component: SearchComponent
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
