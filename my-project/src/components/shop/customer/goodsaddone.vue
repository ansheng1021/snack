<template>
    <div style="margin: 20px 0 0 40px">
        <div class="choice">
            您当前选择的商品类别是：
            <span>洗衣</span>
            <i class="el-icon-caret-right"></i>
            <span>羽绒服清洗</span>
        </div>
        <div class="sort">
            <div class="sortLeft">
                <div class="title">
                    <div class="dot1"></div>
                    <h1>请选择<span>第一级类别</span>
                    </h1>
                </div>
                <el-radio-group v-model="radio">
                    <div class="list">
                        <el-radio v-for="item in list" :label="item.cid" @change="change" :key="item.cid">{{item.cname}}</el-radio>

                    </div>
                </el-radio-group>

            </div>
            <div class="sortRight">
                <div class="title">
                    <div class="dot1"></div>
                    <h1>请选择<span>第二级类别</span>
                    </h1>
                </div>
                <el-radio-group v-model="radio2">
                <div class="list">
                    <el-radio v-for="item in list2" :label="item.cid" :key="item.cid" @change="change2">{{item.cname}}</el-radio>

                </div>
                </el-radio-group>
            </div>
        </div>






    </div>
    
</template>

<script>
    export default {
        name: "goodsaddone",
        data(){
            return{
                list:[],
                radio:'',
                radio2:'',
                list2:[],
                parentname:'',
                name:''
            }
        },
        methods:{
            getdata(){
                this.axios.get('/shop/goods/categoryquery').then(res=>{
                    this.list=res.data;

                })
            },
            change(){
               this.axios.get('/shop/goods/categoryquery2?pid='+this.radio).then(res=>{
                   this.list2=res.data;
                   this.parentname=(this.list.filter(ele=>ele.cid==this.radio))[0].cname;
                   console.log(this.parentname);
               })
               },
            change2(){
                this.name=(this.list2.filter(ele=>ele.cid==this.radio2))[0].cname;
                console.log(this.name);
            }

        },
        mounted(){
            this.getdata();
        },
        beforeRouteLeave (to, from, next) {
            let name=this.parentname+'-'+this.name
            let h1=this.radio;
            let h2=this.radio2;
            localStorage.goods=JSON.stringify({goodscateaty:name,h1:h1,h2:h2})
            next();
        }

    }
</script>

<style scoped>
    .title{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 24px 0;
    }
    .title span{
        font-size: 12px;
        color: #000;
        margin-right: 10px;
    }
    .title p{
        font-size: 12px;
        color: #33d98e;
        margin-right: 10px;
    }
    .dot{
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #33d98e;
        margin-right: 10px;
    }
    .choice{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        font-size: 12px;
        color: #B2BAC1;
        margin: 10px 0;
    }
    .choice span{
        font-size: 12px;
        color: #70808C;
    }
    .choice i{
        color: #657786;
        font-size: 6px;
    }
    .router-link-active{
        font-size: 16px;
        color: #fff;
        text-decoration: none;
    }
    .sort{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }
    .dot1{
        width: 7px;
        height: 4px;
        border-radius: 50%;
        background-color: #33d98e;
        margin-right: 10px;
    }
    .sort h1{
        font-size: 16px;
    }
    .sort span{
        font-size: 16px;
        color: #30a3fe;
    }
    .list{
        padding-top: 20px;
        width: 300px;
        height: 200px;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        background: #f3faff;
        margin-right: 20px;
    }
    .el-radio-group{
        width: 300px;
        height: 200px;
        background: #f3faff;
        padding-top: 20px;
        box-sizing: border-box;

        margin-right: 40px;
        overflow: hidden;
    }
    .el-radio{
        margin-left: 30px!important;
        margin-bottom: 10px!important;
    }
    /*.list::-webkit-scrollbar {!*滚动条整体样式*!*/
        /*width: 10px;     !*高宽分别对应横竖滚动条的尺寸*!*/
    /*}*/
    /*.list::-webkit-scrollbar-thumb {!*滚动条里面小方块*!*/
        /*height: 5px;*/
        /*width: 5px;*/
        /*background: red;*/
    /*}*/

    /*.list::-webkit-scrollbar-track {!*滚动条里面轨道*!*/
       /*background: #a5d7ff;*/
    /*}*/
</style>