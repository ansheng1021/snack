<template>
  <div>
  <top index="4"></top>
  <left></left>
  <div class="query">
    <div class="title">
      <span>店铺管理</span>
      <div class="dot"></div>
      <span>店铺信息</span>
    </div>

    <div class="list">
      <div class="dot1"></div>
      <span>基本</span><span style="color: black">信息</span>
    </div>

    <el-form :label-position="labelPosition" label-width="150px" :model="form">
      <el-form-item label="公司名称">
        <input v-model="form.name" :disabled="true" style="border: none;background: none">
      </el-form-item>
      <el-form-item label="店铺名称">
        <input v-model="form.shopname">
      </el-form-item>
      <el-form-item label="店铺类型">
        <input v-model="form.shopcateaty">
      </el-form-item>
      <el-form-item label="店铺介绍">
        <input v-model="form.shopnotice">
      </el-form-item>
      <el-form-item label="公司规模">
        <input v-model="form.scale">人
      </el-form-item>
      <el-form-item label="公司邮箱">
        <input v-model="form.email">
      </el-form-item>
    </el-form>

    <div class="list">
      <div class="dot1"></div>
      <span>联系</span><span style="color: black">方式</span>
    </div>
    <el-form :label-position="labelPosition" label-width="150px" :model="form">
      <el-form-item label="联系方式">
        <input v-model="form.phone">
      </el-form-item>
      <el-form-item label="联系人">
        <input v-model="form.legalperson">
      </el-form-item>
      <el-form-item label="所在城市">
        <input v-model="form.location">
      </el-form-item>
      <el-form-item label="详细地址">
        <input v-model="form.address">
      </el-form-item>
      <input v-model="form.sid" type="hidden">
    </el-form>

    <div class="list">
      <div class="dot1"></div>
      <span>审核</span><span style="color: black">状态</span>
    </div>
    <el-form :label-position="labelPosition" label-width="150px" :model="form">
      <el-form-item label="审核状态">
        <input v-model="form.status" :disabled="true" style="border: none;background: none">
      </el-form-item>
      <el-form-item label="注意">
        <span>修改提交后，会重新审核，请慎重填写提交。如需更改入驻信息，请点击更改按钮。</span>
        <el-button type="primary" round @click="next">更改入驻信息</el-button>
      </el-form-item>
    </el-form>

    <div class="button" style="margin: 20px 300px;float: right">
      <el-button type="success" round @click="next">提交</el-button>
      <el-button type="danger" round @click="prev">取消</el-button>
    </div>

  </div>
  </div>
</template>

<script>
  import top from '../generl/sjheader'
  import left from '../storeinfomation/generl/slide'
  export default {
    name: "shopinformation",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        labelPosition: 'right',
        value1: '',
        value2: true,
        form: {

        }
      };
    },
      components:{
          top,
          left
      },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      next(){
        this.axios.post('/shop/store/update',this.form).then(res=>{
          if(res.data=="success"){
              this.$message({
                  message:'修改成功',
                  type:'success'
              })
          }else{
              this.$message({
                  message:'修改失败',
                  type:'error'
              })
          }
        })
      },
      prev(){
        this.$router.push({path:'/commodity/commoditylist'})
      },
      getinformation(){
          let sid=localStorage.sid
          this.axios.get('/shop/store/getinformation?sid=' + sid).then(res=>{
          console.log(res.data);
          this.form = res.data;
        })
      }
    },
    mounted(){
      this.getinformation()
    },
  }
</script>

<style scoped>
  .query{
    position: absolute;
    left: 240px;
    top:100px;
  }
  input{
    width: 300px;
    height: 30px;
    border-radius: 15px;
    padding: 5px 15px;
    box-sizing: border-box;
    outline: 0;
    border: 1px solid #ebf6ff;
    background: #f3faff;
  }

  .title{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 24px 0;
  }
  .title span{
    font-size: 12px;
    color: #000;
    margin-right: 10px;
  }
  .title p{
    font-size: 12px;
    color: #33d98e;
    margin-right: 10px;
  }
  .dot{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #33d98e;
    margin-right: 10px;
  }
  .dot1{
    width: 10px;
    height: 5px;
    margin-right: 20px;
    border-radius: 2px;
    background-color: #33d98e;
  }
  .list{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
  }
  .list > span{
    font-size: 18px;
    color: #30A3FE;
  }

</style>
