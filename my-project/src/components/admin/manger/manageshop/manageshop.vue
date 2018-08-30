<template>
    <div>
        <headers index="3"></headers>
        <left></left>
        <div class="con">
        <span>商家列表</span>
            <div class="search">
                <!--<el-select v-model="value" placeholder="请选择">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                    <!--</el-option>-->
                <!--</el-select>-->
                <!--<el-select v-model="value" placeholder="请选择">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                    <!--</el-option>-->
                <!--</el-select>-->
                <!--<el-select v-model="value" placeholder="请选择">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                    <!--</el-option>-->
                <!--</el-select>-->
                <!--<el-select v-model="value" placeholder="请选择">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                    <!--</el-option>-->
                <!--</el-select>-->
            </div>
            <div class="table">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="sid"
                            label="ID"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="商家名称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地区"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="上次访问时间"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="400">
                        <template slot-scope="scope">
                            <router-link tag="el-button" class="el-button el-button--text el-button--small" :to="{name:'manageorder',query:{sid:scope.row.sid}}">订单管理</router-link>
                            <router-link tag="el-button" class="el-button el-button--text el-button--small" :to="{name:'shopinformation',query:{sid:scope.row.sid}}">商品管理</router-link>
                            <router-link tag="el-button" class="el-button el-button--text el-button--small" :to="{name:'manageclass',query:{sid:scope.row.sid}}">分类管理</router-link>
                            <router-link tag="el-button" class="el-button el-button--text el-button--small" :to="{name:'manageeval',query:{sid:scope.row.sid}}">评价管理</router-link>
                            <router-link tag="el-button" class="el-button el-button--text el-button--small" :to="{name:'manageyh',query:{sid:scope.row.sid}}">优惠劵管理</router-link>
                        </template>
                    </el-table-column>
                </el-table>

            </div>

        </div>
    </div>
</template>

<script>
    import left from './generl/slide'
    import headers from '../../../generally/header'
    export default {
        name: "manageshop",
        data() {
            return {
                tableData: []
            }
        },
        methods:{
          getdata(){
              this.axios.get('/admin/store/getdata').then(res=>{
                  this.tableData=res.data
              })
          }
        },
        mounted(){
          this.getdata()
        },
        components:{
            left,
            headers
        }
    }
</script>

<style scoped>
.con{
    position: absolute;
    left: 200px;
    top: 80px;
    padding: 20px 0 0 40px;
    box-sizing: border-box;
}
    .con span{
        width: 74px;
        height: 18px;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #516676;
    }
    .search{
        width: 1000px;
        height: 80px;
        display: flex;
        align-items: center;
    }
</style>