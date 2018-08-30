<template>
    <div>
        <!--header开始-->
        <indexheader title="水龙吟" isshow=true></indexheader>
        <!--header结束-->

        <!--banner开始-->
        <section class="con">
        <div class="wsq-banner" ref="wsqbannerr">
            <div class="wsq-title" >
                <router-link :to="{name:'list',query:{cid:item.cid}}" class="wsq-cateaty"  v-for="(item,index) in list" :key="item.cid">{{item.cname}}</router-link>
            </div>
        </div>
        </section>
        <!--banner结束-->

        <!--Icon开始-->

        <section class="wsq-icon">
            <div class="cateaty" ref="cateaty">
            <ul class="xrIcon">
                <router-link :to="{name:'cateatyinformation',query:{pid:item.pid}}" class="xrIconbox" v-for="item in icon" :key="item.cid">
                    <div class="xrIcon1">
                        <div class="img-icon"></div>
                    </div>
                    <span>{{item.cname}}</span>
                </router-link>
            </ul>
        </div>
        </section>
        <!--Icon结束-->

        <!--xrTitle开始-->
        <div class="xrTitle">
            <div class="xrContent">
                <div class="xrDot"></div>
                <div class="xrText"><span>全部</span>服务</div>
            </div>
        </div>
        <scroll class="bag-scroll" :data="goods" @pullingUp="getgoods">
            <div class="sk-bag-scroll">
                <ul class="bag-item" v-for="item in goods" :key="item.gid">
                    <li class="sk-bag-photo">
                       <router-link :to="{name:'detail',query:{gid:item.gid}}"><img :src=item.goodsthumb alt=""></router-link>
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
                                <li class="number">{{item.evaluate}}<span>%</span></li>
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
                            <img src="./static/img/Tnine/bds.png" alt="">
                            <router-link tag="span" :to="{name:'shop',query:{sid:item.sid}}">{{item.shopname}}</router-link>
                        </div>
                    </li>
                </ul>
                <!---->

            </div>
        </scroll>
        <!--bag结束-->

        <!--footer开始-->
       <tab></tab>

        <!--footer结束-->
    </div>
</template>

<script>
    import indexheader from '../../generally/indexheader'
    import tab from '../../generally/tab'
    import scroll from "../../generally/scroll";
    import BScroll from 'better-scroll'
    export default {
        data(){
            return{
                list:[],
                icon:[],
                goods:[],
                page:'',
                totalpage:0,
                cid:'',

            }
        },
        name: "list",
        methods:{
            getcateaty(){
                this.axios.get('/user/index/menu').then(res=>{
                    this.list=res.data.map(element =>({cid:element.cid,cname:element.cname}));
                    let currentCategory=res.data.filter(ele=>ele.cid==this.cid);
                    this.icon=currentCategory[0].children;
                })

            },
            initBscroll(){

                new BScroll(this.$refs.cateaty,{
                    scrollX:true,
                    eventPassthrough:'vertical'
                })
                new BScroll(this.$refs.wsqbannerr,{
                    scrollX:true,
                    eventPassthrough:'vertical'
                })
            },
            getgoods(){
                if(this.page>this.totalpage){
                    return;
                }
                this.page++
                console.log(1);
                this.axios.get('/user/index/getgoods',{
                    params:{
                        cid:this.cid,
                        page:this.page
                    }
                }).then(res=>{
                    if(!this.totalpage){
                        this.totalpage=res.data.total
                    }
                    this.goods.push(...res.data.list)
                })
            },

        },
        mounted(){
            this.cid=this.$route.query.cid;
            this.getcateaty();
            this.getgoods();
            this.initBscroll()
        },
        watch: {
            $route:{
                handler:function (val,oldval) {
                    console.log(val);
                    this.cid=val.query.cid;
                    this.getcateaty()
                    this.getgoods()
                }
            },

        },
        components:{
            scroll,
            tab,
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/Tnine.css');
    @import url('http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css');
</style>