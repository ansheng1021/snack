<template>
    <div>
        <indexheader title="搜索"></indexheader>
        <header class="tab">
            <form class="wsq-searchBox">
                <img src="./static/img/sousuoicon.png"/>
                <input type="text" placeholder="搜素您需要定位的城市">
            </form>
        </header>
        <div class="box"><div class="one"></div><span class="blue">最近&nbsp;</span><span>搜索</span></div>
        <ul>
            <li>水管</li>
            <li>龙头</li>
            <li>弹跳面板</li>
            <li>水管</li>
            <li>龙头</li>
            <li>弹跳面板</li>
            <li>水管</li>
            <li>龙头</li>
            <li>弹跳面板</li>
        </ul>
        <div class="box"><div class="one"></div><span class="blue">大家&nbsp;</span><span>都在搜</span></div>
        <ul >
            <li>水管</li>
            <li>龙头</li>
            <li>弹跳面板</li>
            <li>龙头</li>
            <li>水管</li>
            <li>龙头</li>
            <li>龙头</li>
        </ul>
    </div>
</template>

<script>
    import indexheader from '../../generally/indexheader'
    export default {
        name: "search",
        components:{
            indexheader
        }
    }
</script>

<style scoped>
    @import url('./static/css/sou.css');
</style>