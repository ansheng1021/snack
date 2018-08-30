<template>
    <div>
        <indexheader title="填写订单"></indexheader>
        <div class="chouse">选择服务项目</div>
        <div class="list" v-for="(item,index) in cars" v-bind:key="item.gid">
            <div class="tap">
                <span class="onetou">{{item.name}}</span>
                <span class="onenumber">×1</span>
                <span class="oneprice">￥{{item.oneprice}}.00</span>
                <div class="onejian" @click="sub(index)">-</div>
                <span class="onenum">{{item.number}}</span>
                <div class="onejia" @click="add(index)">+</div>
            </div>
            <div class="twoxian"></div>

        </div>
        <!-- upload 上传服务凭证-->
        <div class="upload">
            <div class="pingzheng">上传服务凭证</div>
            <img src="./static/img/photo.png" alt="图片加载失败">
        </div>
        <div class="add">
            <div class="miaoshu">添加文字描述...</div>
        </div>
        <div class="youhui">
            <div class="onedian"></div>
            <span class="oneleft">优惠劵</span>
            <span class="oneright">无可用优惠劵</span>
            <img src="./static/img/back.png" alt="">
        </div>
        <div class="gold">
            <div class="twodian"></div>
            <span class="twoleft">金币</span>
            <span class="tworight">使用40金币抵扣4元</span>
            <img src="./static/img/back.png" alt="">
        </div>
        <!-- footer -->
        <div class="footer">
            <div class="fourdian"></div>
            <span class="heji">合计 :</span>
            <span class="price">￥{{getzj}}</span>
            <div class="pay" @click="pay">立即付款</div>
        </div>
    </div>
</template>

<script>

    import indexheader from '../../../generally/indexheader'
    export default {
        data(){
          return{
              cars:[],
              totalprice:'',
          }
        },
        name: "fileorder",
        methods:{
          getdata(){
              this.cars=JSON.parse(localStorage.car)
          },
            add(val){
                let num=++this.cars[val].number
                this.cars[val].price=num*this.cars[val].oneprice
            },
            sub(val){
                if(this.cars[val].number>1){
                    let num=--this.cars[val].number
                    this.cars[val].price=num*this.cars[val].oneprice

                }else if(this.cars[val].number == 2){
                    return
                }
            },
            pay(){
                this.$router.push({name:'pay',query:{price:this.totalprice}})
            },
        },
        computed:{

            getzj(){
                var num=0;
                this.cars.forEach(ele=>{
                    if (ele.active==true){
                        num+=ele.price*1;
                    }
                })
                this.totalprice=num
                return num;
            }
        },
        mounted(){
            this.getdata();
        },
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/fileOrder.css');
</style>