<template>
    <div>
        <!--header开始-->
        <header>
            <div class="title">
                <i class="iconfont icon-fanhui"></i>
                <span>专业清洗</span>
                <i class="iconfont icon-gengduo"></i>
            </div>
        </header>
        <!--header结束-->

        <!--nav开始-->
        <nav>
            <div class="main" ref="cateaty">
                <div class="cateaty" >
                    <router-link :to="{name:'cateatyinformation',query:{cid:item.cid}}" v-for="item in list" :key="item.cid">{{item.cname}}</router-link>
                </div>
            </div>
        </nav>
        <!--nav结束-->

        <!--cate开始-->
        <div class="cate">
            <div class="main">
                <div class="cateBox">
                    <p>综合</p>
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
                <div class="cateBox">
                    <p>销量</p>
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
                <div class="cateBox">
                    <p>价格降序</p>
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
            </div>
        </div>
        <!--nav结束-->

        <!--bag开始-->
        <scroll class="bag-scroll" :data="goods">
            <div class="sk-bag-scroll">
                <ul class="bag-item" v-for="item in goods" :key="item.gid">
                    <li class="sk-bag-photo">
                        <img :src=item.goodsthumb alt="">
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
                                <li class="number">278</li>
                            </ul>
                            <ul class="sk-price">
                                <li>{{item.discountprice}}元/件</li>
                            </ul>
                        </div>
                        <div class="sk-service-operator">
                            <img src="./static/img/Tnine/bds.png" alt="">
                            <span>包大师</span>
                        </div>
                    </li>
                </ul>

            </div>
        </scroll>
        <!--bag结束-->
    </div>
</template>

<script>

  import scroll from "../../../generally/scroll";
  import BScroll from 'better-scroll'
    export default {
        data(){
          return{
              pid:'',
              list:[],
              goods:[],
              page:'',
              totalpage:0,
          }
        },
        name: "cateatyinformation",
        methods:{
            getcateaty(){
                this.axios.get('/user/index/menu').then(res=>{
                    let currentCategory=res.data.filter(ele=>ele.cid==this.pid);
                    this.list=currentCategory[0].children;
                })

            },
            getgoods(){
                if(this.page>this.totalpage){
                    return;
                }
                this.page++
                this.axios.get('/user/index/getgoods',{
                    params:{
                        cid:this.pid,
                        page:this.page
                    }
                }).then(res=>{
                    if(!this.totalpage){
                        this.totalpage=res.data.total
                    }
                    this.goods.push(...res.data.list)
                })
            },
            initBscroll(){

                new BScroll(this.$refs.cateaty,{
                    scrollX:true,
                    eventPassthrough:'vertical'
                })
            },
        },
        mounted(){
            this.pid=this.$route.query.pid;
            this.getcateaty();
            this.getgoods();
            this.initBscroll()
        },
        watch: {
            $route:{
                handler:function (val,oldval) {
                    this.pid=val.query.cid;
                    this.getcateaty()
                    this.getgoods()
                }
            },

        },
        components:{
            scroll
        }
    }
</script>

<style scoped>
    @import url('./static/css/Tten.css');
    @import url('http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css');
</style>