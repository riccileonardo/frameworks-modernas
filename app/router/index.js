import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HousesView from '@/views/HousesView.vue';
import QuizView from '@/views/QuizView.vue';
import ResultsView from '@/views/ResultsView.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/houses', component: HousesView },
  { path: '/quiz', component: QuizView },
  { path: '/results', component: ResultsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;