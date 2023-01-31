<template >
    <div class="main__About">
        <h2>About me</h2>
        <p v-for="txt in aboutInfo">{{ txt.text }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aboutInfo:[
                {text:"Hello, I'm Victor - Python and JavaScript Developer from Astana. Interested in programming and everything related to it. I am studying Front-End Development courses at IT Step Academy."},
                {text:"My education: an environmental engineer, now I am studying remotely at the 3rd year in China. I also have a degree in accounting and auditing."},
                {text:"I quickly master new materials and technologies. In a short time I can study the technologies that your company uses, as well as show good results in their application!"},
                {text:"A little about myself: I am active, sociable and purposeful. I am open to new acquaintances, new tasks and new goals."},
                {text:"In addition, I am fluent in three languages: Russian, English and Chinese. I will be glad to work in an international team!"},
                {text:'Ready to implement excellent projects with wonderful people!'}]
        }
    }
}
</script>
<style  scoped>
     .main__About {
    width: 375px;
    background: #f6f6f6;
    border-radius: 5px;
    padding-bottom: 30px;
  }
</style>