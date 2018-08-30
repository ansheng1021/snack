<template>
    <div class="steps2">
        <!--身份信息-->
        <!--<div class="idInfo">-->
            <!--<h1 class="ids"> 请选择您的开店身份</h1>-->
            <!--<div class="select">-->
                <!--<template>-->
                    <!--<el-radio  label="1">商家</el-radio>-->
                    <!--<el-radio  label="2"></el-radio>-->
                <!--</template>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="tips">* 以下所需要上传的电子版纸质文件仅支持JPG/GIF/PNG格式图片，大小请控制在400K之内</div>-->
        <div class="contactInfo">
            <h1 class="contat"> 企业及联系人信息</h1>
            <div class="infos">
                <el-form  label-width="140px" :model="form" :rules="rules">
                    <el-form-item label="企业名称" prop="name">
                        <el-input style="width: 408px;" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="企业所在地" prop="location">
                        <!--<el-select  placeholder="请选择省份">-->
                        <!--<el-option label="上海" ></el-option>-->
                        <!--<el-option label="北京" ></el-option>-->
                        <!--</el-select>-->
                        <!--<el-select  placeholder="请选择县市">-->
                        <!--<el-option label="上海" ></el-option>-->
                        <!--<el-option label="北京" ></el-option>-->
                        <!--</el-select>-->
                        <!--<el-select  placeholder="请选择详细地址">-->
                        <!--<el-option label="上海" ></el-option>-->
                        <!--<el-option label="北京" ></el-option>-->
                        <!--</el-select>-->
                        <el-input style="width: 408px;" v-model="form.location"></el-input>
                    </el-form-item>
                    <el-form-item label="企业详细地址" prop="address">
                        <el-input style="width: 408px;" v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="企业类型" prop="type">
                        <el-input  style="width: 408px;" v-model="form.type"></el-input>
                    </el-form-item>
                    <el-form-item label="企业电话" prop="phone">
                        <el-input  style="width: 408px;" v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="企业规模" prop="scale">
                        <el-input  style="width: 220px;" v-model="form.scale"></el-input> <span style="margin-left: 10px">人</span>
                    </el-form-item>
                    <el-form-item label="联系人姓名" prop="legalperson">
                        <el-input  style="width: 220px;" v-model="form.legalperson"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人电话" prop="telephone">
                        <el-input  style="width: 408px;" v-model="form.telephone"></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮箱" prop="email">
                        <el-input style="width: 408px;" v-model="form.email"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="fen"></div>
        </div>
        <!--<div class="license">-->
            <!--<h1 class="licenseTitle">营业执照信息(副本)</h1>-->
            <!--<div class="licenseInfo">-->
                <!--<el-form  label-width="140px">-->
                    <!--<el-form-item label="营业执照号">-->
                        <!--<el-input style="width: 205px"></el-input><span style="margin-left: 10px">万元</span>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="法定经营范围">-->
                        <!--<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">-->
                        <!--</el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="营业执照电子版">-->
                        <!--<el-input type="textarea" style="width: 500px;height: 394px"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<div class="tip2">请确保图片清晰，文字可辨并有清晰的公章</div>-->
                <!--</el-form>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "admissionflow2",
        data() {
            return {
               form:{
                   name:'',
                   location:'',
                   address:'',
                   type:'',
                   phone:'',
                   scale:'',
                   legalperson:'',
                   telephone:'',
                   email:''

               },
                rules:{
                    name:[
                        {required:true,message:'请输入公司名称',trigger:'blur'},
                        {min:3,max:20,message:'请输入 3 到 20 个字符'}
                    ],
                    address:[
                        {required:true,message:'请输入公司详细地址',trigger:'blur'},
                        {min:3,max:20,message:'请输入 3 到 20 个字符'}
                    ],
                    type:[
                        {required:true,message:'请输入公司类型',trigger:'blur'},
                        {min:3,max:20,message:'请输入 3 到 20 个字符'}
                    ],
                    phone:[
                        {required:true,message:'请输入企业电话',trigger:'blur'},
                        {min:11,max:11,message:'请输入11位数字'}
                    ],
                    scale:[
                        {required:true,message:'请输入企业名称',trigger:'blur'},
                        {min:1,max:20,message:'请输入数字'}
                    ],
                    email:[
                        {required:true,message:'请输入邮箱',trigger:'blur'},
                        {min:3,max:20,message:'请输入邮箱'}
                    ],
                    legalperson:[
                        {required:true,message:'请输入联系人姓名',trigger:'blur'},
                        {min:3,max:20,message:'请输入 3 到 20 个字符'}
                    ],
                    telephone:[
                        {required:true,message:'请输入联系人电话',trigger:'blur'},
                        {min:3,max:20,message:'请输入正确的电话'}
                    ],
                    location:[
                        {required:true,message:'请输入企业所在地',trigger:'blur'},
                        {min:10,max:20,message:'请输入 10 到 20 个字符'}
                    ]
                }


            }
            },
        beforeRouteLeave (to, from, next) {
            localStorage.company=JSON.stringify(this.form)
            next();
        }


    }
</script>

<style scoped>
    .steps2{
        margin-left: 80px;
        margin-top: 60px;
    }
    .ids{
        height: 26px;
        font-size: 24px;
        line-height: 26px;
        font-weight: bold;
        color: #4f5b64;
    }
    .select{
        height: 84px;
        padding-top: 30px;
        box-sizing: border-box;
    }
    .tips{
        height: 60px;
        border-top: 1px solid rgba(176,176,176,0.4);
        border-bottom: 1px solid rgba(176,176,176,0.4);
        font-size: 18px;
        line-height: 60px;
        color: red;
        font-weight: bold;
        margin-bottom: 58px;
    }
    .contat{
        height:26px ;
        font-size: 24px;
        line-height: 26px;
        font-weight: bold;
        color: #4f5b64;
    }
    .infos{
        padding: 45px 200px 54px 118px;
        margin-bottom: 54px;
        box-sizing: border-box;
    }
    .licenseTitle{
        height:26px ;
        font-size: 24px;
        line-height: 26px;
        font-weight: bold;
        color: #4f5b64;
        margin-bottom: 32px;
    }
    .licenseInfo{
        padding: 0 200px 54px 118px;
        box-sizing: border-box;
    }
    .tip2{
        height: 60px;
        font-size: 18px;
        line-height: 60px;
        color: red;
        font-weight: bold;
        margin-bottom: 40px;
        margin-left: 220px;
    }
.fen{
    width: 1200px;
    height: 2px;
    background: rgba(176,176,176,0.4);
}

</style>