<template>
    <div>
        <indexheader title="常用地址"></indexheader>
        <div class="content">
            <img src="./static/img/jingtong01-1.png" alt="">
            <div class="mwq-text">您还未添加服务地址</div>
            <router-link :to="{name:'addaddress'}"><div class="mwq-circle">新增地址</div></router-link>
        </div>
    </div>
</template>

<script>
    import indexheader from '../../../../generally/indexheader'
    export default {
        name: "newaddress",
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/address.css');
    @import url('../../static/css/common.css');
</style>