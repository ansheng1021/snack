<template>
    <div>
        <indexheader title="客服中心"></indexheader>
        <div id="wrapper">
            <div id="scroller">
                <ul>
                    <li class="x-dialogue-A x-TH">
                        <div class="x-info">
                            <img src="./static/img/user.png" alt="" class="HPortrait-A">
                            <div class="x-name">蓝胖子</div>
                        </div>
                        <div class="dialog-A dialog">买彩票点亮尊贵勋章，腾讯旗下购彩平台</div>
                    </li>
                    <li class="x-dialogue-B">
                        <div class="dialog-B dialog">请问有什么要帮助的</div>
                        <div class="x-infoB">
                            <img src="./static/img/kefu.png" alt="" class="HPortrait-B">
                            <div class="x-name">商家客服</div>
                        </div>
                    </li>
                    <li class="x-dialogue-A">
                        <div class="x-info">
                            <img src="./static/img/user.png" alt="" class="HPortrait-A">
                            <div class="x-name">蓝胖子</div>
                        </div>
                        <div class="dialog-A">
                            <img src="./static/img/yuyin2.png" alt="" id="x-yy">
                        </div>
                        <b class="x-time">01''43</b>
                    </li>
                </ul>
            </div>
        </div>
        <!--内容部分结束-->
        <!--对话框开始-->
        <footer>
            <img src="./static/img/jianpan.png" alt="" id="x-jp">
            <input type="text" id="x-sr">
        </footer>
    </div>

</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "centerserver",
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url("./static/css/service.css");
</style>