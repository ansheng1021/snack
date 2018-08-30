<template>
    <header>
        <div class="title">
             <i class="iconfont icon-fanhui" @click="back"></i>
            <span>{{title}}</span>
            <a href="">
                <i class="iconfont icon-gengduo" v-if="isshow"></i>
            </a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "indexheader",
        props:{
            title:{

            },
            isshow:{
                default:false
            }
        },
        methods:{
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    @import url("./css/header.css");
    @import url("http://at.alicdn.com/t/font_724075_z7r2cip1m5g.css");
</style>