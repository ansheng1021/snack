<template>
    <div>
        <indexheader title="常用地址"></indexheader>
        <div class="content">
            <scroll class="bag-scroll">
                <div class="sk-bag-scroll">
                    <div class="mwq-model" v-for="item in list">
                         <div @click="selectone(item.id,item.flag)">
                            <div class="mwq-adressText">
                        <div class="mwq-info">
                            <div class="mwq-name">{{item.name}}</div>
                            <div class="mwq-phoneNumber">{{item.phone}}</div>
                        </div>
                        <div class="mwq-adress">{{item.address}}</div>
                    </div>
                            <div class="mwq-label">
                        <div class="mwq-left">
                            <div class="mwq-icon" @click="editflag(item.id,item.flag)">
                                <img src="./static/img/gouxuan.png" alt="" v-if="item.flag">
                                <img src="" alt="" v-else>
                            </div>
                            <div class="mwq-defaultAdress">默认地址</div>
                        </div>
                        <div class="mwq-right">
                            <img src="./static/img/delete.png" alt="" class="mwq-img1" @click="deletes(item.id)">
                            <img src="./static/img/xiugai.png" alt="" class="mwq-img2">
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </scroll>
            <router-link :to="{name:'addaddress'}"><div class="mwq-newAddadress">新增地址</div></router-link>
        </div>
    </div>
</template>

<script>
    import scroll from '../../../../generally/scroll'
    import indexheader from '../../../../generally/indexheader'
    export default {
        name: "commonaddress",
        data(){
            return{
                list:[],
                gid:'',
                num:''
            }
        },
        methods:{
            selectone(val,val1){
              if (val1==1){
                this.$router.push({name:'order',query:{gid:this.gid,id:val,num:this.num}})
              }else{
                this.editflag(val,val1)
                  this.$router.push({name:'order',query:{gid:this.gid,id:val,num:this.num}})
              }

            },
            getdata(){
                this.axios.get('/user/index/getaddress').then(res=>{

                    this.list=res.data;
                })
            },
            deletes(val){
               this.axios.get('/user/index/deletsaddress?id='+val).then(res=>{
                   console.log(res.data);
                   if (res.data=="success") {
                      this.getdata()
                      this.$message.success('登陆成功')
                  }else{
                      this.$message.error('登陆失败')
                  }

               })
            },
            editflag(val,val1){
                this.axios.get('/user/index/updateaddress?id='+val+'&flag='+val1).then(res=>{
                    if (res.data=="success") {
                        this.getdata()
                    }else{
                        this.$message.error('修改失败')
                    }

                })
            }
        },
        mounted(){
            this.gid=this.$route.query.gid;
            this.num=this.$route.query.num;
           this.getdata();
        },
        components:{
            indexheader,
            scroll
        }
    }
</script>

<style scoped>
    @import url("./static/css/addressContent.css");
    .bag-scroll{
        width: 100%;
        height: 11rem;
        overflow: hidden;
    }
</style>