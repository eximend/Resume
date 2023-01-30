<script>
import { RouterLink, RouterView } from "vue-router";


export default {
  data() {
    return {
      language:0,
      headerNav: [[{name:'Home',link:'/'}, {name:"About",link:'/about'},{name:"Skills",link:'/workprogram'},{name:"Portfolio",link:'/portfolio'},{name:"Contacts",link:'/contacts'}],
      [{name:'Главная',link:'/ru'}, {name:"Обо мне",link:'/about/ru'},{name:"Навыки",link:'/workprogram/ru'},{name:"Портфолио",link:'/portfolio/ru'},{name:"Контакты",link:'/contact/ru'}],
      [{name:'主页',link:'/cn'}, {name:"关于我",link:'/about/cn'},{name:"技能",link:'/workprogram/cn'},{name:"文件夹",link:'/portfolio/cn'},{name:"联系方法",link:'/contact/cn'}]],
    }
  }
};
</script>

<template>
  <div>
    <ul class="header__ul">
        <li v-if="language == 0" class="ul__li" v-for="li in headerNav[0]">
          <router-link class="linker" :to="li.link">{{ li.name }}</router-link>
        </li>
        <li v-if="language == 1" class="ul__li" v-for="li in headerNav[1]">
          <router-link class="linker" :to="li.link">{{ li.name }}</router-link>
        </li>
        <li v-if="language == 2" class="ul__li" v-for="li in headerNav[2]">
          <router-link class="linker" :to="li.link">{{ li.name }}</router-link>
        </li>
      </ul>
      <hr />
  </div>
  <div class="langChanger">
    <router-link class="lang__links" @click="language = 1" to="ru">| Ru |</router-link>
    <router-link class="lang__links" @click="language = 0"  to="/">| Eng |</router-link>
    <router-link class="lang__links" @click="language = 2"  to="/cn">| Cn |</router-link>
  </div>
  <RouterView>
</RouterView>

</template>

<style></style>
