<template>
    <div>

     <indexheader title="支付成功"></indexheader>
        <section class="wsq-pay">
        <img src="./static/img/zhifuicon.png" height="61" width="75"/>
        <div class="wsq-lineOne">
            <div class="wsq-zs"></div>
            <p>成功支付<span>{{price}}</span>元定金</p>
            <div class="wsq-zs"></div>
        </div>
        <div class="wsq-lineTwo">
            <p>送您<span>{{num}}</span>金币</p>
        </div>
        <section class="wsq-btn">
            <div class="wsq-left"><router-link :to="{name:'orderlist'}">查看订单</router-link></div>
            <div class="wsq-right"><router-link :to="{name:'/'}">返回首页</router-link></div>
        </section>

    </section>
        <section class="wsq-more">
            <div class="wsq-line">
                <div class="wsq-dot"></div>
                <div class="wsq-text"><span><b>您可能</b></span><span><b>还需要</b></span></div>
            </div>
            <div class="wsq-wrapper">
                <div class="wsq-scroller">
                    <ul>
                        <li>
                            <img src="./static/img/shuilongtou.png" height="94" width="90"/>
                            <div class="wsq-sore">5.0</div>
                            <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                            <h6>ECC01-001Lw</h6>
                            <div class="wsq-sale">
                                <div class="wsq-saleLeft">
                                    <div class="wsq-dot"></div>
                                    <p>已售<span>52</span></p>
                                </div>
                                <div class="wsq-saleRight">
                                    <div class="wsq-dot"></div>
                                    <p>接单率<span>100%</span></p>
                                </div>
                            </div>
                            <div class="wsq-desc">
                                <h5>非常专业</h5>
                                <h5>价格合理</h5>
                            </div>
                        </li>
                        <li>
                            <img src="./static/img/shuilongtou.png" height="94" width="90"/>
                            <div class="wsq-sore">5.0</div>
                            <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                            <h6>ECC01-001Lw</h6>
                            <div class="wsq-sale">
                                <div class="wsq-saleLeft">
                                    <div class="wsq-dot"></div>
                                    <p>已售<span>52</span></p>
                                </div>
                                <div class="wsq-saleRight">
                                    <div class="wsq-dot"></div>
                                    <p>接单率<span>100%</span></p>
                                </div>
                            </div>
                            <div class="wsq-desc">
                                <h5>非常专业</h5>
                                <h5>价格合理</h5>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        data(){
          return{
              price:0,
              num:0
          }
        },
        methods:{
          getgold(){
              this.num=Math.floor(this.price/10)
          }
        },
        name: "sucesspay",
        components:{
            indexheader
        },
        watch:{

        },
        mounted(){
            this.price=this.$route.query.price
            this.getgold();
        }
    }
</script>

<style scoped>
    @import url('./static/css/Tseven.css');
</style>