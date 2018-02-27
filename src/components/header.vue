<template lang="pug">

  div
    a( href='#')
      p 人脸识别

</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped lang="less">
 div{
   width: 100%;
   height: 46%;
   a{
     display: block;
     width: 100%;
     height: 100%;
     background: url("../../static/img/146283883135624158.jpeg") no-repeat center 0;
     background-size: 136%;
     text-decoration: none;
     position: relative;
     p{
       font-family: 造字工房力黑（非商用）常规体;
       color: #fff;
       font-size: 50px;
       width: 100%;
       position: absolute;
       bottom: 0;
       margin: 10px 0;
       text-align: center;
     }
   }
 }
</style>
