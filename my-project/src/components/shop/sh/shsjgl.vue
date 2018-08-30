<template>
    <div>
        <headers index="4"></headers>
       <left v-bind:num="num"></left>
    <div class="con">
        <div class="content">
            <section class="con">
                <header><span>信息</span><div class="dian"></div><span>水利局</span><div class="dian" style="background: #30d366;"></div><span style="color: #30d366">查看</span></header>
                <div class="biaoti">
                    <div class="zs"></div>
                    <span style="color: #41b2fc;">商家</span><span>信息</span>
                </div>
                <div class="form">
                    <el-form  label-width="200px">
                        <el-form-item label="店铺名称:">
                            <span>{{company.shopname}}</span>
                        </el-form-item>
                        <el-form-item label="店铺规模 ">
                            <span>{{company.scale}}</span>
                        </el-form-item>
                        <el-form-item label="法定代表人姓名:">
                            <span>{{company.legalperson}}</span>
                        </el-form-item>
                        <el-form-item label="店铺缩略图:">
                            <div class="picture">
                                <img :src="company.shopthumb" alt="" style="width: 100%;height: 100%">
                            </div>
                        </el-form-item>
                        <el-form-item label="身份证:">
                            <div class="wai">
                                <div class="picture" style="margin-right: 20px">
                                    <img src="../static/sfzq.png" alt="">
                                </div>
                                <div class="picture">
                                    <img src="../static/sfzb.png" alt="">
                                </div>
                            </div>
                        </el-form-item>
                        <div class="fen"></div>


                        <el-form-item label="营业执照所在地:">
                            <span>{{company.location}}</span>
                        </el-form-item>
                        <el-form-item label="营业执照详细地址:">
                            <span>{{company.address}}</span>
                        </el-form-item>
                        <el-form-item label="成立日期:">
                            <span>{{company.time}}</span>
                        </el-form-item>
                        <el-form-item label="营业执照电子版:">
                            <div class="zhizhao">
                                <img src="../static/yyzz.png" alt="">
                            </div>
                        </el-form-item>
                        <div class="fen"></div>

                        <el-form-item label="公司所在地:">
                            <span>{{company.location}}</span>
                        </el-form-item>
                        <el-form-item label="公司详细地址:">
                            <span>{{company.address}}</span>
                        </el-form-item>
                        <el-form-item label="公司电话:">
                            <span>{{company.phone}}</span>
                        </el-form-item>
                        <el-form-item label="公司紧急联系人:">
                            <span>{{company.legalperson}}</span>
                        </el-form-item>
                        <el-form-item label="紧急联系电话:">
                            <span>{{company.telephone}}</span>
                        </el-form-item>





                        <div class="fen" style="margin-bottom: 20px"></div>
                        <div class="biaoti">
                            <div class="zs"></div>
                            <span style="color: #41b2fc;">店铺</span><span>信息</span>
                        </div>
                        <el-form-item label="店铺名称:">
                            <span>{{company.shopname}}</span>
                        </el-form-item>
                        <el-form-item label="店铺介绍:">
                            <span>{{company.shopnotice}}</span>
                        </el-form-item>



                        <div class="fen" style="margin-bottom: 20px"></div>
                        <div class="biaoti">
                            <div class="zs"></div>
                            <span style="color: #41b2fc;">审核</span><span>结果</span>
                        </div>
                        <el-radio-group label="通知审核结果:"  v-model="radio" >
                            <el-radio :label="1" @change="change">通过</el-radio>
                            <el-radio :label="2" @change="change">未通过</el-radio>
                        </el-radio-group>

                        <!--<el-form-item >-->
                        <!--<el-input type="textarea"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="通知审核结果:">-->
                            <!--<el-radio  label="1">邮件</el-radio>-->
                            <!--<el-radio  label="2">短信</el-radio>-->
                            <!--<el-radio  label="3">人工</el-radio>-->
                        <!--</el-form-item>-->
                        <el-button type="success" round @click="update">确定</el-button>
                    </el-form>

                </div>
            </section>
        </div>
    </div>
    </div>

</template>

<script>
    import headers from '../../generally/header'
    import left from '../gerenl/left'
    export default {
        data(){
          return{
              company:'',
              radio: 0,
              sid:'0',
              num:0
          }
        },
        name: "sh2",
        methods:{
            getlist(sid){
                this.axios.get('/admin/check/getone?sid='+this.sid).then((res)=>{
                    this.company=res.data
                })
            },
            change(){

                console.log(this.radio);
            },
            update(){
                this.axios.get('/admin/check/update?sid='+this.sid+'&status='+this.radio).then(res=>{
                    if(res.data==="success"){
                        this.$message({
                            message: '审核通过',
                            type: 'success'
                        })
                    }else if(res.data==="fail"){
                        this.$message({
                            message: '审核未通过',
                            type:  'warning'
                        })
                    }
                })
            }
        },
        mounted:function(){
            this.sid=this.$route.query.sid;
            this.num=this.$route.query.num;
            this.getlist(this.sid);

        },
        components:{
         left,
         headers
        }
    }
</script>

<style scoped>
    .con header{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
    }
    .con header span{
        margin-left: 10px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
        margin-top:20px;
         }
    .con header .dian{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin: 0 6px;
        background-color: #9ba9b4;
        margin-top: 20px;

    }
    .con .biaoti{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
    }
    .con .biaoti .zs{
        width: 10px;
        height: 5px;
        background-color: #37e06f;
        box-shadow: 0px 2px 5px 0px
        rgba(68, 181, 255, 0.43);
        border-radius: 2px;
        margin:0 10px;
    }
    .con .biaoti> span{
        font-size: 18px;
    }
    .form .picture{
        width: 300px;
        height: 160px;
        background-color: #bbdff6;
        border-radius: 3px;
    }
    .form .picture img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .form .wai{
       width: 100%;
        height: auto;
        display: flex;
    }
    .form .fen{
        width: 100%;
        height: 2px;
        background-color: #323f49;
        opacity: 0.05;
        margin-bottom: 20px;
    }
    .form .zhizhao{
        width: 800px;
        height: 500px;
        background: aqua;
    }
    .form .zhizhao img{
        width: 100%;
        height: 100%;
    }
    .form .el-button{
        width: 120px;
        height: 40px;
        background-image: linear-gradient(90deg,
        #37e06f 0%,
        #32d69a 100%),
        linear-gradient(
                #3bacfe,
                #3bacfe);
        background-blend-mode: normal,
        normal;
        box-shadow: 0px 4px 20px 0px
        rgba(55, 223, 116, 0.75);
        border-radius: 24px;
        margin-left: 200px;
    }
    .con{
        position: absolute;
        top: 40px;
        left:100px;
    }
    .el-radio-group{
        width: 100%;
        height: 40px;
        margin:20px 0 20px 140px ;
    }
</style>