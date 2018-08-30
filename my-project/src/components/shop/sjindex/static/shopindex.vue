<template>
    <div>
        <my-header></my-header>
        <div class="right">
            <div>
                <div class="title">最近一周销量趋势</div>
                <div class="line"></div>
                <div class="pic" >
                    <img src="../static/img/21434601.png" alt="">
                </div>
            </div>
            <div>
                <div style="display: flex;justify-content: space-between">
                    <div class="title">最近一周单品销量排名</div>
                    <div class="rankway">
                        <el-radio-group v-model="radio">
                            <el-radio :label="3">按销量额排名</el-radio>
                            <el-radio :label="6">按销量总价排名</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="line"></div>
                <el-table
                        :data="tableData3"
                        style="width: 100%">
                    <el-table-column
                            prop="ranking"
                            label="排名"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="productcode"
                            label="货号"
                            width="280">
                    </el-table-column>
                    <el-table-column
                            prop="ordername"
                            label="商品名称"
                            width="280">
                    </el-table-column>
                    <el-table-column
                            prop="salesvolums"
                            label="销售量(件)"
                            width="140">
                    </el-table-column>
                    <el-table-column
                            prop="salesamount"
                            label="销售额(元)"
                            width="140">
                    </el-table-column>
                    <el-table-column
                            prop="average"
                            label="均价(元)"
                            width="160">
                    </el-table-column>
                </el-table>
            </div>
            <div class="block" style="">
                <el-pagination
                        background
                        :current-page="currentPage"
                        :page-size="5"
                        layout="prev, pager, next, jumper"
                        :total="20">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from '../../common/shopheader'
    export default {

        name: "shopindex",
        data(){
            return{
                tableData3: [
                    {
                        ranking:1,
                        productcode:'201807271215030022',
                        ordername:'麦卢卡花蜂蜜',
                        salesvolums:20,
                        salesamount:20000,
                        average:1000
                    },
                    {
                        ranking:2,
                        productcode:'201807271215030022',
                        ordername:'麦卢卡花蜂蜜',
                        salesvolums:20,
                        salesamount:20000,
                        average:1000
                    },
                    {
                        ranking:3,
                        productcode:'201807271215030022',
                        ordername:'麦卢卡花蜂蜜',
                        salesvolums:20,
                        salesamount:20000,
                        average:1000
                    },
                    {
                        ranking:4,
                        productcode:'201807271215030022',
                        ordername:'麦卢卡花蜂蜜',
                        salesvolums:20,
                        salesamount:20000,
                        average:1000
                    },
                    {
                        ranking:5,
                        productcode:'201807271215030022',
                        ordername:'麦卢卡花蜂蜜',
                        salesvolums:20,
                        salesamount:20000,
                        average:1000
                    },
                ],
                radio:3,
                currentPage:2

            }
        },
        components:{
            MyHeader
        }
    }
</script>

<style scoped>
    .right{
        width: 1179px;
        padding-left: 20px;
        box-sizing: border-box;
        position: absolute;
        top: 20px;
        left: 140px;
    }
    .title{
        color: #30a2fe;
    }
    .line{
        height: 1px;
        background: #30a2fe;
        margin-top: 16px;
    }
    .block{
        margin: 20px 30px 30px 0;
        display: flex;
        flex-direction: row-reverse;
        box-sizing: border-box;
    }
</style>