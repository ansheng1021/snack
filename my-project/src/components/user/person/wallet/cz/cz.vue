<template>
    <div>
        <indexheader title="钱包"></indexheader>
        <ul class="shdpriceList">
            <li class="price" v-for="(item,index) in list" v-bind:key="item.id" @click="getselect(item.id,index)">
                <div class="priceTop" :class="{select:num==item.id}">
                    <span class="text1" :class="{hot1:num==item.id}">{{item.val}}</span>
                    <span class="text2" :class="{hot2:num==item.id}">元</span>
                </div>
                <div class="priceBottom" :class="{select:num==item.id}">
            <span class="text3" :class="{hot3:num==item.id}">售价
                <span class="text4" :class="{hot4:num==item.id}">{{item.price}}</span>元
            </span>
                </div>
            </li>
        </ul>
        <div class="shdchongzhi">
            <input type="text" class="defined" placeholder="自定义金额" v-model="number">
            <a>
                <button class="confirm" type="submit" @click="submit">确认充值</button>
            </a>
        </div>
    </div>
</template>

<script>
    import indexheader from '../../../../generally/indexheader'
    export default {
        name: "cz",
        data(){
            return{
                list:[
                    {id:0,val:50,price:49.8},
                    {id:1,val:100,price:99.8},
                    {id:2,val:200,price:198.8},
                    {id:3,val:300,price:298.8},
                    {id:4,val:500,price:498.8},
                    {id:5,val:1000,price:997.8}
                ],
                num:1,
                number:'',
                uid:0
            }
        },
        methods:{
            getselect(val,val2){
                this.num=val
            },
            submit(){
               if (this.number){
                   this.$router.push({name:'qrcz',query:{money:this.number,uid:this.uid}})


               }else{
                   let number=this.list[this.num].val
                   this.$router.push({name:'qrcz',query:{money:number,uid:this.uid}})

               }
            },
        },
        mounted(){
          this.uid=this.$route.query.uid
        },
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/shd-wallet.css');
    @import url('./static/css/common.css');
</style>