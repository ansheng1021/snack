<template>
    <div>
        <indexheader title="支付"></indexheader>

        <div class="content">
            <div class="mwq-alert">
                <div class="mwq-juOne"></div>
                <div class="mwq-text">需支付&nbsp;<span>￥{{price}}</span>&nbsp;元定金</div>
                <div class="mwq-juTwo"></div>
            </div>
            <div class="mwq-line"></div>
            <div class="mwq-content">
                <div class="mwq-left">
                    <div class="mwq-pict">
                        <img src="./static/img/qianbao.png" alt="">
                    </div>
                    <div class="mwq-name">我的钱包</div>
                </div>
                <div class="mwq-right">
                    <div class="mwq-wenzi">
                        余额 <span>{{list.money}}</span> 元
                    </div>
                    <div class="mwq-yuan">
                        <div class="mwq-circle">
                            <div class="mwq-smallCircle hot"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mwq-content abc">
                <div class="mwq-left">
                    <div class="mwq-pict azx">
                        <img src="./static/img/wechat.png" alt="">
                    </div>
                    <div class="mwq-name">微信支付</div>
                </div>
                <div class="mwq-right">
                    <div class="mwq-wenzi">
                        <span></span>
                    </div>
                    <div class="mwq-yuan">
                        <div class="mwq-circle adc">
                            <div class="mwq-smallCircle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="sucesspay"><div class="mwq-surePay">确认支付</div></div>
        </div>
    </div>
</template>

<script>
    import indexheader from '../../generally/indexheader'
    export default {
        data(){
          return{
              list:'',
              price:0,
              uid:0
          }
        },
        name: "pay",
        methods:{
          sucesspay(){
              if (this.list.money>this.price){
                  let money=this.list.money-this.price
                  let gold=Math.floor(this.price/10)
                  this.axios.get('/user/person/givemoney?uid='+this.uid+'&money='+money+'&gold='+gold).then(res=>{
                      if(res.data=='success'){
                          this.$router.push({name:'successpay',query:{price:this.price}})
                      }else{
                          this.$message.error('支付失败')
                      }
                  })


              } else{
                  this.$message.error('余额不足')
                  this.$router.push({name:'cz',query:{uid:this.uid}})
              }

          },
            getdata(){
                this.axios.get('/user/person/getperson?uid='+this.uid).then(res=>{
                    this.list=res.data[0]
                })
            }
        },
        mounted(){
            this.uid=localStorage.userlogin
            this.price=this.$route.query.price
            this.getdata()
        },
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/pay.css');
    @import url('./static/css/common.css');
</style>