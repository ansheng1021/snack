<template>
    <div>
        <indexheader title="填写订单"></indexheader>
        <!--收货地址-->
        <div class="wb-address" v-if="id==0">
            <h3>选择收货地址</h3>
            <div class="enter" @click="select">
                <img src="./static/img/xiayibu.png" alt="">
            </div>
        </div>
        <div class="box" v-else>
            <div class="shang">
                <b class="name">{{address.name}}</b>
                <b class="tel">{{address.phone}}</b>
                <img src="./static/img/qianjin.png" alt="">
            </div>
            <p class="address">{{address.address}}</p>
        </div>
        <ul>
            <li class="wb-shop">
                <div class="wb-left">
                    <img :src=list.goodsthumb alt="">
                </div>
                <div class="wb-right">
                    <div class="wb-Rone"><h2>{{list.goodsname}}</h2></div>
                    <div class="wb-Rtwo">

                    </div>
                    <div class="wb-Rthree">

                    </div>
                    <div class="wb-Rfour">
                        <div class="wb-zuo">
                            <div class="wb-yuan2"></div>
                            <p>￥{{list.goodsprice}}.00</p>
                        </div>
                        <div class="wb-you">
                            <div class="wb wb-jian" @click="sub">
                                <img src="./static/img/Tseventeen3.png" alt="">
                            </div>
                            <span>{{num}}</span>
                            <div class="wb wb-jia" @click="add">
                                <img src="./static/img/Tseventeen4.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="wb-list">
            <li class="one">
                <div class="wb-lizuo">
                    <div class="wb-yuan1"></div>
                    <h3>优惠券</h3>
                </div>
                <div class="wb-liyou"  @click="editclass">
                    <h4>{{content}}</h4>
                    <div class="enter">
                        <img src="./static/img/xiayibu.png" alt="">
                    </div>
                </div>
            </li>
            <li>
                <div class="wb-lizuo">
                    <div class="wb-yuan1"></div>
                    <h3>金币</h3>
                </div>
                <div class="wb-liyou">
                    <h4>无可用金币</h4>
                </div>
            </li>
            <li>
                <div class="wb-lizuo">
                    <div class="wb-yuan1"></div>
                    <h3>发票信息</h3>
                </div>
                <div class="wb-liyou">
                    <h4>不开发票</h4>
                    <div class="enter">
                        <img src="./static/img/xiayibu.png" alt="">
                    </div>
                </div>
            </li>
            <li>
                <div class="wb-lizuo">
                    <div class="wb-yuan1"></div>
                    <h3>备注</h3>
                    <h4>&nbsp&nbsp选填：请输入备注（25字以内）</h4>
                </div>
                <div class="wb-liyou">
                    <div class="enter">
                        <img src="./static/img/xiayibu.png" alt="">
                    </div>
                </div>
            </li>
            <!--拍照-->
            <li>
                <img src="./static/img/Ttwenty-one2.png" alt="">
                <input class="wb-miaoshu" type="text" placeholder="添加文字描述">
            </li>
            <li>
                <div class="wb-lizuo">
                    <div class="wb-yuan1"></div>
                    <h3>商品金额</h3>
                </div>
                <div class="wb-liyou">
                    <h4>￥{{list.goodsprice}}.00</h4>
                </div>
            </li>
            <li>
                <div class="wb-lizuo">
                    <div class="wb-yuan1"></div>
                    <h3>运费</h3>
                </div>
                <div class="wb-liyou">
                    <h4>￥0.00</h4>
                </div>
            </li>
        </ul>
        <div class="wb-di">
            <div class="diL">
                <p>合计：</p>
                <h3>￥{{totalprice}}</h3>
            </div>
            <div class="diR" @click="pay">
                <p>立即付款</p>
            </div>
        </div>

        <!--遮罩-->
        <div class="zhezhao" :class="{hot:flag}">
            <!--优惠-->
            <div class="youhui" :class="{hot:flag}">
                <div class="tou">
                    <p>店铺优惠</p>
                    <i class="iconfont icon-guanbi"></i>
                </div>
                <ul>
                    <li @click="select1">
                        <div class="wb-yuan1"></div>
                        <h4>满100减20元</h4>
                        <div class="yuan" :class="{actvie:index == 1}">
                            <img src="./static/img/yuan.png" alt="">
                        </div>
                    </li>
                    <li @click="select2">
                        <div class="wb-yuan1"></div>
                        <h4>满100减10元</h4>
                        <div class="yuan" :class="{actvie:index == 2}">
                            <img src="./static/img/yuan.png" alt="">
                        </div>
                    </li>
                    <li @click="select3">
                        <div class="wb-yuan1"></div>
                        <h4>不使用优惠券</h4>
                        <div class="yuan" :class="{actvie:index == 3}">
                            <img src="./static/img/yuan.png" alt="">
                        </div>
                    </li>
                </ul>
                <div class="guanbi" @click="editclass">
                    <div class="anniu">关闭</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import indexheader from '../../generally/indexheader'
    export default {
        name: "order",
        data(){
            return{
                num:1,
                totalprice:0,
                gid:'',
                index:3,
                content:'无可用优惠券',
                flag:false,
                id:0,
                list:[],
                address:[],
                order:[],
                uid:null
            }
        },
        components:{
            indexheader
        },
        methods:{
            pay(){
                if(this.id==0){
                    this.$message.error('请填写收货地址')
                }else{
                    this.uid=localStorage.userlogin
                    this.order={goodsname:this.list.goodsname,goodsthumb:this.list.goodsthumb,goodsprice:this.list.goodsprice,number:this.num,sid:this.list.sid,gid:this.list.gid,address:this.address.address,phone:this.address.phone,addressname:this.address.name,aid:this.address.id,uid:this.uid,totalprice:this.totalprice};
                    this.axios.post('/user/order/addorder',this.order).then(res=>{
                       if (res.data=='success') {
                           this.$router.push({name:'pay',query:{price:this.totalprice}})
                       }else{
                           this.$message.error('付款失败')
                       }
                    })

                }

            },
            select1(){
                this.index=1
                this.content='满100减20元'
            },
            select2(){
                this.index=2
                this.content='满100减10元'
            },
            select3(){
                this.index=3
                this.content='无可用优惠券'
            },
            editclass(){
              this.flag=!this.flag
            },
            select(){
                this.axios.get('/user/index/getaddress').then(res=>{
                    if (res.data.length){
                        this.$router.push({name:'commonaddress',query:{gid:this.gid,num:this.num}})
                    } else{
                        this.$router.push({name:'newaddress'})
                    }
                })
            },
            getoneaddress(){
                this.axios.get('/user/order/getoneaddress?id='+this.id).then(res=>{
                    this.address=res.data[0];
                })
            },
            getdata(){
                this.axios.get('/user/order/getdata?gid='+this.gid).then(res=>{
                   this.list=res.data[0];
                  this.getprice()
                })
            },
            sub(){
               this.num--
                while (this.num<1){
                   this.num=1
                }
            },
            add(){
                this.num++
            },
            getprice(){
                this.totalprice=this.num*(this.list.goodsprice)
                return this.totalprice

            }
        },
        computed:{

        },
       watch:{
           num(val){
               this.totalprice=val*(this.list.goodsprice)
           }
       },
        mounted(){
            this.gid=this.$route.query.gid
            this.id=this.$route.query.id?this.$route.query.id:0
            this.num=this.$route.query.num?this.$route.query.num:1
            this.getdata();
            this.getoneaddress();
        }

    }
</script>

<style scoped>

    @import url("./static/css/common.css");
    @import url("./static/css/Ttwenty-one.css");
</style>