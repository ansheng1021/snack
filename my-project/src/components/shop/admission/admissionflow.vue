<template>
    <div class="box">
        <header>
            <div class="left">
                <img src="../../admin/static/img/logo.png" alt="">
                <div class="wenzi">酒是你后台管理系统</div>
            </div>
            <div class="right">
                <el-steps :active="active" finish-status="success" align-center>
                    <el-step title="入驻须知"></el-step>
                    <el-step title="企业信息认证"></el-step>
                    <el-step title="店铺信息认证"></el-step>
                    <el-step title="等待审核"></el-step>
                </el-steps>

            </div>
        </header>
        <router-view></router-view>
           <div class="btn">
               <el-button v-if="flag" @click="next" >下一步</el-button>
               <el-button v-else @click="onsubmit" >提交</el-button>
           </div>


        <div class="di">©2015-2018 dscmall.cnDSC00000249 POWERED</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 1,
                flag:true,
            };
        },

        methods: {
            next() {
                // if(this.active ==2) {}
                if (++this.active > 3) { this.active = 4; this.flag=false}
                this.$router.push({name:'admissionflow'+this.active})
            },
            onsubmit(){
                let company=JSON.parse(localStorage.company);
                console.log(company);
                // this.$router.push({name:'admissionflow'+4})
                this.axios.post('/shop/admission',company).then(res=>{
                    console.log(res.data);
                })
            }
        }
    }
</script>

<style scoped>
    .box{
        display: flex;
        flex-direction: column;
    }
    .box > header{
        height: auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .box > header > .left >img{
        display: block;
        width:80px;
        height: 80px;
        border-radius: 50%;
        margin: 40px 0 0 130px;
    }

    .box>header>.right{
        width: 732px;
        height: 76px;
        margin-top: 40px;
        margin-right: 129px;
    }
    .box header .left .wenzi{
        margin-left: 80px;
        width: 180px;
        height: 24px;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #b4bccc;
    }
    .btn{
        width: 300px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

    }
    .el-button {
        width: 165px;
        height: 48px;
        background-color: #30a3fe;
        box-shadow: 0 4px 20px 0 rgba(48, 163, 254, 0.75);
        border-radius: 24px;
        color: #ffffff;
        font-size: 20px;
        margin: 0 auto;
    }
    .di{
        width: 100%;
        height: 88px;
        font-size: 16px;
        border-top: solid 2px rgba(0,0,0,0.05);
        text-align: center;
        line-height: 90px;
    }
</style>
