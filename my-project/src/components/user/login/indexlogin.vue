<template>
    <div>
        <indexheader title="小兵零食"></indexheader>


        <ul>
            <li class="login">
                <p :class="{'hot':status=='login'}" @click="status='login'">登录</p><p :class="{'hot':status=='sign'}"  @click="status='sign'">注册</p>
                <div class="blue"></div>
            </li>
            <form :class="{'isshow':status=='login'}">
                <li class="one">
                    <img src="./static/img/img.png" alt="">
                    <b>+86</b>
                    <input type="text" placeholder="请填写手机号码" v-model="form1.phone">
                </li>
                <li class="two">
                    <div class="dot"></div>
                    <input type="password" placeholder="请填写密码" v-model="form1.password">
                </li>
                <li>
                    <input type="button" value="登录"  @click="check" class="bigbox">
                </li>
            </form >
            <form :class="{'isshow':status=='sign'}">
                <li class="one">
                    <img src="./static/img/img.png" alt="">
                    <b>+86</b>
                    <input type="text" placeholder="请填写手机号码" v-model="form.phone">
                </li>
                <li class="two">
                    <div class="dot"></div>
                    <input type="text" placeholder="请填写用户名" v-model="form.username">
                </li>
                <li class="three">
                    <div class="icon"></div>
                    <input type="password" placeholder="请填写6-20位字母 数字的密码" v-model="form.password">
                </li>
                <li>
                    <input type="button" value="提交" class="bigbox" @click="onsubmit">
                </li>
            </form >
            <li class="txt">
                <div class="round"></div>
                <span>注册即视为同意接受晋彤电商发送的商业性信息</span>
            </li>


        </ul>

    </div>
</template>

<script>
    import indexheader from '../../generally/indexheader'
    import index from "../../../router";
    export default {
        name: "indexlogin",
        data(){
            return{
                status:"login",
                form:{
                       username:'',
                       phone:'',
                       password:'',

                    },
                form1:{
                    phone:'',
                    password:''
                }

            }
        },
        methods:{
          onsubmit(){
              this.axios.post('/user/login/sign',this.form).then(res=>{
                      if(res.data=="success"){
                          this.status='login'
                      }else{
                          alert('fail')
                      }

              })
          },
            check(){
                this.axios.post('/user/login/check',this.form1).then(res=>{
                    console.log(res.data);
                    if(res.data[0].uid){
                        localStorage.userlogin=res.data[0].uid
                        this.$message.success('登陆成功')
                        this.$router.push({name:'index'})

                    }else{
                        this.$message.error('登陆失败')
                    }
                })
            }
        },
        components:{
            indexheader
        }
    }
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
@import url("./static/css/phoneLogin.css");

input::-webkit-input-placeholder{
    color: rgba(0,0,0,0.2);
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color: rgba(0,0,0,0.2);
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color: rgba(0,0,0,0.2);
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color: rgba(0,0,0,0.2);
}
</style>