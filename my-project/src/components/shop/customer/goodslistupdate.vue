<template>
    <div>
        <my-header index="2"></my-header>
        <left></left>
        <div class="con">
            <div class="biaoti" style="width: 150px;height: 30px;margin-top: 30px">
                <div class="zs"></div>
                <span style="color: #41b2fc;" >基本</span><span>信息</span>
            </div>
            <div class="form" style="margin-top: 60px">
                <el-form  label-width="200px" >
                    <el-form-item label="商品分类:">
                        <el-input v-model=form.goodscateaty></el-input>
                    </el-form-item>
                    <el-form-item label="商品货号:">
                        <el-input v-model=form.goodscode></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称:">
                        <el-input v-model=form.goodsname></el-input>
                    </el-form-item>
                    <el-form-item label="商品简单描述:">
                        <el-input type="textarea" v-model=form.goodsdesc></el-input>
                    </el-form-item>
                    <el-form-item label="价格:">
                        <el-input v-model=form.goodsprice></el-input>
                    </el-form-item>
                    <el-form-item label="折扣价:">
                        <el-input v-model=form.discountprice></el-input>
                    </el-form-item>
                    <!--<el-form-item label="上传商品图片:">-->
                        <!--<el-upload style="border: 1px solid #e5e5e5;width: 180px"-->
                                   <!--class="avatar-uploader"-->
                                   <!--action="/uploadimg"-->
                                   <!--:show-file-list="false"-->
                                   <!--:on-success="handleAvatarSuccess">-->
                            <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
                            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                            <!--<el-form-item >-->
                                <!--<el-input type="hidden"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</el-upload>-->
                    <!--</el-form-item>-->
                    <div class="fen"></div>


                    <div class="biaoti">
                        <div class="zs"></div>
                        <span style="color: #41b2fc;">其他</span><span>结果</span>
                    </div>
                    <!--<el-form-item label="上架:" style="margin-top: 15px;">-->
                        <!--<el-switch-->
                                <!--v-model="s"-->
                                <!--active-color="#13ce66"-->
                                <!--inactive-color="#ff4949">-->
                        <!--</el-switch>-->
                    <!--</el-form-item>-->
                    <el-form-item label="商品关键字:" style="margin-top: 15px;">
                        <el-input v-model=form.goodskeywors></el-input>
                    </el-form-item>
                    <el-input type="hidden" ></el-input>
                    <el-button type="success" round @click="onsubmit">确定</el-button>
                </el-form>

            </div>
            <!--</section>-->
        </div>
    </div>
</template>

<script>
    import MyHeader from '../customer/generl/sjheader'
    import left from '../customer/generl/slide'
    export default {
        name: "goodslistupdate",
        data:function(){
            return{
                gid:'0',
                form:'',
            }
        },
        components:{
            MyHeader,
            left
        },
        methods: {
            getgoodslist(gid) {
                this.axios.get('/shop/goods/getgoodslist?gid=' + this.gid).then(res => {
                    this.form = res.data
                })
            },
            onsubmit() {
                this.axios.post('/shop/goods/updategoodslist', this.form).then(res => {
                    if (res.data == "success") {
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        })
                        this.$router.push({name: 'shoplist'})
                    } else {
                        this.$message({
                            message: '修改失败',
                            type: 'error'
                        })
                    }
                })
            }
        },
        mounted:function(){
            this.gid=this.$route.query.gid
            this.getgoodslist(this.gid);

        },
    }

</script>

<style scoped>
.con{
    position: absolute;
    left: 200px;
    top: 80px;

}
*{
    list-style: none;
}

.content .left{
    width: 246px;
    height: 3300px;
    background-color: #1f262c;
}
.content .top{
    width: 1674px;
    height: 80px;
    background-color: #eaf6ff;
    position: absolute;
    top: 0;
    left: 246px;
    z-index: 1;
}
.left .top1{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.left .top1 img{
    width: 80px;
    height: 70px;
}
.left .top1 .ssgl{
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #ffffff;
    margin-top: 18px;
}
.left .top1{
    width: 246px;
    height: 184px;
}
.left .bottom{
    width: 100%;
    height: auto;
}
.left .bottom .list:nth-child(1){
    width: 246px;
    height: 107px;
    background-color: #323f49;
}
.left .bottom .list.hot{
    border-left: 6px solid #37e06f;
    box-sizing: border-box;
}
.left .bottom .list{
    width: 246px;
    height: 107px;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #ffffff;
    line-height: 107px;
    text-align: center;
    position: relative;
}
.left .bottom .list span{
    background-color: #44b5ff;
    width: 10px;
    height: 5px;
    /*background-color: #37e071;*/
    box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
    border-radius: 2px;
    position: absolute;
    top: 52px;
    left: 50px;
}
.left .bottom .list span.hot1{
    width: 10px;
    height: 5px;
    background-color: #37e071;
    box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
    border-radius: 2px;
    position: absolute;
    top: 52px;
    left: 50px;
}
.top {
    display: flex;
    align-items: center;
}
.top .list{
    margin-left: 50px;
    z-index: 999;
}
.top .list .list1{
    width: 163px;
    height: 80px;
    float: left;
    font-size: 18px;
    color: #516676;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
}
.top .list .list1.hot2{
    background-color: #30a3fe;
    color: #ffffff;
    font-weight: bold;
}
.top .manage img{
    width: 51px;
    height: 50px;
    background-color: #ffdd29;
    box-shadow: 0 1px 10px 0 rgba(198, 216, 231, 0.75);
    border: solid 2px #ffffff;
    border-radius: 25px;
}
.top .manage{
    position: relative;
    margin-left: 35px;
}
.top .manage span{
    width: 93px;
    height: 18px;
    font-size: 18px;
    font-stretch: normal;
    letter-spacing: 0;
    color: #516676;
    position: absolute;
    top: 20px;
    left: 67px;
    font-weight: bold;

}
.top .manage.manage1{
    margin-left: 160px;
    position: relative;
}
.top .manage.manage1 span{
    font-size: 18px;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 1px;
    color: #32d796;
    position: absolute;
    top: 10px;
    left: 67px;
    font-weight: bold;
}
.top .manage.manage2{
    margin-left: 140px;
    position: relative;
}
.top .manage.manage2 span{
    font-size: 18px;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 1px;
    color: #41b2fc;
    position: absolute;
    top: 10px;
    font-weight: bold;
}
.onehead{
    width: 1200px;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: rgba(68, 181, 255, 0.1);
}
.slide{
    width: 120px;
    height: 3200px;
    background-color: #1f262c;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.slide >img{
    display: block;
    width: 80px;
    height: 80px;
}
.slide > span{
    width: 100px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    color: #ffffff;
    margin-bottom: 30px;
}
.slide .list{
    width: 100%;
    height: auto;
}
.slide .list >li{
    width: 120px;
    height: 60px;
    background-color: #323f49;
    display: flex;
    align-items: center;

}
.slide .list li .hen{
    width: 10px;
    height: 5px;
    background-color: #37e06f;
    box-shadow: 0px 2px 5px 0px
    rgba(68, 181, 255, 0.43);
    border-radius: 2px;
    margin-left: 10px;
}
.slide .list >li > span{
    font-size: 12px;
    color: white;
    margin-left: 12px;
}
.onehead .title{
    width: auto;
    height: 100%;
    display: flex;
}
.onehead .title >div{
    width: 120px;
    height: 100%;
    font-size: 16px;
    text-align: center;
    line-height: 60px;
}
.onehead .infor{
    width: auto;
    height: 100%;
    display: flex;

}
.onehead .infor>li:nth-child(1){
    width: 170px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    line-height: 60px;
}
.onehead .infor>li:nth-child(2){
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 60px;
}
.onehead .infor>li:nth-child(3){
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 60px;
}
.onehead .infor>li:nth-child(1) >img{
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.con{
    width: 1000px;
    height: 400px;
    position: absolute;
    top: 100px;
    left: 280px;
}
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
    letter-spacing: 0px;
    color: #516676;
}
.con header .dian{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin: 0 6px;
    background-color: #9ba9b4;
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    margin: 0 auto;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.sort{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
}
.dot1{
    width: 7px;
    height: 4px;
    border-radius: 50%;
    background-color: #33d98e;
    margin-right: 10px;
}
.sort h1{
    font-size: 16px;
}
.sort span{
    font-size: 16px;
    color: #30a3fe;
}
.list{
    padding-top: 20px;
    width: 300px;
    height: 200px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background: #f3faff;
    margin-right: 20px;
}
.el-radio-group{
    width: 300px;
    height: 200px;
    background: #f3faff;
    padding-top: 20px;
    box-sizing: border-box;

    margin-right: 40px;
    overflow: hidden;
}
.el-radio{
    margin-left: 30px!important;
    margin-bottom: 10px!important;
}
</style>