<template>
    <div>
      <headers index="4"></headers>
    <left v-bind:num="num"></left>
    <div class="con">
        <div class="contend">
            <div class="liebiao">待审核列表</div>
            <div class="search">
                <el-form ref="form" label-width="80px">
                    <el-form-item label="名称">
                        <input v-model="search" @keydown.13="searchdata" class="hots"></input>
                    </el-form-item>
                    <el-form-item label="ID">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <!--<el-select placeholder="全部">-->
                            <!--<el-option label="区域一" value="shanghai"></el-option>-->
                            <!--<el-option label="区域二" value="beijing"></el-option>-->
                        <!--</el-select>-->
                    </el-form-item>
                    <el-form-item label="地区">
                        <!--<el-select placeholder="全部">-->
                            <!--<el-option label="区域一" value="shanghai"></el-option>-->
                            <!--<el-option label="区域二" value="beijing"></el-option>-->
                        <!--</el-select>-->
                    </el-form-item>
                    <div class="sousuo"></div>
                </el-form>
            </div>
            <table>
            <el-table
                    :data="table"
                    style="width: 100%">
                <el-table-column
                        prop="sid"
                        label="ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="shopname"
                        label="名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="shopthumb"
                        label="缩略图" >
                    <template  slot-scope="scope">
                        <img :src="scope.row.shopthumb" alt="" style="width: 50px;height: 50px;">
                    </template>
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="审核状态">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <router-link :to="{name:'shsjgl',query:{sid:scope.row.sid,num:1}}"  tag="el-button" >编辑</router-link>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </table>
            <div class="fenge"></div>
            <div class="zhuangtai">
                <img src="../static/greendel.jpg" alt="" style="width: 32px;height: 32px; margin-top: 4px">
                <div class="updata">修改状态</div>
                    <el-form>
                            <!--<el-select placeholder="全部" >-->
                                <!--&lt;!&ndash;<el-option label="区域一" value="shanghai"></el-option>&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-option label="区域二" value="beijing"></el-option>&ndash;&gt;-->
                            <!--</el-select>-->
                    </el-form>

                <a href=""> <div class="enter">确定</div></a>
            </div>
            <div class="page">
                <div class="block">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :page-size="3"
                             layout="total, prev, pager, next"
                            :total=total
                            :current-page.sync="currentPage">
                    </el-pagination>
                </div>
            </div>
            <img src="../static/dibu.png" alt="" class="dibu">
        </div>
    </div>
    </div>
</template>

<script>
    import headers from  '../../generally/header'
    import left from '../gerenl/left'
    export default {
        name: "shgl",
        data() {
            return {
                table: [
                ],
                total:10,
                currentPage:0,
                search:'',
                num:1
            }
        },

        components:{
            left,
            headers
        },
        methods:{
            getdata(){
                 this.axios.get('/admin/check/shoplist?status=3&page='+this.currentPage+'&search='+this.search).then(res=>{
                     this.table=res.data.data;
                     this.total=res.data.total;

                 })

            },
            searchdata(){
               this.currentPage=1;
               this.getdata();
            },
            handleDelete(row){
                let sid=row.sid;
                console.log(sid);
                this.axios.get('/admin/check/delete?sid='+sid).then(res=>{
                   if (res.data=='success') {
                     this.table=this.table.filter(ele=>ele.sid!=sid)
                   }
                })
            },
            handleCurrentChange(val) {
              this.currentPage=val
            }
        },
        //监听
        watch:{
          currentPage(val){
              this.getdata()
          }
        },
        mounted:function () {
           this.currentPage=1
        },

    }
</script>

<style scoped>

    /*.box{*/
        /*width: 1674px;*/
        /*height: 1080px;*/
        /*!*float: left;*!*/
    /*}*/

    .con .contend{
        width: 1000px;
        height: auto;
        position: absolute;
        top: 40px;
        left: 0;
    }
    .con .contend .liebiao{
        height: 80px;
        line-height: 80px;
        padding-left: 65px;
        box-sizing: border-box;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }
    .contend .search{
        width: 1000px;
        height: 42px;
        display: flex;
        flex-direction: row;
        margin-left: 35px;
    }
    .contend .search .el-form{
        display: flex;
        flex-direction: row;
    }
    .contend .search img{
        margin-left: 20px;
    }
    .contend table{
        margin-left: 80px;
        margin-top: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1000px;
    }
    .contend .fenge{
        width: 100%;
        height: 2px;
        background-color: #323f49;
        opacity: 0.05;
        margin-top: 39px;
    }
    .contend .zhuangtai{
        display: flex;
        flex-direction: row;
        margin-top: 70px;
        margin-left: 80px;
    }
    .contend .zhuangtai .updata{
        /*width: 75px;*/
        /*height: 18px;*/
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 1px;
        color: #566168;
        margin-left: 6px;
    }
    .contend .zhuangtai .enter{
        width: 132px;
        height: 39px;
        background-image: linear-gradient(90deg,
        #fd5e52 0%,
        #f95c2c 100%),
        linear-gradient(
                #fdcb52,
                #fdcb52);
        background-blend-mode: normal,
        normal;
        box-shadow: 0 4px 20px 0
        rgba(253, 99, 79, 0.75);
        border-radius: 19px;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        line-height: 39px;
        margin-left: 67px;
    }
    .contend .zhuangtai a{
        text-decoration: none;
    }
    .contend .page{
        margin-top: 205px;
        margin-left:650px;
    }
    .contend .dibu{
        margin:60px 0 0 240px;
    }
    .sousuo{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: url("../static/sousuo.png");
        background-size: 100% 100%;
        box-shadow: 0 3px 8px 0 rgba(59, 172, 254, 0.43);
        margin-left: 20px;
    }

    .con{
        width: 1000px;
        height: auto;
        position: absolute;
        top: 60px;
        left: 200px;
    }
    .hots{
        font-size: 18px;
        color: #516676;
        font-weight: bold;
        width: 200px;
        height: 42px;
        background-color: #ebf7ff;
        box-sizing: border-box;
        border-radius: 21px;
        border: solid 3px rgba(55, 169, 254, 0.17);
        opacity: 0.58;
    }
</style>