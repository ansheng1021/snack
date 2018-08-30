<template>
    <div>
        <my-header index="2"></my-header>
        <left index="2"></left>
    <div class="con">
     <div class="title">
         <span style="color:#516676;font-size: 18px">商品管理</span>
         <div class="dot"></div>
         <span style="color: #30d366;font-size: 18px">分类管理</span>
         <img src="./static/desc.png" height="60" width="201" class="desc"/></div>
        <div class="myform">
           <div class="row">
               <input type="text" class="search" placeholder="请输入关键字搜索">
               <img src="./static/search.png" alt="">
               <input type="button" class="btn1" value="保存">
               <router-link class="btn2" :to="{name:'categoryadd'}" style="text-align: center;line-height: 40px;">添加分类</router-link>
           </div>
            <table>
                <el-table
                        :data="table"
                        style="width: 1000px">
                    <el-table-column
                            prop="cid"
                            label="编号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="cname"
                            label="商品类型名称"
                            width="180">
                    </el-table-column>
                    <!--<el-table-column-->
                            <!--prop="shopthumb"-->
                            <!--label="默认展开" >-->
                        <!--<template slot-scope="scope" prop="value">-->
                            <!--<el-switch-->
                                    <!--v-model="scope.row.value"-->
                                    <!--active-color="#ff4949"-->
                                    <!--inactive-color="#13ce66">-->
                            <!--</el-switch>-->
                        <!--</template>-->
                    <!--</el-table-column>-->
                    <el-table-column
                            prop="time"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="deletecateaty(scope.row)"
                            >删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </table>
        </div>
        <div class="block" style="margin-left: 500px">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size="3"
                    layout="total, prev, pager, next"
                    :total=total
                    :current-page.sync="currentPage">
            </el-pagination>
        </div>
     </div>

    </div>

</template>

<script>
    import MyHeader from '../customer/generl/sjheader'
    import left from '../customer/generl/slide'
    export default {
        name: "sjclassfiy",
        data:function(){
            return{
                table:[

                ],
                total:10,
                currentPage:0,


            }
        },
        methods:{
            getCategory(){
                this.axios.get('/shop/manage/categoryquery?page='+this.currentPage).then(res=>{
                    this.table=res.data.data;
                    this.total=res.data.total;
                })
            },
            handleCurrentChange(val){
                this.currentPage=val
            },
            deletecateaty(val){
               let cid=val.cid
                this.axios.get('/shop/manage/categorydelete?cid='+cid).then(res=>{
                    if(res.data=="success"){
                        this.getCategory();
                    }else{
                        this.$message({
                            message:'删除失败',
                            type:'error'
                        })
                    }
                })
            }
        },
        watch:{
            currentPage(val){
                this.getCategory()
            }
        },
        mounted(){
            this.currentPage=1
        },
        components:{
            MyHeader,
            left,
        }
    }

</script>

<style scoped>
    a{
        text-decoration: none;
    }

.con{
    position: absolute;
    top: 80px;
    left: 200px;
}
    .title{
        margin: 30px 0 0 40px;
        display: flex;
        align-items: center;
    }
    .title .dot{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #29c99a;
        margin: 0 5px;
    }
    .desc{
        position: absolute;
        top: 10px;
        left: 240px;
    }
    .myform{
        margin-left: 40px;
        margin-top: 30px;
    }
    .el-form{
        display: flex;
        align-items: center;
    }
.btn1{
        width: 120px;
        height: 40px;
        font-size: 16px;
        background-image: linear-gradient(90deg,
        #30b8fe 0%,
        #30aefe 50%,
        #30a3fe 100%),
        linear-gradient(#3bacfe, #3bacfe);
        background-blend-mode: normal, normal;
        box-shadow: 0 5px 12px 0 rgba(59, 172, 254, 0.43);
        border-radius: 24px;
        border:none;
        color: white;
    box-sizing: border-box;
    margin :0 10px 0 520px ;
    }
.btn2{
    width: 120px;
    height: 40px;
    background-image: linear-gradient(90deg, #37e06f 0%, #32d69a 100%),
    linear-gradient(#3bacfe, #3bacfe);
    background-blend-mode: normal, normal;
    box-shadow: 0 4px 20px 0 rgba(55, 223, 116, 0.75);
    border-radius: 24px;
    border:none;
    font-size: 16px;
    color: white;
    box-sizing: border-box;
}
 .search{
    font-size: 16px;
    color: #516676;
    font-weight: bold;
    width: 240px;
    height: 37px;
    background-color: #ebf7ff;
    border-radius: 21px;
    border: solid 3px rgba(55, 169, 254, 0.17);
    opacity: 0.58;
     padding-left: 5px;
     box-sizing: border-box;
}
    .hot{
        margin: 20px 0 0 40px;
    }
    .row{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
    }
.row img{
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    box-shadow: 0 3px 8px 0
    rgba(59, 172, 254, 0.43);
    margin-left: 20px;
}
</style>