<script>
import AboutRu from "./AboutRu.vue";
import WorkProgramsRu from "./WorkProgramsRu.vue";
import PortfolioRu from "./PortfolioRu.vue";
import ContactRu from "./ContactsRu.vue";


export default {
  components: { AboutRu, WorkProgramsRu, PortfolioRu, ContactRu }
};
</script>

<template>
  <header class="header">
    <h1>Виктор Чеботарев</h1>
    <h4>
      Python | Js developer <br />
      23 года, Астана
    </h4>
    <img class="header__Photo" src="../../images/ResumePhoto.jpg" alt="userPhoto" />
  </header>
  <main class="main">
    <AboutRu/>
    <WorkProgramsRu />
    <PortfolioRu />
    <ContactRu />
  </main>
</template>

<style></style>
