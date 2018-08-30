<template>
    <div>
        <indexheader title="订单"></indexheader>

        <div class="middle">
            <div class="scroll" ref="Bscroll">
                <div class="bg-scroll">
                    <div v-for="(item,index) in list">
                <div class="x-DR">
                <div class="x-commodity">
                    <img :src=item.goodsthumb alt="" id="x-c-left">
                    <div class="x-c-right">
                        <div id="x-name"><b>{{item.goodsname}}</b></div>
                        <ul id="x-li">
                            <li class="x-blue" id="x-jone"><b>收货人: {{item.addressname}}</b></li>
                            <li class="x-blue" id="x-jtwo">联系电话: {{item.phone}}</li>
                            <li class="x-blue" id="x-jthree">¥{{item.goodsprice}}</li>
                            <li class="x-green" id="x-jfour">×{{item.number}}</li>
                            <li class="x-green" id="x-jfive">实付款：¥{{item.totalprice}}.00</li>
                        </ul>
                    </div>
                </div>
            </div>
                <!--订单结束-->
                <!--按键开始-->
                <div class="x-an">
                <button class="x-anone x-antwo">去退款</button>
                <button class="x-anone x-anthree">确认收货</button>
            </div>
                <!--按键结束-->
            </div>
                </div>
            </div>
        </div>

        <tab></tab>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    import tab from '../../../generally/tab'
    import BScroll from 'better-scroll'
    export default {
        data(){
           return{
               list:[],
               price:0
           }
        },
        name: "orderlist",
        components:{
            indexheader,
            tab
        },
        methods:{
            initBscroll(){
                this.scroll = new BScroll(this.$refs.Bscroll,this.options)
            },
            getdata(){
                this.axios.get('/user/order/getorders').then(res=>{
                    for (let i=0;i<res.data.length;i++) {
                        this.list.unshift(res.data[i])
                    }
                })
            },

    },
        computed:{

        },
        mounted(){
            this.getdata()
            this.initBscroll()
        }
    }
</script>

<style scoped>
@import url('./static/css/order.css');
    .scroll{
        width: 100%;
        height: 10rem;
        overflow: hidden;
    }

</style>