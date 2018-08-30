<template>
    <div class="login">
        <div class="content">
            <header>
                <img src="../static/img/11.jpg" alt="">
                <h1>神兽管理系统</h1>
                <div class="text">
                    <div class="box"></div>
                    <span>找回密码</span>
                    <div class="box"></div>
                </div>
            </header>
            <div class="myfrom">
                <el-form>
                    <el-form-item>
                        <el-input placeholder="输入管理员账号" ></el-input>
                        <img src="../static/img/ren.png" alt="">
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="输入电子邮箱" type="email" ></el-input>
                        <img src="../static/img/email.png" alt="" style="position: absolute;top: 17px;left: 13px;">
                    </el-form-item>
                    <el-form-item>
                        <el-button round>找回密码</el-button>
                        <el-button round>返回登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "changpassword"
    }
</script>

<style scoped>
    .login{
        position:absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url("../static/img/bg.png");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content{
        width: 651px;
        height: 520px;
        background-color: #ffffff;
        box-shadow: 0 14px 40px 0 rgba(46, 170, 254, 0.72);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content header{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header>img{
        display: block;
        width: 92px;
        height:76px ;
    }
    header>h1{
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        color: #3e474e;
    }
    .myfrom{
        width: 423px;
        margin: 0 auto;

    }
    .myfrom .el-form{
        width: 423px;
        height: 218px;
    }
    .myfrom .el-button:nth-child(1){
        width: 203px;
        height: 48px;
        background-image: linear-gradient(90deg, #30c2fe 0%, #30a3fe 100%),
        linear-gradient(#3bacfe, #3bacfe);
        background-blend-mode: normal,
        normal;
        box-shadow: 0 4px 20px 0 rgba(48, 193, 254, 0.75);
        border-radius: 23px;
        font-size: 20px;
        color: white;
        margin-top: 50px;
    }
    .myfrom .el-button:nth-child(2){
        width: 203px;
        height: 48px;
        background-image: linear-gradient(90deg, #37e06f 0%, #32d69a 100%),
        linear-gradient(#3bacfe, #3bacfe);
        background-blend-mode: normal, normal;
        box-shadow: 0 4px 20px 0 rgba(55, 223, 116, 0.75);
        border-radius: 23px;
        font-size: 20px;
        color: white;
        margin-top: 50px;
    }
    span{
        width: 65px;
        height: 17px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #a8b8c4;
    }
    .el-form-item__content{
        position: relative;
    }
    .el-form-item__content img{
        position: absolute;
        top: 10px;
        left:16px;
    }
    .text{
        width: 130px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0 40px 0;
    }
    .text span{
        width: 90px;
        height: 22px;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #21b2fe;
    }
    .box{
        width: 10px;
        height: 6px;
        background-color: #34da87;
        box-shadow: 0 2px 5px 0 rgba(52, 218, 135, 0.43);
        border-radius: 2px;
    }

</style>