<template>
    <div>
        <headers index="2"></headers>
        <div class="left">
            <ul class="bottom">
                <li class="hot">
                    <div class="shu"></div>
                    <div class="hen"></div>
                    <span>待审核</span>
                </li>
                <li>
                    <div class="shu"></div>
                    <div class="hen"></div>
                    <span>已通过</span>
                </li>
                <li>
                    <div class="shu"></div>
                    <div class="hen"></div>
                    <span>未通过</span>
                </li>
            </ul>
        </div>
        <div class="con">
            <div class="contend">
                <div class="liebiao">商家数据</div>
                <div class="search">
                    <el-form ref="form" label-width="80px">
                        <!--<el-form-item label="名称">-->
                            <!--<el-input ></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="ID">-->
                            <!--<el-input></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="类型">-->
                            <!--&lt;!&ndash;<el-select placeholder="全部">&ndash;&gt;-->
                            <!--&lt;!&ndash;<el-option label="区域一" value="shanghai"></el-option>&ndash;&gt;-->
                            <!--&lt;!&ndash;<el-option label="区域二" value="beijing"></el-option>&ndash;&gt;-->
                            <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="地区">-->
                            <!--&lt;!&ndash;<el-select placeholder="全部">&ndash;&gt;-->
                            <!--&lt;!&ndash;<el-option label="区域一" value="shanghai"></el-option>&ndash;&gt;-->
                            <!--&lt;!&ndash;<el-option label="区域二" value="beijing"></el-option>&ndash;&gt;-->
                            <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                        <!--</el-form-item>-->
                        <div class="sousuo"></div>
                    </el-form>
                </div>
                <table>
                    <el-table
                            :data="table"
                            style="width: 100%">
                        <el-table-column
                                prop="sid"
                                label="ID"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="shopname"
                                label="商家名称"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="shoptaddress"
                                label="地区" >
                        </el-table-column>
                        <el-table-column
                                prop="applauseRate"
                                label="好评率">
                        </el-table-column>
                        <el-table-column
                                prop="complaintRate"
                                label="投诉率">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <router-link tag="el-button">编辑</router-link>
                            </template>
                        </el-table-column>
                    </el-table>
                </table>
                <div class="fenge"></div>
                <div class="page">
                    <div class="block">
                        <!--<el-pagination-->
                        <!--@size-change="handleSizeChange"-->
                        <!--@current-change="handleCurrentChange"-->
                        <!--:current-page.sync="currentPage1"-->
                        <!--:page-size="100"-->
                        <!--layout="total, prev, pager, next"-->
                        <!--:total="1000">-->
                        <!--</el-pagination>-->
                    </div>
                </div>
                <img src="../static/dibu.png" alt="" class="dibu">
            </div>
        </div>
    </div>
</template>

<script>
    import headers from '../../generally/header'
    export default {
        name: "shopdata",
        components:{
          headers
        },
        data:function () {
            return{
                table:[
                    {
                        sid:1,
                        shopname:'爱康洁洗衣坊迎泽区分店',
                        shoptaddress:'万荣县',
                        applauseRate:'98%',
                        complaintRate:'2%',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .left{
        width: 200px;
        height: 1080px;
        background-color: #1f262c;
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
        width: 200px;
        height: 140px;
    }
    .left .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .left .bottom li{
        width: 200px;
        height:80px;
        display: flex;
        align-items: center;
    }
    .left .bottom li > .shu{
        width: 4px;
        height: 80px;
        background-image: linear-gradient(0deg,
        #37e06f 0%,
        #32d69a 100%),
        linear-gradient(#1f262c, #1f262c);
        background-blend-mode: normal, normal;
        box-shadow: 0 4px 20px 0 rgba(55, 223, 116, 0.75);
        opacity: 0;
    }
    .left .bottom li > .hen{
        width: 10px;
        height: 5px;
        background-color: #30a3fe;
        box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
        border-radius: 2px;
        margin: 0 20px 0 40px;
    }
    .left .bottom li >span{
        font-size: 18px;
        color: white;
    }
    .left .bottom li.hot{
        background-color: #323f49;
    }
    .left .bottom li.hot .shu{
        opacity: 1;
    }
    .left .bottom li.hot .hen{
        background-color: #35dc82;
        box-shadow: 0 2px 5px 0 rgba(68, 181, 255, 0.43);
    }
    .con .contend{
        width: 1000px;
        height: auto;
        position: absolute;
        top: 40px;
        left: 0;
    }
    .con .contend .liebiao{
        height: 80px;
        line-height: 80px;
        padding-left: 65px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }
    .contend .search{
        width: 1000px;
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
        margin-left: 20px;
    }
    .contend table{
        margin-left: 80px;
        margin-top: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1000px;
        height: 333px;
    }
    .contend .fenge{
        width: 100%;
        height: 2px;
        background-color: #323f49;
        opacity: 0.05;
        margin-top: 39px;
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
    .contend .page{
        margin-top: 205px;
        margin-left:650px;
    }
    .contend .dibu{
        margin:60px 0 0 240px;
    }
    .sousuo{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: url("../static/sousuo.png");
        background-size: 100% 100%;
        box-shadow: 0 3px 8px 0 rgba(59, 172, 254, 0.43);
        margin-left: 20px;
    }

    .con{
        width: 1000px;
        height: 400px;
        position: absolute;
        top: 60px;
        left: 200px;
    }
</style>