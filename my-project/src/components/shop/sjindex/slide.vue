<template>
    <div class="left">
        <ul class="bottom">
            <li>水</li>
            <li>龙</li>
            <li>吟</li>
            <li>商</li>
            <li>家</li>
            <li>管</li>
            <li>理</li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "left",
        data(){
            return{
                flag:true,
            }
        },
        methods: {}
    }
</script>

<style scoped>
  .bottom{
      width: 200px;
      height: 1000px;
      background-color: #1f262c;
      display: flex;
      flex-direction: column;
      font-size: 30px;
      color: white;
      align-items: center;
  }

</style>