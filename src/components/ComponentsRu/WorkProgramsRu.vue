<template>
  <div class="Skills">
    <h2>Навыки</h2>
    <p>Я работаю с такими языками программирования и программами как:</p>
    <div class="skills__Wrapper">
      <div v-for="item in workProgram" :key="item">
        <img class="skills__Icons" :src="item.program" alt="item.name" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      workProgram: [
        {
          program: "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
          name: "JavaScript",
        },
        {
          program: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
          name: "Python",
        },
        {
          program: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
          name: "Figma",
        },
        {
          program: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
          name: "PosgreSQL",
        },
        {
          program: "https://img.icons8.com/color/256/vue-js.png",
          name: "Vue.js",
        },
      ],
    };
  },
};
</script>
<style></style>
