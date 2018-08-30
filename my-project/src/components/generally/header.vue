<template>
    <div class="content">
        <div class="top">
            <div class="logo">
                <img src="../shop/static/logo.png" alt="">
            </div>
            <ul class="lists">
                <li :class="{hot: index == 1}">
                    <router-link :to="{name:'manageUser'}">用户管理</router-link>
                </li>
                <li :class="{hot: index == 2}">
                    <router-link :to="{name:'shopdata'}">数据中心</router-link>
                </li>
                <li :class="{hot: index == 3}">
                    <router-link :to="{name:'manageshop'}">店铺管理</router-link>
                </li>
                <li :class="{hot: index == 4}">
                    <router-link  :to="{name:'shgl'}">审核管理</router-link>
                </li>
                <li :class="{hot: index == 5}">
                    <router-link :to="{name:'setSystem'}">系统设置</router-link>
                </li>
                <li :class="{hot: index == 6}">
                    <router-link :to="{name:'moneyManage'}">财务管理</router-link>
                </li>
            </ul>

            <div class="manage manage3">
                <img src="../shop/static/tx.jpg" alt="">
                <span>管理员名称</span>
            </div>
            <div class="manage manage1">
                <img src="../shop/static/clear.jpg" alt="">
                <span>清除缓存</span>
            </div>
            <div class="manage manage2">
                <img src="../shop/static/exit.jpg" alt="">
                <span>退出</span>
            </div>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>

    export default {
        data() {
            return{

            }

        },
        props:['index'],
        methods: {
           init(){

           }
        },
        name: "sh",
    }

</script>

<style scoped>
    *{
        list-style: none;
        text-decoration: none;
    }

    .logo{
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .logo img{
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .top{
        width: 100%;
        height: 80px;
        background-color: #eaf6ff;
        z-index: 1;
    }

    .top {
        display: flex;
        align-items: center;
    }
    .top .lists{
        display: flex;
        align-items: center;
    }
    .top .lists > li{
        width: 120px;
        height: 80px;
        float: left;
        font-size: 18px;
        color: #516676;
        line-height: 80px;
        text-align: center;
        font-weight: bold;
    }
    .top .lists > li >a{
        display: block;
        width: 100%;
        height: 100%;

    }
    .top .lists >li.hot{
        background-color: #30a3fe;
        color: #ffffff;
        font-weight: bold;
    }
    .top .manage3 img{
        display: block;
        width: 51px;
        height: 50px;
        background-color: #ffdd29;
        box-shadow: 0 1px 10px 0 rgba(198, 216, 231, 0.75);
        border: solid 2px #ffffff;
        border-radius: 25px;
    }
    .top .manage1 img{
        display: block;
        width: 30px;
        height: 30px;
        margin: 0 10px 0 15px;
    }
    .top .manage2 img{
        display: block;
        width: 30px;
        height: 30px;
        margin: 0 10px 0 15px;
    }
    .top .manage{
        display: flex;
        align-items: center;
    }
    .top .manage span{
        font-size: 18px;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }

    .top .manage.manage1 span{
        font-size: 18px;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #32d796;
        font-weight: bold;
    }

    .top .manage.manage2 span{
        font-size: 18px;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #41b2fc;
        font-weight: bold;
    }
    .hot{
        background-color: #30a3fe;
        box-shadow: 0 5px 12px 0 rgba(59, 172, 254, 0.43);
    }
    .hot a{
        color: white;
    }

</style>