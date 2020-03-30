import Vue from "vue";
import VueRouter from "vue-router";
import SelectingView from "../views/SelectingView";
import SelectingWithNationView from "../views/SelectingWithNationView";
import BuildingView from "../views/BuildingView";
import ComparingView from "../views/ComparingView";
import About from "../views/About";
import Home from "../views/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/selecting",
      name: "selecting",
      component: SelectingView,
    },
    {
      path: "/selecting/:nationId",
      name: "selecting-with-nation",
      component: SelectingWithNationView,
    },
    {
      path: "/building/:name",
      name: "building",
      component: BuildingView,
    },
    {
      path: "/comparing",
      name: "comparing",
      component: ComparingView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
