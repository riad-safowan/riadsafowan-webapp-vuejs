import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "about", name: "about", component: About },
      { path: "contact", name: "contact", component: Contact },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
