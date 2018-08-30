<template>
    <div>
        <indexheader title="添加地址"></indexheader>
        <div class="content">
            <form action="">
                <div class="mwq-box">
                    <div class="mwq-title">
                        <div class="mwq-juxing"></div>
                        <div class="mwq-wenzi">联系人</div>
                    </div>
                    <input class="mwq-textarea" placeholder="姓名" v-model="list.name">
                </div>
                <div class="mwq-box">
                    <div class="mwq-title">
                        <div class="mwq-juxing"></div>
                        <div class="mwq-wenzi">联系方式</div>
                    </div>
                    <input class="mwq-textarea" placeholder="电话" v-model="list.phone">
                </div>
                <div class="mwq-box">
                    <div class="mwq-title">
                        <div class="mwq-juxing"></div>
                        <div class="mwq-wenzi">服务地址</div>
                        <router-link :to="{name:'selectaddress'}" class="mwq-enter" >
                            <img src="./static/img/enter.png" alt="">
                        </router-link>
                    </div>
                    <input class="mwq-textarea" v-model="list.address">
                </div>
                <div @click="onsubmit">
                    <input type="submit" class="mwq-reserve"  value="保存">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import indexheader from '../../../../generally/indexheader'
    export default {
        name: "addaddress",
        data(){
            return{
                list:{
                    name:'',
                    phone:'',
                    address:'',
                    uid:''
                }

            }
        },
        methods:{
            onsubmit(){
                this.axios.post('/user/index/addaddress',this.list).then(res=>{
                    console.log(res.data);
                    if (res.data=='success'){
                        this.$router.push({name:'commonaddress'})
                    } else{
                        this.$message({
                            type:error,
                            message:'添加失败'
                        })
                    }
                })
            }
        },
        mounted(){
           this.list.uid=localStorage.sid
        },
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/addAddress.css');
    @import url('../../static/css/common.css');
</style>