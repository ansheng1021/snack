<template>
    <div  class="xia">
    <img src="../../shop/static/sh.png" alt="">
    <div class="wen">入驻申请已提交，请等待管理员审核</div>
    </div>
</template>

<script>
    export default {
        name: "admissionflow"
    }
</script>

<style scoped>

    .xia>img{
        margin: 40px auto 44px ;
        display: block;
        width: 360px;
        height: 270px;
    }
    .xia>.wen{
        width: 826px;
        height: 46px;
        font-size: 46px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 2px;
        color: #30a3fe;
        margin: 0 auto  220px;
    }
    .xia>.di{
        width: 100%;
        height: 88px;
        border-top: solid 2px rgba(0,0,0,0.05);
        text-align: center;
        line-height: 90px;
        margin-top: 174px;
    }
</style>