<template lang="pug">
  p.top {{Data.title}}
    span.icon_left(@click="back") <
</template>

<script>
    export default {
        name: "top",
      mounted(){
        this.$util.Fors(this,this.$route.params.action,this.$configdata.INDEX_LIST)
        console.log(this.Data)
      },
      data(){
          return{
           Data:{}
          }
      },
      methods:{
        back() {
          this.$util.gos(this)
        }
      }
    }
</script>

<style scoped lang="less">
  .top{
    width: 100%;
    position: fixed;
    line-height: 58px;
    font-size: 24px;
    text-align: center;
    color: #333;
    border-bottom: 1px solid #eee;
    .icon_left{
      width: 50px;
      height: 50px;
      display: inline-block;
      font-size: 30px;
      line-height: 58px;
      position: absolute;
      top: 0;
      left: 0;
      font-family: 宋体;
    }
  }
</style>
