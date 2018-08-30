<template>
    <div>
        <top index="2"></top>
        <slide></slide>
        <div class="con">
            <div class="top">
                <div class="img">
                    <img src="./static/shopthumb.png" alt="">
                </div>
                <ul class="shopname">
                    <li class="title">
                        <div class="dot"></div>
                        <span>康洁洗衣旗舰店</span>
                    </li>
                     <li class="jiesao" style="margin-left: 14px">
                         <pre><span>商家简介:</span> 灯具千种热销款式，厂家一站式供货，自由退换货.
                    专业人士上门安装，服务到家。</pre>

                     </li>
                    <li class="jiesao" style="margin-left: 14px">
                         <pre><span>商家公告:</span> 店铺新开张，2018.05.20-05.23所有商品8折优惠"</pre>
                    </li>
                </ul>
                <ol class="shopxinxi">
                    <li class="title1">
                        <div class="dot"></div>
                        <span style="color:#41b2fc;font-size: 16px;">商家</span><span style="color:#4f5b64;font-size: 16px;">信息</span>
                    </li>
                    <li>
                        <p>所属公司：<span>王卓生活用品有限公司</span></p>
                    </li>
                    <li><p>所属公司：<span>店长admin</span></p></li>
                    <li><p>负责人：<span>2018-05-29  09:16:36</span></p></li>
                </ol>
            </div>
            <ul class="active">
                <li>待处理订单（0）</li>
                <li>退换货订单（0）</li>
                <li>当前店铺活动（0）</li>
                <li>即将到期店铺活动（0）</li>
                <li>待处理回复评论（0）</li>
            </ul>
            <ul class="today">
                <li>
                    <p >今日成交量</p>
                    <p>10,915.00</p>
                    <p><span>昨日成交额</span><span style="margin: 0 5px">8,222.00</span><img src="" alt=""><span>11%</span></p>
                </li>
                <li>
                    <p >今日成交量</p>
                    <p>10,915.00</p>
                    <p><span>昨日成交额</span><span style="margin: 0 5px">8,222.00</span><img src="" alt=""><span>11%</span></p>
                </li>
                <li>
                    <p >今日成交量</p>
                    <p>10,915.00</p>
                    <p><span>昨日成交额</span><span style="margin: 0 5px">8,222.00</span><img src="" alt=""><span>11%</span></p>
                </li>
                <li>
                    <p >今日成交量</p>
                    <p>10,915.00</p>
                    <p><span>昨日成交额</span><span style="margin: 0 5px">8,222.00</span><img src="" alt=""><span>11%</span></p>
                </li>
                <li>
                    <p >今日成交量</p>
                    <p>10,915.00</p>
                    <p><span>昨日成交额</span><span style="margin: 0 5px">8,222.00</span><img src="" alt=""><span>11%</span></p>
                </li>
            </ul>
            <div class="right">
                <div>
                    <div class="title">最近一周销量趋势</div>
                    <div class="line"></div>
                    <div class="pic" >
                        <img src="./static/biaoge.png" alt="">
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
    </div>
</template>

<script>
    import top from '../customer/generl/sjheader'
    import slide from './slide'
    export default {
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
        name: "index",
        components:{
            top,
            slide
        }

    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
.con{
    position: absolute;
    top: 80px;
    left: 200px;
}

    .top{
        width: 1200px;
        height: 220px;
        display: flex;
        align-items: center;
        padding: 0 40px 0 40px;
        box-sizing: border-box;
    }
    .top img{
        width: 130px;
        height: 130px;
        display: block;
        margin-right: 8px;
    }
    .top .shopname{
        width: 360px;
        height: 130px;
        border-right: solid 1px #30a2fe ;
        display: flex;
        flex-direction: column;
    }
    .jiesao pre{
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 0;
        color: #516676;
    }
    .jiesao pre span{
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        color: #82898e;
    }

    .top .shopname .title{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4f5b64;
    }
    .dot{
        width: 8px;
        height: 4px;
        margin: 0 4px;
        background-color: #37e06f;
        box-shadow: 0 1px 3px 0 rgba(68, 181, 255, 0.43);
    }
    .shopxinxi {
      width: 300px;
        height: 130px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
    }
    .shopxinxi .title1{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
    }
    .shopxinxi li{
        margin-bottom: 5px;
    }
    li>p{
       margin-left: 14px;
       font-size: 12px;
       font-weight: normal;
       font-stretch: normal;
       letter-spacing: 0;
       color: #82898e;
   }
    li>p>span{
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }
    .active{
        width: 1000px;
        height: 50px;
        margin-left: 40px;
        background-color: #eaf6ff;
        display: flex;
        padding: 0 20px;
        box-sizing: border-box;
        justify-content: space-between;
    }
    .active li{
        width: 150px;
        height: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4f5b64;
    }
    .today{

        width: 1000px;
        height: 120px;
        margin:20px 40px;
        background-color: #eaf6ff;
        display: flex;
        justify-content: space-between;
    }
    .today li{
        width: 181px;
        height: 120px;
        background-color: #ffffff;
        box-shadow: 0px 0px 8px 0px
        #e7e7e7;
        border-radius: 7px;
    }
    .today li p:nth-child(1){
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #82898e;
    }
    .today li p:nth-child(2){
        font-size: 27px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #30a2fe;
    }
    .today li p:nth-child(3) span{
        font-size: 9px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #a4adb5;
    }
    .right{
        width: 1000px;
        padding-left: 20px;
        box-sizing: border-box;
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