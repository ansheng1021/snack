<template>
    <div>
        <indexheader title="个人中心"></indexheader>
        <div class="gerengxingxi">
            <router-link :to="{name:'personinfor'}">
                <div class="yuan">
                    <img :src=list.sculpture alt="">
                </div>
            </router-link>
                <div class="zi">
                <h6>{{list.username}}</h6>
                <div class="nei">
                    <img src="./static/img/huangguan1.png" alt="" style="width: 0.3rem; height: 0.3rem; background-size: cover;display: block;">
                    <span>黄金会员</span>
                </div>
            </div>
            <router-link :to="{name:'personinfor'}">
                <p style="font-weight: bold">去升级</p>
                <div class="dian" style="border-radius: 50%;"></div>
                <div class="dian" style="color: #3bacfe;opacity: 0.5;border-radius: 50%;" ></div>
                <div class="dian" style="background: #3bacfe;opacity: 0.3;border-radius: 50%;"></div>
            </router-link>
        </div>
        <div class="xingxi">
            <div class="yh">
                <router-link :to="{name:'wallet',query:{uid:list.uid}}" class="shuzi">
            <span class="one">
                {{list.money}}
            </span>
                    <p>余额</p>
                </router-link>
            </div>
            <div class="yh">
                <router-link :to="{name:'coupon'}" class="shuzi">
                 <span class="two">
                       06
                     </span>
                    <p>优惠劵</p>
                </router-link>
            </div>
            <div class="yh">
                <router-link :to="{name:'goldcoin',query:{uid:list.uid}}" class="shuzi">
            <span class="three">
               {{list.gold}}
            </span>
                    <p>金币</p>
                </router-link>
            </div>
        </div>
        <div class="bottom">
            <div class="wai">
                <router-link :to="{name:'wallet',query:{uid:list.uid}}" class="ne">
                    <div class="kuai"></div>
                    <span>钱包</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link :to="{name:'shopcar'}" class="ne">
                    <div class="kuai"></div>
                    <span>购物车</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link :to="{name:'commonaddress'}" class="ne">
                    <div class="kuai"></div>
                    <span>常用地址</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link :to="{name:'servercenter'}" class="ne">
                    <div class="kuai"></div>
                    <span>客服中心</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link :to="{name:'help'}" class="ne">
                    <div class="kuai"></div>
                    <span>帮助</span>
                </router-link>
            </div>
            <div class="wai">
                <router-link :to="{name:'aboutme'}" class="ne">
                    <div class="kuai"></div>
                    <span>关于我们</span>
                </router-link>
            </div>
            <div class="wai">
                <a class="ne">
                    <div class="kuai"></div>
                    <span>监督热线</span>
                    <h6>400-789-2211</h6>
                </a>
            </div>
        </div>
        <tab></tab>
    </div>
</template>

<script>
    import indexheader from '../../generally/indexheader'
    import tab from '../../generally/tab'

    export default {
        name: "personcenter",
        data(){
         return{
             list:'',
             uid:0
         }
        },
        methods:{
            getdata(){
                this.axios.get('/user/person/getperson?uid='+this.uid).then(res=>{
                    this.list=res.data[0]
                })
            }
        },
        mounted(){
          this.uid=localStorage.userlogin
            this.getdata();
        },
        components:{
            tab,
            indexheader
    }
    }
</script>

<style scoped>
    @import url("./static/css/common.css");
    @import url("./static/css/jzl-gerenzhongxin.css");

</style>