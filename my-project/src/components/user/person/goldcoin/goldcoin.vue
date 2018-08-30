<template>
    <div>
        <indexheader title="金币"></indexheader>
        <section class="cyx-contain">
            <div class="cyx-picture">
                <div class="cyx-container">
                    <img class="cyx-bg" src="./static/img/main.png" alt="">
                    <div class="cyx-jinbi">
                        <img class="cyx-dot" src="./static/img/dot.png" alt="">
                        <pre> 共 <span class="cyx-num">{{list.gold}}</span> 个 </pre>
                        <img class="cyx-dot" src="./static/img/dot.png" alt="">
                    </div>
                </div>
            </div>
            <div class="cyx-blank"></div>
            <div class="cyx-desc">
                <p class="cyx-xiaofei">消费10元=1金币</p>
                <p class="cyx-xiaofei">10金币可抵1元</p>
            </div>
        </section>
    </div>
</template>

<script>
    import indexheader from '../../../generally/indexheader'
    export default {
        name: "goldcoin",
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
    @import url('../static/css/common.css');
    @import url('./static/css/cyx-jinbi.css');

</style>