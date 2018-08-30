<template>
    <div>
        <!--头部导航-->
    <indexheader title="店铺"></indexheader>
        <!--头部结束-->
        <!--搜索框-->
        <form class="wsq-searchBox">
            <img src="./static/img/sousuoicon.png" height="24" width="40"/>
            <input type="text" placeholder="搜素您需要定位的城市">
        </form>
        <!--搜索结束-->

        <!--单品详情-->
        <div class="LZJ-singleDetail">
            <div class="LZJ-main">
                <div class="LZJ-Thumb">
                    <img :src=shopinfor.shopthumb alt="">
                </div>
                <div class="LZJ-infos">
                    <div class="LZJ-title">{{shopinfor.shopname}}</div>
                    <div class="LZJ-bargain">
                        <div class="LZJ-already">
                            <div class="LZJ-spot"></div>
                            <div class="LZJ-poi">已接</div>
                            <span>29</span>
                        </div>
                        <div class="LZJ-already">
                            <div class="LZJ-spot"></div>
                            <div class="LZJ-poi">成交</div>
                            <span>90</span>
                            %
                        </div>
                        <div class="LZJ-already" style="margin-right: 0">
                            <div class="LZJ-spot"></div>
                            <div class="LZJ-poi">好评</div>
                            <span>98</span>
                            %
                        </div>
                    </div>
                    <div class="LZJ-service">
                        <img src="./static/img/icon-time.png" alt="">
                        <div class="LZJ-offer">服务时间</div>
                        <div class="LZJ-times">9:00-12:00</div>
                    </div>
                    <div class="LZJ-dates">最近可约 16:00</div>
                    <a href="" class="LZJ-advice">咨询</a>
                </div>
            </div>
        </div>
        <!--banner-->
        <section class="wsq-banner">
            <div class="wsq-title">
                <div :class="{'wsq-cateaty':true,'hot':status=='all'}" @click="status='all'">全部项目</div>
                <div :class="{'wsq-cateaty':true,'hot':status=='discount'}" style="margin: 0 0.25rem" @click="status='discount'">促销项目</div>
                <div class="wsq-cateaty">用户评价</div>
            </div>
        </section>
        <!--更多详情分类-->
        <scroll class="bag-scroll" :data="shopgoods" @pullingUp="getdata">
            <div class="sk-bag-scroll">
                <ul class="bag-item" v-for="item in displayList" :key="item.gid">
                    <li class="sk-bag-photo">
                       <router-link :to="{name:'detail',query:{gid:item.gid}}"> <img :src=item.goodsthumb alt=""></router-link>
                    </li>
                    <li class="sk-bag-content">
                        <div class="sk-service-type">
                            <h3>{{item.goodsname}}</h3>
                        </div>
                        <div class="sk-service-desc">
                            <p>{{item.goodsdesc}}</p>
                        </div>
                        <div class="sk-estimate_sale_price">
                            <ul class="sk-estimate sk-item">
                                <li class="dot"></li>
                                <li class="text">好评</li>
                                <li class="number">90<span>%</span></li>
                            </ul>
                            <ul class="sk-sale sk-item">
                                <li class="dot"></li>
                                <li class="text">月售</li>
                                <li class="number">{{item.sale}}</li>
                            </ul>
                            <ul class="sk-price">
                                <li>{{item.goodsprice}}元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="./static/img/bds.png" alt="">
                            <span>{{item.shopname}}</span>
                        </div>
                    </li>
                </ul>

            </div>
        </scroll>
    </div>

</template>

<script>
    import tab from '../../../generally/tab'
    import indexheader from '../../../generally/indexheader'
    import scroll from '../../../generally/scroll'
    export default {
        name: "shop",
        data(){
            return {
                sid:'',
                shopinfor:'',
                shopgoods:[],
                page:'',
                totalpage:0,
                hot:true,
                status:'all',
            }
        },
        computed:{
           displayList(){
               let arr=this.shopgoods.filter((ele)=>{
                   if (this.status == 'all') {
                       return true
                   }else if(this.status == 'discount'){
                       return ele.goodsprice>ele.discountprice
                   }
               })
               return arr;
           }
        },
        components:{
            tab,
            scroll,
            indexheader
        },
        methods:{

            getdata(){
                if(this.page>this.totalpage){
                    return;
                }
                this.page++
                this.axios.get('/user/index/getshopgoods',{
                    params:{
                        sid:this.sid,
                        page:this.page
                    }
                }).then(res=>{
                    if(!this.totalpage){
                        this.totalpage=res.data.total
                    }
                    this.shopgoods.push(...res.data.shopgoods)
                    this.shopinfor=res.data.shopinfor
                })
            }
        },
        mounted(){
            this.sid=this.$route.query.sid
            this.getdata();
        }

    }
</script>

<style scoped>
    @import url("./static/css/common.css");
    @import url("./static/css/Thirteen.css");
</style>