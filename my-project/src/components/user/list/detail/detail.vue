<template>
    <div>
        <indexheader :title=goodsinfor.goodsname isshow="true"></indexheader>
        <!--header结束-->
        <div class="photo">
            <img :src="goodsinfor.goodsthumb" alt="">
        </div>
        <div class="introduction">
            <div class="one">{{goodsinfor.goodsname}}</div>
            <div class="two"><p>{{goodsinfor.goodsdesc}}</p></div>
            <div class="three">
                <div class="tl">
                    <span>现价 {{goodsinfor.discountprice}}元／件</span>
                    <del>原价 {{goodsinfor.goodsprice}}元／件</del>
                </div>
                <div class="tr">
                    <span class="tr1"></span>
                    <span class="tr2">月售</span>
                    <span class="tr3">{{goodsinfor.sale}}</span>
                </div>

            </div>
        </div>
        <div class="line">
            <div class="line1"></div>
        </div>
        <div class="lingjuan">

            <img src="./static/img/lingjuan.png" alt="">

            <div class="lingjuan2" >领卷</div>
            <div class="lingjuan3" >满500减50</div>
        </div>
        <div class="line">
            <div class="line1 "></div>
        </div>
        <div class="term">
            <div class="termm">
                <div class="term1">
                    <span></span>
                    <span>无额外收费</span>
                </div>
                <div class="term1">
                    <span></span>
                    <span>爽约包赔</span>
                </div>
                <div class="term1">
                    <span></span>
                    <span>不满意重新服务</span>
                </div>
            </div>
        </div>
        <div class="root">
            <div class="rl">
                    <router-link tag="span" :to="{name:'shop',query:{sid:goodsinfor.sid}}" class="rl1">
                        <img src="./static/img/dianpu.png" alt="">
                        <span>店铺</span>
                    </router-link>
                <a href="">
                    <div class="rl2">
                        <img src="./static/img/lianxi.png" alt="">
                        <span>联系商家</span>
                    </div>
                </a>
            </div>
            <div class="rr">
                <div @click="getshopcar">
                    <div class="rr1">加入购物车</div>
                </div>
                <div @click="getorder">
                    <div class="rr2">立即下单</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "detail",
        data(){
            return{
                goodsinfor:'',
                gid:'',
                car:[]
            }
        },
        methods:{
            getdata(){
               this.axios.get('/user/index/getgoodsone?gid='+this.gid).then(res=>{
                   this.goodsinfor=res.data;
               })
            },
            getshopcar(){
                if (localStorage.userlogin){
                  this.$router.push({name:'serverdetail',query:{gid:this.gid}})
                }else {
                    this.$router.push({name:'indexlogin'})

                }
            },
            getorder(){
                if (localStorage.userlogin){
                    this.$router.push({name:'order',query:{gid:this.gid}})
                }else {
                    this.$router.push({name:'indexlogin'})


                }
            }
        },
        mounted(){
            this.gid=this.$route.query.gid
            this.getdata()
       },
        components:{
            indexheader
        }

    }
</script>

<style scoped>
    @import url("./static/css/common.css");
    @import url("./static/css/header.css");
    @import url("./static/css/Televen.css");
    @import url("http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css");
</style>