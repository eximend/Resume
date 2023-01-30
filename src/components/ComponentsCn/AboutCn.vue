<template >
    <div class="main__About">
        <h2 class="aboutCnh2">关于我</h2>
        <p v-for="txt in aboutInfo">{{ txt.text }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aboutInfo:[
                {text:"大家好，我叫维克多——我是来自阿斯塔纳的 Python 和 JavaScript 开发人员。我对编程以及与之相关的一切都很感兴趣。我正在 IT Step 学院学习前端开发课程。"},
                {text:"目前，我作为环境工程师正在中国远程学习第 3 年。此外，我还接受过会计和审计方面的中等专业教育。"},
                {text:"我很容易学习新材料和新技术。我可以快速学习贵公司用于处理项目的技术并在体面的水平上应用它们！"},
                {text:"关于我自己的一点：我是一个活跃、善于交际和有目标的人。我对新朋友、新任务和新目标持开放态度。"},
                {text:"此外，我精通三种语言：俄语、英语和汉语。我会很高兴在一个国际团队中工作！"},
                {text:'准备好与优秀的人一起从事伟大的项目！'}]
        }
    }
}
</script>

<style scoped>
.aboutCnh2 {
  padding-top: 60px;
  margin-left: 680px;
  font-size: 34px;
  line-height: 45px;
}

</style>