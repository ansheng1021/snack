<template>
    <div>
     <my-header></my-header>
        <slide></slide>
        <div class="con">
            <div class="title">
               <span>商家</span>
                <div class="dot"></div>
                <span>小明的店</span>
                <div class="dot"></div>
                <span>订单管理</span>
                <div class="dot"></div>
                <span style="color:#30d366">查看订单</span>
            </div>
            <div class="step">
                <el-steps :active="4" align-center>
                    <el-step title="提交订单" description="018-03-20 17:59:59"></el-step>
                    <el-step title="支付订单" description="018-03-20 17:59:59"></el-step>
                    <el-step title="商家取件" description="018-03-20 17:59:59"></el-step>
                    <el-step title="确认送达" description="018-03-20 17:59:59"></el-step>
                    <el-step title="评价" description=""></el-step>
                </el-steps>
            </div>
            <div class="title2">
                <div class="hen"></div>
                <span style="color:#41b2fc;;">基本</span>
                <span>信息</span>
            </div>
        </div>

    </div>
</template>
<script>
    import MyHeader from '../../../generally/header'
    import slide from '../manageshop/generl/slide'
    export default {
        name: "queryorder",
        components:{
           MyHeader,
           slide
        }
    }
</script>

<style scoped>
.con{
    position: absolute;
    top: 80px;
    left:200px;
}
    .title{
        margin: 20px 0 0 40px;
        width: 1000px;
        height: 60px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }
    .title .dot{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #29c99a;
        margin: 0 5px;
    }
    .title2{
        margin: 20px 0 0 40px;
        width: 1000px;
        height: 60px;
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #4f5b64;
    }
.title2 .hen{
    width: 8px;
    height:3px;
    background-color: #37e06f;
    box-shadow: 0 2px 5px 0
    rgba(68, 181, 255, 0.43);
    border-radius: 2px;
}
</style>