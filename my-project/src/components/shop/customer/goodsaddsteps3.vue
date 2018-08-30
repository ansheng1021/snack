<template>
    <div>
        <div class="title">
            <div class="infos">您当前选择的类别是:</div>
            <div class="bot"></div>
            <div class="infos" style="color: #30d366;">洗衣</div>
            <div class="bot"></div>
            <div class="infos" style="color: #30d366;">羽绒服</div>
        </div>
        <div class="association">
            <el-transfer
                    v-model="value5"
                    :props="{key: 'value',label: 'desc'}"
                    :data="data3">
            </el-transfer>
        </div>
    </div>
</template>
<script>
    export default {
        name: "goodsadd",
        data(){
            const generateData3 = _ => {
                const data = [];
                for (let i = 1; i <= 4; i++) {
                    data.push({
                        value: i,
                        desc: `洗衣 ${ i }`,
                    });
                }
                return data;
            };
            return {
                data3: generateData3(),
                value5: []
            };
        },
    }
</script>

<style scoped>
    .title{
        display: flex;
        height: 60px;
        width:320px;
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
    .transfer-footer {
        margin-left: 20px;
        padding: 6px 5px;
    }

</style>