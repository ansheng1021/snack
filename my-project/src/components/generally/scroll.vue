<template>
    <div class="scroll" ref="Bscroll">
        <slot></slot>
        <loading v-if="flag"></loading>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import loading from './loading'
    export default {
        name: "scroll",
        data(){
         return{
             options: {
                 pullDownRefresh: {
                     threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                     stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                 },
                 pullUpLoad: {
                     threshold: -30 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
                 },
                 click: true,
                 probeType: 3,
                 startY: 0,
                 scrollbar: false
             },
             flag:false
         }
        },
        props:[
            'data'
        ],
        methods:{
            initBscroll(){
                this.scroll = new BScroll(this.$refs.Bscroll,this.options)
                this.scroll.on('pullingUp', () => {
                    this.flag=true
                    setTimeout(()=>{
                        this.flag=true
                        this.$emit('pullingUp');
                    },1500)

                })

            },
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll && this.scroll.refresh()
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.initBscroll()
            })
        },
        watch:{
            flag(){
                setTimeout(()=>{
                    this.finishPullUp();
                    this.refresh();
                    this.flag=false
                },1000)


            }
        },
        components:{
            loading,
        }
    }
</script>

<style scoped>

</style>