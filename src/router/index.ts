import { createRouter, createWebHistory, type Router } from 'vue-router';
import Home from '../views/Home.vue';
import Ticket from '../views/Ticket.vue';

const routes = [
  { path: '/', name: 'app-two-home', component: Home },
  { path: '/ticket/:id', name: 'app-two-ticket', component: Ticket, props: true },
];

export function createAppRouter(base: string): Router {
  return createRouter({
    history: createWebHistory(base),
    routes,
  });
}
