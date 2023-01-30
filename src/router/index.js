import { createRouter, createWebHistory } from "vue-router";

// EngVersion

import About from "../components/About.vue";
import AllInfo from "../components/AllInfo.vue";
import Contacts from "../components/Contacts.vue";
import Portfolio from "../components/Portfolio.vue";
import WorkProgram from "../components/WorkPrograms.vue";

// RuVersion

import AboutRu from "../components/ComponentsRu/AboutRu.vue";
import AllInfoRu from "../components/ComponentsRu/AllinfoRu.vue";
import ContactsRu from "../components/ComponentsRu/ContactsRu.vue";
import WorkProgramRu from "../components/ComponentsRu/WorkProgramsRu.vue";
import PortfolioRu from "../components/ComponentsRu/PortfolioRu.vue";

// CnVersion

import AboutCn from "../components/ComponentsCn/AboutCn.vue";
import AllInfoCn from "../components/ComponentsCn/AllinfoCn.vue";
import ContactsCn from "../components/ComponentsCn/ContactsCn.vue";
import WorkProgramCn from "../components/ComponentsCn/WorkProgramsCn.vue";
import PortfolioCn from "../components/ComponentsCn/PortfolioCn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "AllInfo",
      component: AllInfo,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/workprogram",
      name: "WorkProgram",
      component: WorkProgram,
    },
    {
      path: "/ru",
      name: "AllInfoRu",
      component: AllInfoRu,
    },
    {
      path: "/about/ru",
      name: "AboutRu",
      component: AboutRu,
    },
    {
      path: "/contact/ru",
      name: "ContactsRu",
      component: ContactsRu,
    },
    {
      path: "/workprogram/ru",
      name: "WorkProgramRu",
      component: WorkProgramRu,
    },
    {
      path: "/portfolio/ru",
      name: "PortfolioRu",
      component: PortfolioRu,
    },
    {
      path: "/portfolio/cn",
      name: "PortfolioCn",
      component: PortfolioCn,
    },
    {
      path: "/workprogram/cn",
      name: "WorkProgramCn",
      component: WorkProgramCn,
    },
    {
      path: "/contact/cn",
      name: "ContactsCn",
      component: ContactsCn,
    },
    {
      path: "/cn",
      name: "AllInfoCn",
      component: AllInfoCn,
    },
    {
      path: "/about/cn",
      name: "AboutCn",
      component: AboutCn,
    },
  ],
});

export default router;
