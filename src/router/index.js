import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { routeNames } from "@/lib/constants/routes";

const routes = [
  {
    path: "/",
    name: routeNames.home,
    component: Home,
  },
  {
    path: "/characters",
    name: routeNames.characters,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "characters" */ "../views/Characters.vue"),
  },
  {
    path: "/about",
    name: routeNames.about,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/details/:id",
    name: routeNames.characterDetails,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/CharacterDetails.vue"),
  },
  {
    path: "/episodes",
    name: routeNames.episodes,
    component: () =>
      import(/* webpackChunkName: "episodes" */ "../views/Episodes.vue"),
    children: [
      {
        path: ":id",
        name: routeNames.episodeDetails,
        component: () =>
          import(/* webpackChunkName: "episodes" */ "../views/EpisodeDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
