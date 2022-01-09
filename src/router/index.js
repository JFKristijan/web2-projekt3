import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SpeedCalulator from "../views/Calculator.vue";
import NotFound from "../views/NotFound.vue"
import Timer from "../views/Timer.vue"
import Quotes from "../views/Quotes.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: SpeedCalulator,
  },
  {
    path: "/timer",
    name: "Timer",
    component: Timer,
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: Quotes,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
