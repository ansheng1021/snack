<template>
    <div>
        <indexheader title="商品服务详情"></indexheader>
        <!--图-->
        <div class="wb-pic">
            <img :src=goodsinfor.goodsimage alt="">
        </div>
        <!--详情-->
        <div class="wb-xiangqin">
            <div class="wb-tu">
                <img :src=goodsinfor.goodsthumb  alt="">
            </div>
            <div class="wb-money"><p>￥{{goodsinfor.goodsprice}}</p></div>
            <ul class="wb-guige">
                <li class="guige">
                    <div class="wb-yuan1"></div>
                    <ol>规格</ol>
                </li>
                <li class="wb-cate">{{goodsinfor.goodscateaty}}</li>
            </ul>
            <ul class="wb-shuliang">
                <li class="shuliang">
                    <div class="wb-yuan2"></div>
                    <ol>数量</ol>
                </li>
                <li class="wb-tianjia">
                    <div class="wb wb-jian"  @click="sub">
                        <img src="./static/img/Tseventeen3.png" alt="">
                    </div>
                    <span>{{num}}</span>
                    <div class="wb wb-jia" @click="add">
                        <img src="./static/img/Tseventeen4.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <!--底部-->
        <div class="wb-di">
            <div class="wb-p p1" @click="getshopcar">加入购物车</div>
            <div class="wb-p p2" @click="getorder">立即下单</div>
        </div>
    </div>
</template>

<script>
    import indexheader from "../../../generally/indexheader"
    export default {
        data(){
            return{
              goodsinfor:'',
                gid:'',
                num:1,
            }
        },
        name: "serverdetail",
        components:{
            indexheader
        },
        methods:{
            getorder(){
                if (localStorage.userlogin){
                    this.$router.push({name:'order',query:{gid:this.gid,num:this.num}})
                }else {
                    this.$router.push({name:'indexlogin'})


                }
            },
            getdata(){
                this.axios.get('/user/index/getgoodsone?gid='+this.gid).then(res=>{
                    this.goodsinfor=res.data;
                })
            },
            getshopcar(){
                let car=localStorage.getItem('car')?JSON.parse(localStorage.getItem('car')):[];
                let item=car.filter(ele=>ele.gid==this.gid);
                if (item.length){
                    let num1=item[0].number+=this.num
                    item[0].price= num1 * this.goodsinfor.goodsprice;
                }else{
                    let obj={gid:this.goodsinfor.gid,name:this.goodsinfor.goodsname,number:this.num,price:this.num*this.goodsinfor.goodsprice,img:this.goodsinfor.goodsthumb,oneprice:this.goodsinfor.goodsprice,sid:this.goodsinfor.sid,active:0}
                    car.push(obj);
                }
                localStorage.setItem('car',JSON.stringify(car));
                this.$router.push({name:'shopcar'})
            },
            add(){

               this.num++
            },
            sub(){

                if (this.num>1){
                    this.num--
                }else{
                    this.num=1
                }

            }

        },
        mounted(){
            this.gid=this.$route.query.gid
            this.getdata()
        }
    }
</script>

<style scoped>
    @import url('./static/css/Tseventeen.css');
</style>