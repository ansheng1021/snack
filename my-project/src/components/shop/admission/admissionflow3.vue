<template>
    <section class="con">
        <div class="top">
            <div class="del"></div>
            <div class="mession">店铺经营信息</div>
        </div>

        <div class="bottom">
            <el-form :model="form" label-width="100px">
                <el-form-item label="店铺名称">
                    <el-input v-model="form.shopname"></el-input>
                </el-form-item>
                <el-form-item label="店铺分类">
                    <!--<el-select placeholder="请选择店铺分类" >-->
                    <!--</el-select>-->
                    <el-input v-model="form.shopcateaty"></el-input>
                </el-form-item>
                <el-form-item label="店铺缩略图">
                <el-upload
                        class="avatar-uploader"
                        action="/uploading"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-input type="hidden" v-model="form.shopthumb"></el-input>
                </el-form-item>
                <el-form-item label="店铺公告">
                    <el-input type="textarea" v-model="form.shopnotice"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script>
    export default {
        name: "admissionflow3",
        data:function(){
            return{
                imageUrl: '',
                form:{
                    shopname:'',
                    shopcateaty:'',
                    shopnotice:'',
                    shopthumb:'',
                }
            }
        },

        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.form.shopthumb=res
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },

        beforeRouteLeave (to, from, next) {
            let company=JSON.parse(localStorage.company)
            let obj=Object.assign(company,this.form);
            localStorage.company=JSON.stringify(obj);
            next();
        }
    }
</script>

<style scoped>
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
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .con{
        width: 800px;
        height: auto;
        margin: 0 auto;
        margin-top: 60px;
    }
    .top{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #4f5b64;
    }
   .top .del{
        width: 10px;
        height: 5px;
        background-color: #37e06f;
        box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
        border-radius: 2px;
        margin-right: 16px;
    }
    .el-upload {
        background: gainsboro;
    }


</style>