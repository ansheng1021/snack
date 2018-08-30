<template>
    <div class="login">
        <div class="content">
            <header>
                <img src="../static/img/11.jpg" alt="">
               <h1>神兽管理系统</h1>
            </header>
            <div class="myfrom">
            <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item prop="name">
                        <el-input placeholder="账号" v-model="form.name"></el-input>
                        <img src="../static/img/ren.png" alt="">
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type='password' placeholder="密码" v-model="form.password"></el-input>
                        <img src="../static/img/suo.png" alt="">
                    </el-form-item>
                <div class="text">
                <div class="dian"><div class="circle"></div></div>
                <span style="margin:0 10px 0 17px">保存信息</span><span>忘记密码</span>
                </div>
                    <el-form-item>
                        <el-button round @click="onsubmit('form')">登录</el-button>
                    </el-form-item>
            </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function () {
            return{
                form:{
                    name: '',
                    password: '',
                },
                rules:{
                    name:[{ required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                        ],
                    password:[{ required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 6, message: '长度为6个字符', trigger: 'blur' }
                    ],
                }

            }
        },
        methods:{
            onsubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('/admin/login/check',this.form).then(res=> {
                               if (res.data==='success') {

                                   this.$router.push({name:'rzshoping'})
                               }else{
                                   this.$message.error('验证失败');
                                   return false;
                               }
                            })

                    } else {
                        this.$message.error('验证失败');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    body , html{

    }
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
        margin-bottom: 46px;
    }
     .myfrom{
         width: 423px;
       margin: 0 auto;

     }
     .el-form{
         width: 423px;
         height: 263px;
     }
    .el-button{
        width: 307px;
        height: 48px;
        background-image: linear-gradient(90deg, #37e06f 0%, #32d69a 100%), linear-gradient(#3bacfe, #3bacfe);
        background-blend-mode: normal, normal;
        box-shadow: 0 4px 20px 0 rgba(55, 223, 116, 0.75);
        border-radius: 23px;
        font-size: 20px;
        color: white;
        margin-left: 58px;
        margin-top: 58px;
    }
    .text{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .text .dian{
        width: 18px;
        height: 18px;
        background-color: #37e06f;
        box-shadow: 0 2px 8px 0 rgba(55, 224, 111, 0.43);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .text .dian .circle{
        width: 6px;
        height: 6px;
        background-color: #ffffff;
        border-radius: 50%;
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



</style>