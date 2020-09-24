import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import AlertDemo from "./components/AlertDemo.vue";
import { h } from "vue";
const md = (filename) =>
  h(Markdown, { path: `../markdown/${filename}.md`, key: filename });
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect:'doc/introduction' },
        { path: "introduction", component: md("intro") },
        { path: "start", component: md("start") },
        { path: "install", component: md("install") },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "alert", component: AlertDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  //   console.log("路由切换");
});
