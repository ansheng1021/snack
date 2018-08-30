<template>
    <footer>
        <router-link class="sk-tabItem" :to="{name:'index'}">
            <img src="./img/sy.png" alt="">
            <h3>首页</h3>
        </router-link>
        <router-link class="sk-tabItem" :to="{name:'list',query:{cid:1}}">
            <img src="./img/store.png" alt="">
            <h3>商城</h3>
        </router-link>
        <router-link class="sk-tabItem" :to="{name:'orderlist'}">
            <img src="./img/order.png" alt="">
            <h3>订单</h3>
        </router-link>
        <router-link class="sk-tabItem" :to="{name:'personcenter'}">
            <img src="./img/personal.png" alt="">
            <h3>我的</h3>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped>
@import url("./css/tab.css");
    a{
        text-decoration: none;
    }
</style>