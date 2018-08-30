<template>
    <div>
        <indexheader title="小兵零食" ></indexheader>
        <div class="search">
            <router-link :to="{name:'selectaddress'}" tag="span">太原 </router-link><i class="iconfont icon-down"></i>
            <router-link :to="{name:'search'}" class="input">
                <input type="text" placeholder="搜索您需要的服务 商品">
                <img src="./static/img/sousuo.png" alt="">
            </router-link>
        </div>
        <section class="lunbo">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="img" v-for="item in banner" :key="item.gid">
                    <router-link :to="{name:'detail',query:{gid:item.gid}}">
                        <img :src="item.goodsthumb" alt="">
                    </router-link>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
        <ul class="class">
            <li v-for="item in cateaty" :key="item.cid">
                <router-link :to="{name:'list',query:{cid:item.cid}}" >
                    <div class="img"></div>
                    <p>{{item.cname}}</p>
                </router-link>
            </li>
            <li></li>
        </ul>
        <!--footer开始-->
        <tab></tab>
        <!--footer结束-->
    </div>
</template>

<script>
    import tab from '../../generally/tab'
    import indexheader from '../../generally/indexheader'
    export default {
        data(){
          return{
              banner:'',
              cateaty:'',
              swiperOption: {
                  autoplay:true,
                  pagination: {
                      el: '.swiper-pagination',
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
                  loop:true,
              }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        name: "index",
        components:{
            tab,
            indexheader
        },
        methods:{
            getcateaty(){
                this.axios.get('/user/index/menu').then(res=>{
                    this.cateaty=res.data.map(element =>({cid:element.cid,cname:element.cname})).slice(0,9);
                })
            },
            getbanner(){
                this.axios.get('/user/index/').then(res=>{
                    this.banner=res.data;
                })
            }
        },
        mounted(){
            this.getcateaty();
            this.getbanner()

        },
    }
</script>

<style scoped>
@import url('./static/css/common.css');
@import url('./static/css/header.css');
@import url('./static/css/index.css');
@import url('http://at.alicdn.com/t/font_727513_dnmah4aeq0r.css');
@import url('http://at.alicdn.com/t/font_724075_gi0jvv33xtu.css');

</style>