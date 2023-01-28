<template>
  <div class="portfolio">
    <h2>Portfolio</h2>
    <div class="Portfolio__Grid">
        <div v-for="item in portfolio" :key="item">
      <img class="portfolioImg" :src="item.img" :alt="item.name" />
      <h3>{{ item.name }}</h3>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      portfolio: [
        { img: "../images/firstSite.png", name: "Flower Mantap" },
        { img: "../images/secondSite.png", name: "Puma" },
        { img: "../images/thrdSite.png", name: "Food Market" },
        { img: "../images/fourthSite.png", name: "Rise Creative" },
        { img: "../images/fifthSite.png", name: "NFT" },
        { img: "../images/sixSite.png", name: "Night Trips" },
      ],
    };
  },
};
</script>
<style></style>
