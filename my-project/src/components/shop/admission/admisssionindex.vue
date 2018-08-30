<template>
    <div class="box">
        <div class="text">神兽电商平台</div>
        <img src="../static/rzindex.png" alt="">
        <router-link :to="{name:'admissionflow1'}" tag="el-button">我要入驻</router-link>
    </div>
</template>

<script>
    export default {
        name: "admisssionindex"
    }
</script>

<style scoped>
    .box{
        position: relative;
    }
   .text{
        position: absolute;
       top: 40px;
       left: 160px;
    }
    .el-button{
        width: 165px;
        height: 48px;
        background-image: linear-gradient(90deg, #37e06f 0%, #32d69a 100%),
        linear-gradient(#3bacfe, #3bacfe);
        background-blend-mode: normal, normal;
        box-shadow: 0 4px 20px 0 rgba(55, 223, 116, 0.75);
        border-radius: 24px;
        font-size: 18px;
        color: white;
        position: absolute;
        top: 644px;
        left:198px;
    }
</style>