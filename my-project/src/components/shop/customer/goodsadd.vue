<template>
    <div>
        <my-header index="2"></my-header>
        <left index="1"></left>
        <div class="con" style="margin-left: 40px">
        <div class="title">
            <div class="infos">商品管理</div>
            <div class="bot"></div>
            <div class="infos">商品列表</div>
            <div class="bot"></div>
            <div class="infos" style="color: #30d366;font-weight: bold">添加商品</div>
        </div>
        <div>
            <el-steps :active="active" finish-status="success" simple >
                <el-step title="选择商品分类"></el-step>
                <el-step title="填写商品信息"></el-step>
                <el-step title="选择商品关联"></el-step>
            </el-steps>
            <div>
                <router-view></router-view>
            </div>
            <el-button v-if="flag" style="margin-top: 12px;background:rgb(0,186,255);color: white" @click="next" >下一步,填写商品信息</el-button>
            <el-button v-else style="margin-top: 12px;background:rgb(0,186,255);color: white" @click="onsubmit" >提交</el-button>
        </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from '../customer/generl/sjheader'
    import left from '../customer/generl/slide'
    export default {
        name: "goodsadd",
        data() {
            return {
                active: 1,
                flag:true,
            }
        },
        methods: {
            next() {
                if (this.active++ == 2) {this.active = 3; this.flag=false}
                this.$router.push({name:"goodsaddsteps"+this.active});
            },
            onsubmit(){
                let sid=localStorage.sid;
                let goods=JSON.parse(localStorage.goods)
                let s={sid:sid}
                goods=Object.assign(goods,s)
                this.axios.post('/shop/goods/goodsadd',goods).then(res=>{
                    if(res.data=="success"){
                        this.$message({
                            message:'添加成功',
                            type:'success'
                        })
                        this.$router.push({name:'shoplist'})
                    }
                    else{
                        this.$message({
                            message:'添加失败',
                            type:'error'
                        })
                        this.$router.push({name:'goodsaddone'})
                    }
                })
            }
        },
        components:{
            MyHeader,
            left
        }
    }
</script>

<style scoped>
    .con{
        position: absolute;
        left: 200px;
        top: 80px;
    }
    .title{
        display: flex;
        height: 60px;
        width:1000px;
        padding:21px 0;
        box-sizing: border-box;
    }
    .bot{
        width: 5px;
        height: 5px;
        background-color: #3db0ff;
        box-shadow: 0px 1px 2px 0px rgba(61, 176, 255, 0.6);
        margin-top:5px;
        margin-right: 10px;
    }
    .infos{
        width: auto;
        height: 18px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #516676;
        margin-right: 20px;
    }
</style>