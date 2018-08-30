<template>
    <div class="left">
        <ul class="bottom">
            <router-link :to="{name:'shopinformation'}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>店铺信息</span>
            </router-link>
            <router-link :to="{name:'sysepic'}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>店铺图片设置</span>
            </router-link>
            <router-link :to="{name:'active'}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>店铺活动</span>
            </router-link>
            <router-link :to="{name:'managaeyh'}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>优惠劵管理</span>
            </router-link>
            <router-link :to="{name:'managezx'}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>咨询管理</span>
            </router-link>
            <router-link :to="{name:'shopjd'}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>店铺解冻</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "left",
        data(){
            return{
                flag:true,
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .left{
        width: 200px;
        height: 1080px;
        background-color: #1f262c;
    }
    .left .top1{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .left .top1 img{
        width: 80px;
        height: 70px;
    }
    .left .top1 .ssgl{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #ffffff;
        margin-top: 18px;
    }
    .left .top1{
        width: 200px;
        height: 140px;
    }
    .left .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .left .bottom a{
        display: block;
        width: 200px;
        height:80px;
        display: flex;
        align-items: center;
    }
    .left .bottom a > .shu{
        width: 4px;
        height: 80px;
        background-image: linear-gradient(0deg,
        #37e06f 0%,
        #32d69a 100%),
        linear-gradient(#1f262c, #1f262c);
        background-blend-mode: normal, normal;
        box-shadow: 0 4px 20px 0 rgba(55, 223, 116, 0.75);
        opacity: 0;
    }
    .left .bottom a > .hen{
        width: 10px;
        height: 5px;
        background-color: #30a3fe;
        box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
        border-radius: 2px;
        margin: 0 20px 0 40px;
    }
    .left .bottom a >span{
        font-size: 18px;
        color: white;
    }
    .left .bottom a.router-link-exact-active .shu{
        opacity: 1;
    }
    .left .bottom a.router-link-exact-active.hen{
        background-color: #35dc82;
        box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
    }
    .router-link-exact-active{
        background-color: #323f49;
    }
</style>