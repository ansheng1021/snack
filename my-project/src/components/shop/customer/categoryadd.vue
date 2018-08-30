<template>
    <div>
        <my-header index="2"></my-header>
        <left index="1"></left>
        <div class="form">
            <el-form :ref="form" :model="form" label-width="80px">
                <el-form-item  label="父级栏目">
                    <el-select v-model="form.pid" placeholder="选择分类">
                        <el-option label="一级栏目" value="0"></el-option>
                        <el-option v-for="item in categoryList" :label="item.pid?'--'+item.cname:item.cname" :value="item.cid" :key="item.cid"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="form.cname"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import MyHeader from '../customer/generl/sjheader'

    import left from '../customer/generl/slide'
    export default {
        name: "categoryadd",
        data:function () {
            return{
                categoryList:[
                ],
                form:{
                    pid:'',
                    cname:''
                },
                formInline: {
                    user: '',
                    region: ''
                }


            }
        },
        methods:{
          getCategory(){
              this.axios.get('/shop/manage/classfiy').then(res=>{
                  this.categoryList=res.data
                  console.log(this.categoryList);
              })
          },
            onSubmit(){
              this.axios.post('/shop/manage/categoryadd',this.form).then(res=>{
                  if (res.data=="success"){
                      this.$router.push({name:'sjclassfiy'})
                  } else{
                      this.$message({
                          message:'插入失败',
                          type:'err'
                      })
                  }
              })
            }
        },
        mounted(){
            this.getCategory()
       },
        components:{
            MyHeader,
            left
        },
    }
</script>

<style scoped>
.form{
    position: absolute;
    top:80px;
    left: 200px;
    right: 0;
    bottom: 0;
    padding: 20px 0 0 40px;
    box-sizing: border-box;
}
</style>