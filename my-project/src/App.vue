<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.box section .bottom .el-input__inner{
  width: 408px;
  height: 42px;
  background-color: #ebf7ff;
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
}
.box section .bottom .el-textarea__inner{
  width: 876px;
  height: 240px;
  background-color: #ebf7ff;
  border-radius: 3px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
}
.box section .bottom  .el-button{
  width: 165px;
  height: 48px;
  background-color: #30a3fe;
  box-shadow: 0 4px 20px 0
  rgba(48, 163, 254, 0.75);
  border-radius: 24px;
}
.myfrom .el-input__inner{
  width: 423px;
  height: 48px;
  background-color: #ebf7ff;
  border-radius: 24px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  padding-left:60px;
  box-sizing: border-box;
  position: relative;
}
.myfrom input::-webkit-input-placeholder {
   color: #516676;
  font-size: 18px;
  }
.licenseInfo .el-input__inner{
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  background-color: #ebf7ff;
}
.contactInfo .el-input__inner{
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  background-color: #ebf7ff;
}
.licenseInfo .el-textarea__inner{
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  background-color: #ebf7ff;
}
.contactInfo .el-textarea__inner{
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  background-color: #ebf7ff;

}
.elBtn .el-button.el-button--primary{
  width: 165px;
  height: 48px;
  background-color: #30a3fe;
  box-shadow: 0 4px 20px 0
  rgba(48, 163, 254, 0.75);
  border-radius: 24px;
  font-size: 20px;
  text-align: center;
}
.steps2 .el-form-item__label{
  font-size: 18px;
  color: #516676;
  font-weight: normal;
  font-stretch: normal;
}
.steps2 .el-form-item__content{
  width: auto;
}
.box section .bottom .el-input__inner{
  width: 408px;
  height: 42px;
  background-color: #ebf7ff;
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
}
.box section .bottom .el-textarea__inner{
  width: 876px;
  height: 240px;
  background-color: #ebf7ff;
  border-radius: 3px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
}
.box section .bottom  .el-button{
  width: 165px;
  height: 48px;
  background-color: #30a3fe;
  box-shadow: 0 4px 20px 0
  rgba(48, 163, 254, 0.75);
  border-radius: 24px;
}
.myfrom .el-input__inner{
  width: 423px;
  height: 48px;
  background-color: #ebf7ff;
  border-radius: 24px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  padding-left:60px;
  box-sizing: border-box;
  position: relative;
}
.myfrom input::-webkit-input-placeholder {
  color: #516676;
  font-size: 18px;
}
.steps2 .license .el-textarea__inner {
  width: 600px;
  height: 180px;
  background-color: #ebf7ff;
  border-radius: 3px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
}
.steps2 .license .el-form-item:nth-child(3) .el-textarea__inner{
  width: 500px;
  height: 400px;
}








.contend .search .el-input .el-input__inner{
  font-size: 18px;
  color: #516676;
  font-weight: bold;
  width: 200px;
  height: 42px;
  background-color: #ebf7ff;
  border-radius: 21px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
}
.contend .search .el-form-item__label {
  font-size: 18px;
  letter-spacing: 0;
  color: #516676;
}
/*.contend .search .el-input.el-input--suffix{*/
/*width: 149px;*/
/*height: 42px;*/
/*background-color: #ebf7ff;*/
/*border-radius: 20px;*/
/*border: solid 3px rgba(55, 169, 254, 0.17);*/
/*opacity: 0.58;*/
/*}*/
.contend .search .el-select .el-input__inner{
  width: 149px;
  height: 42px;
  background-color: #ebf7ff;
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  color: #516676;
}
.contend .zhuangtai .el-input__inner{
  width: 149px;
  height: 42px;
  background-color: #ebf7ff;
  border-radius: 20px;
  border: solid 3px rgba(55, 169, 254, 0.17);
  opacity: 0.58;
  margin-left: 33px;
}

/*.con .title .myform .el-input__inner{*/
  /*font-size: 18px;*/
  /*color: #516676;*/
  /*font-weight: bold;*/
  /*width: 200px;*/
  /*height: 42px;*/
  /*background-color: #ebf7ff;*/
  /*border-radius: 21px;*/
  /*border: solid 3px rgba(55, 169, 254, 0.17);*/
  /*opacity: 0.58;*/

/*}*/


</style>
