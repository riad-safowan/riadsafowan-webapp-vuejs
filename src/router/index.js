import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";

const routes = [
  { path: '/home', redirect: '/' },
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "", name: "home", component: Home },
      { path: "about", name: "about", component: ()=>import('../views/About.vue') },
      { path: "contact", name: "contact", component: ()=>import('../views/Contact.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
