<template>
    <div>
        <indexheader title="个人中心"></indexheader>
        <section class="cyx-contain">
            <form id="form">
                <ul class="cyx-container">
                    <li class="cyx-lis">
                        <div class="cyx-left">
                            <img class="cyx-items" src="./static/img/items.png" alt="">
                            <span class="cyx-title">头像</span>
                        </div>
                        <div class="cyx-right">
                            <img class="cyx-photo" src="./static/img/camera.png" alt="">
                            <img class="cyx-next" src="./static/img/next.png" alt="">
                        </div>
                    </li>
                    <li class="cyx-lis">
                        <div class="cyx-left">
                            <img class="cyx-items" src="./static/img/items.png" alt="">
                            <span class="cyx-title">真实姓名</span>
                        </div>
                        <div class="cyx-right">
                            <span class="cyx-name">张正</span>
                            <img class="cyx-next" src="./static/img/next.png" alt="">
                        </div>
                    </li>
                    <li class="cyx-lis">
                        <div class="cyx-left">
                            <img class="cyx-items" src="./static/img/items.png" alt="">
                            <span class="cyx-title">性别</span>
                        </div>
                        <div class="cyx-right">
                            <img class="cyx-sex" src="./static/img/male.png" alt="" width="100%" >
                            <img class="cyx-next" src="./static/img/next.png" alt="">
                        </div>
                    </li>
                    <li class="cyx-lis">
                        <div class="cyx-left">
                            <img class="cyx-items" src="./static/img/items.png" alt="">
                            <span class="cyx-title">手机号</span>
                        </div>
                        <div class="cyx-right">
                            <span class="cyx-phone">182-2876-6902</span>
                            <img class="cyx-next" src="./static/img/next.png" alt="">
                        </div>
                    </li>
                    <li class="cyx-lis">
                        <div class="cyx-left">
                            <img class="cyx-items" src="./static/img/items.png" alt="">
                            <span class="cyx-title">支付密码</span>
                        </div>
                        <div class="cyx-right">
                            <img class="cyx-next" src="./static/img/next.png" alt="">
                        </div>
                    </li>
                </ul>
                <button class="cyx-btn" type="submit">保存</button>
            </form>
        </section>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "personinfor",
        components:{
            indexheader,
        },
    }
</script>

<style scoped>
    @import url("./static/css/cyx-gerenziliao.css");
    @import url("./static/css/common.css");

</style>