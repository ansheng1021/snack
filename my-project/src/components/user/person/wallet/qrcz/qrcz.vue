<template>
    <div>
        <indexheader title="确认充值"></indexheader>
        <section class="chongzhiGroup">
            <div class="moneyContent">
                <div class="nxrYuan"></div>
                <div class="moneyText">
                    <span>充值</span><span class="moneyShu">￥{{money}}</span><span>元</span>
                </div>
                <div class="nxrYuan"></div>
            </div>
        </section>
        <div class="hengXian"></div>
        <section class="nxrWeixin">
            <div class="nxrLeft">
                <img src="./static/img/nxrWeixin.jpg" alt="">
                <span>微信支付</span>
            </div>
            <div class="nxrRight">
                <img src="./static/img/nxrYuandian.jpg" alt="">
            </div>
        </section>
        <div class="weiConfirm" @click="submit">确认支付</div>
    </div>
</template>

<script>
    import indexheader from '../../../../generally/indexheader'
    export default {
        data(){
          return{
              uid:0,
              money:0
          }

        },
        name: "qrcz",
        components:{
            indexheader
        },
        methods:{
            submit(){
                this.axios.get('/user/person/cz?money='+this.money+'&uid='+this.uid).then(res=>{
                        if (res.data=='success'){
                            this.$message.success('充值成功')
                            this.$router.push({name:'wallet',query:{uid:this.uid}})
                        } else{
                            this.$message.error('充值失败')
                        }
                    })

             },


    },
        mounted(){
            this.uid=this.$route.query.uid
            this.money=this.$route.query.money

        }

    }
</script>

<style scoped>
    @import url('./static/css/nxrQueRenChongZhi.css');
</style>