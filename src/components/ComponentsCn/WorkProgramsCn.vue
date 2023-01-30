<template >
    <div class="Skills">
        <h2>技能</h2>
        <p>我使用以下编程语言和程序：</p>
        <div class="skills__Wrapper">
            <div v-for="item in workProgram" :key="item">
            <img class="skills__Icons" :src="item.program" alt="item.name">
            <p>{{ item.name }}</p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            workProgram:[{program:'https://cdn-icons-png.flaticon.com/512/1199/1199124.png', name:'JavaScript'},
        {program:'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',name:'Python'},
    {program:'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',name:'Figma'},
    {program:'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',name:'PosgreSQL'}]
        }
    }
}
</script>
<style>
    
</style>