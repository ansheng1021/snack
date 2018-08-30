<template>
    <section>
        <div class="top">
            <div class="title">入驻须知</div>
            <div class="fengexian"></div>
        </div>
        <div class="bottom">
            <div><img src="../static/next1.png" alt=""></div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 3) this.active = 0;
                this.$router.push({name:'admissionflow'+this.active})
            }
        }
    }
</script>

<style scoped>
    .box section .top{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 60px;
    }
    .box section .top .title{
        width: 100%;
        height: 46px;
        font-size: 46px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 2px;
        color: #30a3fe;
        text-align: center;
        margin-top: 60px;
    }
    .box section .top .fengexian{
        /*margin-left: 80px;*/
        width: 1200px;
        height: 2px;
        background-color: #323f49;
        opacity: 0.05;
        margin-top: 33px;
        margin-bottom: 29px;
    }
    .box section .bottom img{
        display: block;
        width: 100%;
        height: 100%;
        margin-left: 80px;
        margin-bottom: 176px;
    }
    .box section .bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1200px;
        height: 580px;
    }


</style>