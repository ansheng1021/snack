<template>
    <div class="box">
        <my-header index="2"></my-header>
        <left index="1"></left>

        <div class="contend">
            <div class="title" style="display: flex;align-items: center; margin: 20px 0 0 40px">
                <span style="color:#516676;font-size: 18px">商品管理</span>
                <div class="dot"></div>
                <span style="color: #30d366;font-size: 18px">分类管理</span>
            </div>
            <div class="search" style="margin-top: 20px">
                <el-form ref="form" label-width="80px">
                    <router-link class="btn2" :to="{name:'goodsaddone'}" style="text-align: center;line-height: 40px;margin-bottom: 20px;">添加商品</router-link>
                </el-form>
            </div>
            <div class="nav" style="margin:20px 0 30px 40px">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1" style="font-weight: bold;color: #30a2fe;font-size: 16px">全部商品（2）</el-menu-item>
                    <el-menu-item index="2" style="font-weight: bold;color: #30a2fe;font-size: 16px">回收站（1）</el-menu-item>
                    <el-menu-item index="3" style="font-weight: bold;color: #30a2fe;font-size: 16px">上架（1）</el-menu-item>
                    <el-menu-item index="4" style="font-weight: bold;color: #30a2fe;font-size: 16px">下架（1）</el-menu-item>
                </el-menu>
                <div class="line"></div>
            </div>
            <table>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="goodscode"
                        label="货号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="goodsthumb"
                        label="缩略图" >
                    <template  slot-scope="scope">
                        <img :src="scope.row.goodsthumb" alt="" style="width: 50px;height: 50px;">
                    </template>
                </el-table-column>
                <el-table-column
                        prop="goodsname"
                        label="商品名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="discountprice"
                        label="折扣价格" >
                </el-table-column>

                <el-table-column
                        prop="goodscateaty"
                        label="分类">
                </el-table-column>
                <el-table-column label="上下架" prop="frame">
                    <template  slot-scope="scope">
                        <el-switch
                                v-model=scope.row.putaway
                                active-color="#ff4949"
                                inactive-color="#13ce66">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!--<router-link :to="{name:'shgl2',query:{sid:scope.row.sid}}" tag="el-button">编辑</router-link>-->

                        <router-link :to="{name:'goodslistupdate',query:{gid:scope.row.gid}}"  tag="el-button" class="el-button el-button--success el-button--mini">编辑</router-link>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="deletes(scope.row)"
                                >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            </table>
            <div class="page">
                <div class="block" style="margin:60px 0 0 800px">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :page-size="3"
                            layout="total, prev, pager, next"
                            :total=total
                            :current-page.sync="currentPage">
                    </el-pagination>
                </div>
            </div>
            <img src="./static/dibu.png" alt="" class="dibu">
        </div>
    </div>
</template>

<script>
    import MyHeader from '../customer/generl/sjheader'
    import left from '../customer/generl/slide'
    export default {
        name: "shgl",
        data() {
            return {
                total:10,
                currentPage:0,
                tableData: [

                ],
                activeIndex: '1',
                value1: true,
                value2: true

            }
        },
        methods:{
          getdata(){
              this.axios.get('/shop/goods/goodsquery?page='+this.currentPage).then(res=>{
                  this.tableData=res.data.data;
                  this.total=res.data.total;
              })
          },
            handleCurrentChange(val){
                this.currentPage=val
            },
            deletes(val){
                let gid=val.gid;
                this.axios.get('/shop/goods/goodsdelete?gid='+gid).then(res=>{
                    if (res.data=="success"){
                        this.$message({
                            message:'删除成功',
                            type:'success'
                        })
                        this.getdata()
                    } else{
                        this.$message({
                            message:'删除失败',
                            type:'error'
                        })
                    }
                })
            },
            querys(val){

            }
        },

        components:{
            MyHeader,
            left
        },
        watch:{
            currentPage(val){
                this.getdata()
            }
        },
        mounted(){
            this.currentPage=1
            if (localStorage.islogin){

            }else{
                this.$router.push({name:'shoplogin'})
            }
            this.getdata()
        }

    }
</script>

<style scoped>

    a{
        text-decoration: none;
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
        font-size: 18px;
        color: white;
        box-sizing: border-box;
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
    .box .contend{
        width: auto;
        height: auto;
        position: absolute;
        top: 80px;
        left: 200px;
    }
    .box .contend .liebiao{
        height: 104px;
        line-height: 104px;
        padding-left: 60px;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }
    .contend .search{
        width: auto;
        height: 42px;
        display: flex;
        flex-direction: row;
        margin-left: 35px;
    }
    .contend .search .el-form{
        display: flex;
        flex-direction: row;
    }
    .contend .search img{
        margin-left: 157px;
    }
    .contend table{
        margin-left: 40px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1100px;
    }
    .contend .fenge{
        width: 1000px;
        height: 2px;
        background-color: #323f49;
        opacity: 0.05;
        margin: 40px 0 0 40px;
    }
    .contend .zhuangtai{
        display: flex;
        flex-direction: row;
        margin-top: 70px;
        margin-left: 80px;
    }
    .contend .zhuangtai .updata{
        /*width: 75px;*/
        /*height: 18px;*/
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #566168;
        margin-left: 6px;
    }
    .contend .zhuangtai .enter{
        width: 132px;
        height: 39px;
        background-image: linear-gradient(90deg,
        #fd5e52 0%,
        #f95c2c 100%),
        linear-gradient(
                #fdcb52,
                #fdcb52);
        background-blend-mode: normal,
        normal;
        box-shadow: 0 4px 20px 0
        rgba(253, 99, 79, 0.75);
        border-radius: 19px;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        line-height: 39px;
        margin-left: 67px;
    }
    .contend .zhuangtai a{
        text-decoration: none;
    }
    .contend .dibu{
        display: block;
        margin: 64px auto 0;

    }
    .title .dot{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #29c99a;
        margin: 0 5px;
    }
</style>
