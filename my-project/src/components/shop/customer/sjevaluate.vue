<template>
    <div>
        <my-header index="2"></my-header>
        <left index="3"></left>
        <div class="con">
            <div class="title">
                <span style="color:#516676;font-size: 18px">商品管理</span>
                <div class="dot"></div>
                <span style="color: #30d366;font-size: 18px">分类管理</span>
            </div>
            <div class="myform">
                <div class="row">

                    <input type="text" class="search" placeholder="请输入关键字搜索">
                    <img src="./static/search.png" alt="">
                </div>
                <table>
                    <el-table
                            :data="table"
                            style="width: 1000px">
                        <el-table-column
                                prop="uid"
                                label="编号"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="username"
                                label="用户名">
                        </el-table-column>
                        <el-table-column
                                prop="userclassfiy"
                                label="用户类型">
                        </el-table-column>
                        <el-table-column
                                prop="evaluateclassfiy"
                                label="评价类型">
                        </el-table-column>
                        <el-table-column
                                prop="evaluateobj"
                                label="评价对象">
                        </el-table-column>
                        <el-table-column
                                prop="ordernum"
                                label="订单号">
                        </el-table-column>
                        <el-table-column
                                prop="evaluatetime"
                                label="评价时间">
                        </el-table-column>
                        <el-table-column
                                prop="answer"
                                label="评价答复">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.row)"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </table>
            </div>
            <div class="block" style="margin:40px 0 0 500px">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </div>

    </div>

</template>

<script>
    import MyHeader from '../customer/generl/sjheader'
    import left from '../customer/generl/slide'
    export default {
        name: "sjevaluate",
        data:function(){
            return{
                table:[
                    {uid:'001',username:'r-123',userclassfiy:'白金用户',evaluateclassfiy:'好评',evaluateobj:'HAIER海尔 EG10014BGU啊 10 公斤',ordernum:'DSV0002',evaluatetime:'2018-06-01  18:25',answer:'已回复'},
                    {uid:'001',username:'r-123',userclassfiy:'白金用户',evaluateclassfiy:'好评',evaluateobj:'HAIER海尔 EG10014BGU啊 10 公斤',ordernum:'DSV0002',evaluatetime:'2018-06-01  18:25',answer:'已回复'},
                    {uid:'001',username:'r-123',userclassfiy:'白金用户',evaluateclassfiy:'好评',evaluateobj:'HAIER海尔 EG10014BGU啊 10 公斤',ordernum:'DSV0002',evaluatetime:'2018-06-01  18:25',answer:'已回复'},
                    {uid:'001',username:'r-123',userclassfiy:'白金用户',evaluateclassfiy:'好评',evaluateobj:'HAIER海尔 EG10014BGU啊 10 公斤',ordernum:'DSV0002',evaluatetime:'2018-06-01  18:25',answer:'已回复'},
                    {uid:'001',username:'r-123',userclassfiy:'白金用户',evaluateclassfiy:'好评',evaluateobj:'HAIER海尔 EG10014BGU啊 10 公斤',ordernum:'DSV0002',evaluatetime:'2018-06-01  18:25',answer:'已回复'},

                ],

                check:true,
                checked:false,

            }
        },
        components:{
            MyHeader,
            left
        },

    }

</script>

<style scoped>
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