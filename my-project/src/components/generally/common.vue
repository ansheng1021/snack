<template>
  <div class="NAV">
    <ul class="headernav">
      <router-link :to="{name:'shopindex'}">
        <li :class="{active: index == 1}">首页</li></router-link>
      <router-link :to="{name:'commoditylist'}">
        <li :class="{active: index == 2}">商品管理</li>
      </router-link>
      <router-link to="">
        <li :class="{active: index == 3}">订单管理</li>
      </router-link>
      <router-link :to="{name:'shopinformation'}">
        <li :class="{active: index == 4}">店铺管理</li>
      </router-link>
      <router-link to="">
        <li :class="{active: index == 5}">账户管理</li>
      </router-link>
      <router-link to="">
        <li :class="{active: index == 6}">数据统计</li>
      </router-link>
      <router-link to=""><li><img src="../static/image/touxiang.jpg" alt="" style="width: 40px;height: 40px;border-radius: 50%">店家名称</li></router-link>
      <router-link to=""><li><i class="el-icon-refresh" style="margin-right: 10px"></i>清除缓存</li></router-link>
      <router-link to=""><li><i class="el-icon-error" style="margin-right: 10px"></i>退出管理</li></router-link>
    </ul>

  </div>

</template>

<script>
    export default {
        name: "common",
        props:['index']
    }
</script>

<style scoped>
  .router-link-active{
    font-size: 14px;
    color: #516676;
    text-decoration: none;
  }
  .NAV{
    width: 100%;
    min-height: 635px;
  }
   /******************************************************************/
  .headernav{
    width: calc(100% - 175px);
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 46px;
    box-sizing: border-box;
    background-color: #eaf6ff;
    position: absolute;
    left: 175px;
    top: 0;
  }
  a{
    width: calc(100% / 9);
    height: 100%;
    text-decoration: none;
  }
  .headernav li{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 47px;
    font-size: 14px;
    color: #516676;
  }
  .headernav .router-link-active li.active{
    color: #fff;
    background-color: #30a3fe;
  }
</style>

