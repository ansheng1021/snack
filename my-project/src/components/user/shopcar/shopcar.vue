<template>
    <div>
        <indexheader title="购物车"></indexheader>

        <!--内容-->
        <div class="scroll" ref="Bscroll">
               <section class="cyx-contain" style="z-index: 10">
            <div class="cyx-container" v-for="(item,index) in cars" :key="item.gid">
                <ul class="cyx-items">
                    <li class="cyx-top">
                        <div class="cyx-left">
                            <div class="cyx-choose hot"></div>
                            <span class="cyx-title">宅快修</span>
                            <img class="cyx-next" src="./static/img/next.png" alt="">
                        </div>

                        <img  class="cyx-delete" src="./static/img/delete.png" alt="" @click="deletes(index)">
                    </li>
                    <li class="cyx-shop">
                        <div class="cyx-left" >
                            <div class="cyx-choose" :class="{hot:item.active}" @click="setone(index)"></div>
                            <div class="cyx-picture">
                                <img :src=item.img alt="">
                            </div>
                            <div class="cyx-desc">
                                <span class="cyx-name">{{item.name}}</span>
                                <span class="cyx-price">￥{{item.oneprice}}</span>
                            </div>
                        </div>
                        <div class="cyx-right">
                            <img src="./static/img/sub.png" alt="" class="cyx-sub" @click="sub(index)">
                            <span class="cyx-number">{{item.number}}</span>
                            <img src="./static/img/add.png" alt="" class="cyx-add"  @click="add(index)">
                        </div>
                    </li>
                    <li class="cyx-bottom">
                        <div class="cyx-left">
                            <span class="cyx-totalPrice">合计</span>
                            <span class="cyx-mao">:</span>
                            <span class="cyx-num">￥{{item.price}}</span>
                        </div>
                        <button class="cyx-btn" type="submit" @click="getorder(item.gid,item.active,item.number,index)">去下单</button>
                    </li>
                </ul>
            </div>
        </section>
        </div>
        <!--底部-->
        <footer class="cyx-footer">
            <div class="cyx-container">
                <section class="cyx-top" style="box-sizing: border-box;padding: 0 0.24rem">
                    <div class="cyx-choose" :class="{hot:select}" @click="selectall"></div>
                    <span class="cyx-title">全选</span>
                </section>
                <section class="cyx-bottom" style="box-sizing: border-box;padding: 0 0.24rem">
                    <div class="cyx-leftBox">
                        <div class="cyx-allPrice">
                            <img src="./static/img/allprice.png" alt="" class="cyx-ap">
                            <span class="cyx-heji">合计</span>
                            <span class="cyx-mao">:</span>
                            <span class="cyx-num">￥{{getzj}}</span>
                        </div>
                        <div class="cyx-extraPrice">
                            <img src="./static/img/extraprice.png" alt="" class="cyx-ep">
                            <span class="cyx-yunfei">运费￥20</span>
                            <span class="cyx-youhui">已优惠￥20</span>
                        </div>
                    </div>
                    <button class="cyx-pay" type="submit" @click="Settlement">结算</button>
                </section>
            </div>
        </footer>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import indexheader from '../../generally/indexheader'
    export default {
        name: "shopcar",
        data(){
          return{
              select:false,
             cars:[],
          }
        },
        methods:{
            Settlement(){
               if (this.select){
                   this.$router.push({name:'fileorder'})
               }else{
                   this.$message.error('请选中所有商品')
               }

            },
            initBscroll(){
                this.scroll = new BScroll(this.$refs.Bscroll,this.options)
            },
            getorder(val,val1,val2,val3){

                if (val1==true){
                   if (localStorage.userlogin){
                       this.deletes(val3)


                       this.$router.push({name:'order',query:{gid:val,num:val2}})
                   }else {
                       this.$router.push({name:'indexlogin'})
                   }
               } else{
                   this.$message.error('请选择商品')
               }


            },
            selectall(){
                if (this.getselectone()){
                    if (this.getselectall()){
                        for(let i=0;i<this.cars.length;i++){
                            this.cars[i].active=false
                        }
                    } else{
                        for(let i=0;i<this.cars.length;i++){
                            this.cars[i].active=true
                        }
                    }
                }else {
                    for(let i=0;i<this.cars.length;i++){
                        this.cars[i].active=true
                    }
                }

                localStorage.car=JSON.stringify(this.cars)
                this.select=this.getselectall()
            },
            setone(val){
                this.cars[val].active=!this.cars[val].active
                localStorage.car=JSON.stringify(this.cars)
                this.select=this.getselectall()
            },
            getdata(){
                this.cars=JSON.parse(localStorage.car)
            },
            add(val){
             let num=++this.cars[val].number
                this.cars[val].price=num*this.cars[val].oneprice
                localStorage.car=JSON.stringify(this.cars)
            },
            sub(val){
                if(this.cars[val].number>1){
                   let num=--this.cars[val].number
                   this.cars[val].price=num*this.cars[val].oneprice
                   localStorage.car=JSON.stringify(this.cars)

               }else if(this.cars[val].number == 2){
                   return
               }
            },
            deletes(val){
                console.log(val);
                let gid=this.cars[val].gid;
                this.cars=this.cars.filter(ele => ele.gid != gid);
                localStorage.car=JSON.stringify(this.cars)
                this.cars.forEach(ele=>{
                    this.zj+=ele.price*1;
                })
            },
            getselectall(){
                var num=[]
                for (var i=0;i<this.cars.length;i++){
                    num.push({num:this.cars[i].active})
                }
                return num.every(function (v) {
                    return v.num == true
                })
            },

            getselectone(){
                var num=[]
                for (var i=0;i<this.cars.length;i++){
                    num.push({num:this.cars[i].active})
                }
                return num.some(function (v) {
                    return v.num == true
                })
            }

        },
        watch:{

        },
        mounted(){

           this.getdata();

            this.select=this.getselectall()
        },
        computed:{

            getzj(){
                var num=0;
                this.cars.forEach(ele=>{
                    if (ele.active==true){
                        num+=ele.price*1;
                    }
                })
               return num;
            }
        },
        components:{
            indexheader
        }

    }
</script>

<style scoped>
    @import url('./static/css/cyx-gouwuche.css');
    @import url('./static/css/common.css');
    .scroll{
        width: 100%;
        height: 10.2rem;
        overflow: hidden;
    }
</style>