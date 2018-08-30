<template>
    <div>
        <indexheader title="帮助"></indexheader>
        <div class="shdBox">
            <ul class="totalList">
                <router-link :to="{name:'smserver'}">
                    <li class="list">
                        <div class="listLeft">
                            <img src="./static/img/shd-img/tubiao.png" alt="">
                            <span>如何预约上门服务</span>
                        </div>
                        <img src="./static/img/shd-img/shdBack1.png" alt="">
                    </li>
                </router-link>
                <a href="">
                    <li class="list">
                        <div class="listLeft">
                            <img src="./static/img/shd-img/tubiao.png" alt="">
                            <span>如何下单</span>
                        </div>
                        <img src="./static/img/shd-img/shdBack1.png" alt="">
                    </li>
                </a>
            </ul>
        </div>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "help",
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url("../static/css/common.css");
    @import url("./static/css/shd-help.css");

</style>