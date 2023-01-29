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
        { img: "https://s1.hostingkartinok.com/uploads/images/2023/01/75df45f8ce5326e23720653ca09b0643.png", name: "Flower Mantap" },
        { img: "https://s1.hostingkartinok.com/uploads/images/2023/01/e80e02d90980b3e2fff30e2bcb262d81.png", name: "Puma" },
        { img: "https://s1.hostingkartinok.com/uploads/images/2023/01/6c536f4b14a91f9b97c0f8d20ada4f99.png", name: "Food Market" },
        { img: "https://s1.hostingkartinok.com/uploads/images/2023/01/3fa2d1fa727995f87372afb0d4d4ddbe.jpeg", name: "Rise Creative" },
        { img: "https://s1.hostingkartinok.com/uploads/images/2023/01/c046965305e16f7a4b3f2e21aa8fdbc1.jpeg", name: "NFT" },
        { img: "https://s1.hostingkartinok.com/uploads/images/2023/01/cfbe94f78467b8233e5df9e589d723ee.jpeg", name: "Night Trips" },
      ],
    };
  },
};
</script>
<style></style>
