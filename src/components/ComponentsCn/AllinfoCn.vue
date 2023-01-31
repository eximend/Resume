<script>
import AboutCn from "./AboutCn.vue";
import ContactCn from "./ContactsCn.vue";
import PortfolioCn from "./PortfolioCn.vue";
import WorkProgramsCn from "./WorkProgramsCn.vue";

export default {
  components: { AboutCn, ContactCn, PortfolioCn, WorkProgramsCn },
};
</script>

<template>
  <header class="header">
    <h1>维克多</h1>
    <h4>
      Python | Js developer <br />
      23 岁, 阿斯塔纳
    </h4>
    <img
      class="header__Photo"
      src="../../images/ResumePhoto.jpg"
      alt="userPhoto"
    />
  </header>
  <main class="main">
    <AboutCn />
    <WorkProgramsCn />
    <PortfolioCn />
    <ContactCn />
  </main>
</template>

<style scoped>
h1{
  margin-top: 69px;
  margin-left: 261px;
  height: 50px;
}

h4 {
  height: 30px;
  font-size: 16px;
  margin-top: -40px;
}

@media only screen and (max-width: 600px) {
  h1{
  margin-top: 0px;
  margin-left: 10px;
  text-align: center;
  height: 50px;
}

h4 {
  height: 55px;
  font-size: 16px;
  margin-left: 26px;
  margin-top: 23px;
}


}
</style>
