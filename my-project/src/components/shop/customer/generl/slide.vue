<template>
    <div>
    <div class="left">
        <ul class="bottom">
            <router-link :to="{name:'shoplist'}" :class="{hot:index==1}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>商品列表</span>
            </router-link>
            <router-link :to="{name:'sjclassfiy'}" :class="{hot:index==2}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>分类管理</span>
            </router-link>
            <router-link :to="{name:'sjevaluate'}" :class="{hot:index==3}">
                <div class="shu"></div>
                <div class="hen"></div>
                <span>用户评价</span>
            </router-link>
        </ul>
    </div>
    </div>
</template>

<script>
    import MyHeader from './sjheader'
    export default {
        name: "left",
        props:['index'],
        data(){
            return{
                flag:true,
            }
        },
        components:{
            MyHeader
        },
        methods: {}
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
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
    .left .bottom a.hot .shu{
        opacity: 1;
    }
    .left .bottom a.hot .hen{
        background-color: #35dc82;
        box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
    }
    .hot{
        background-color: #323f49;
    }
</style>