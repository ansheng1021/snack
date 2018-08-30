<template>
    <div>
      <indexheader title="钱包"></indexheader>
        <section class="nxrQianbao">
            <div class="nxrPic"></div>
            <div class="moneyGroup">
                <div class="moneyContent">
                    <div class="nxrYuan"></div>
                    <div class="moneyText">余额
                        <span class="moneyShu">{{list.money}}</span>
                        元
                    </div>
                    <div class="nxrYuan"></div>
                </div>
            </div>
        </section>
        <div class="hengXian"></div>
        <router-link :to="{name:'cz',query:{uid:list.uid}}">
            <div class="nxrConfirm">去充值</div>
        </router-link>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "wallet",
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
            this.uid=this.$route.query.uid
            this.getdata()
        },
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url("./static/css/nxrQianBao.css");
    @import url("./static/css/common.css");

</style>