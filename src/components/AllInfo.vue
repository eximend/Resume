<script>
import About from "./About.vue";
import WorkPrograms from "./WorkPrograms.vue";
import Portfolio from "./Portfolio.vue";
import Contact from "./Contacts.vue";


export default {
  components: { About, WorkPrograms, Portfolio, Contact }
};
</script>

<template>
  <header class="header">
    <h1>Viktor Chebotarev</h1>
    <h4>
      Python | Js developer <br />
      23 years old, Astana
    </h4>
    <img class="header__Photo" src="../images/ResumePhoto.jpg" alt="userPhoto" />
  </header>
  <main class="main">
    <About/>
    <WorkPrograms />
    <Portfolio />
    <Contact />
  </main>
</template>

<style></style>
