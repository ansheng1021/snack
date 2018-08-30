<template>
  <div class="box">
    <my-header index="4"></my-header>

    <div class="leftNav">
      <div class="logo">
        <div class="bg"></div>
        <div class="title">三千弱水后台管理系统</div>
      </div>

      <router-link :to="{name:'shopinformation'}">
        <div class="navSecond">
          <div class="dot"></div>
          <span>店铺信息</span>
        </div>
      </router-link>

    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
    import MyHeader from '../managecommodity/common';
    export default {
        name: "managestores",
        components:{
          MyHeader
        }
    }
</script>

<style scoped>
  .box{
    width: auto;
    height: 100%;
    position: relative;
  }
  .leftNav{
    width: 175px;
    height: 100%;
    background-color: #1f262c;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .leftNav .logo{
    width: 100%;
    height: 175px;
    padding: 20px 10px;
    box-sizing: border-box;
  }
  .leftNav .bg{
    width: 100%;
    height: 109px;
    background-image: url("../static/image/logo.png");
    background-size: 100% 100%;
  }
  .leftNav .title{
    color: #8a8e91;
    font-size: 14px;
    text-align: center;
  }

  .leftNav .navSecond span{
    font-size: 16px;
    color: #fff;
  }

  .navSecond{
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navSecond .dot{
    width: 10px;
    height: 5px;
    margin-right: 20px;
    border-radius: 2px;
    background-color: #44b5ff;
  }
  .router-link-active .navSecond{
    border-left: 6px solid #33d98e;
    box-sizing: border-box;
    background-color: #323f49;
  }
  .router-link-active .navSecond .dot{
    background-color: #33d98e;
  }
  .router-link-active .navSecond span{
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
  a .navSecond span{
    font-size: 16px;
    color: #323f49;
    text-decoration: none;
  }
  .box{
    position: relative;
    width: 100%;
  }
  .content{
    width: calc(100% - 175px);
    height: calc(100% - 47px);
    overflow: scroll;
    position: absolute;
    top: 47px;
    left: 175px;
    padding: 0 46px;
    box-sizing: border-box;
  }
  .content::-webkit-scrollbar{
    height: 0;
  }
  a{
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
</style>
