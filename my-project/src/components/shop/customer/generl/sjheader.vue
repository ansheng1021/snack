<template>
    <div class="NAV">
        <ul class="headernav">
            <img src="../../static/logo.png" alt="" style="width: 60px;height: 60px;border-radius: 50%">
            <router-link :to="{name:''}">
                <li :class="{active: index == 1}">首页</li></router-link>
            <router-link :to="{name:'shoplist'}">
                <li :class="{active: index == 2}">商品管理</li>
            </router-link>
            <router-link to="">
                <li :class="{active: index == 3}">订单管理</li>
            </router-link>
            <router-link :to="{name:'shopinformation'}">
                <li :class="{active: index == 4}">店铺管理</li>
            </router-link>
            <router-link to="">
                <li :class="{active: index == 5}">账户管理</li>
            </router-link>
            <router-link to="">
                <li :class="{active: index == 6}">数据统计</li>
            </router-link>
            <router-link to=""><li style="font-size: 14px;"><img src="../../static/tx.jpg" alt="" style="width: 60px;height: 60px;border-radius: 50%">店家名称</li></router-link>
            <router-link to=""><li style="font-size: 14px;"><img src="../../static/qchc.png" alt="" style="width: 30px;height: 30px;">清除缓存</li></router-link>
            <router-link to=""><li style="font-size: 14px;"><img src="../../static/tc.png" alt="" style="width: 30px;height: 30px;">退出管理</li></router-link>
        </ul>

    </div>

</template>

<script>

    export default {
        name: "my-header",
        props:['index']
    }
</script>

<style scoped>
    .router-link-active{
        font-size: 18px;
        color: #516676;
        text-decoration: none;
    }
    /*.NAV{*/
        /*width: 100%;*/
        /*min-height: 635px;*/
    /*}*/
    /******************************************************************/
    .headernav{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 46px;
        box-sizing: border-box;
        background-color: #eaf6ff;

    }
    a{
        width: calc(100% / 10);
        height: 100%;
        text-decoration: none;
    }
    .headernav li{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 47px;
        font-size: 18px;
        color: #516676;
    }
    .headernav  li.active{
        color: #fff;
        background-color: #30a3fe;
        box-shadow: 0 5px 12px 0 rgba(59, 172, 254, 0.43);
    }
</style>

