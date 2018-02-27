<template lang="pug">
  .info
    v-Top
    .content
      p
        img(:src='Data.img')
      p.zz 注意事项
      .text
        p(v-for='(int , index) in Data.becareful') {{int.becarefulTitlel}}
    p.bottom
      router-link(:to="{ name: 'DetailsPage', params: { action: Data.action }}") 立即识别
</template>

<script>
  import top from './top.vue'
    export default {
        name: "info",
      mounted(){
        this.$util.Fors(this,this.$route.params.action,this.$configdata.INDEX_LIST)
        console.log(this.Data)
      },
      data () {
        return {
          Data:{}
        }
      },
      methods: {

      },
      components:{
        'v-Top':top
      },
    }
</script>

<style scoped lang="less">
  .info{
    width: 100%;
    height: 100%;
    .content{
      width: 100%;
      height: 100%;
      .zz{
        background: #eee;
        line-height: 30px;
        color: #999;
        padding: 3px 10px;
      }
      .text{
        padding-bottom: 58px;
        p{
          padding: 10px ;
          line-height: 30px;
        }
      }
      p img{
        width: 40%;
        height: 40%;
        padding: 35% 30% 20%;

      }
    }
    .bottom{
      width: 100%;
      position: fixed;
      bottom: 0;
      background: #fff;
      line-height: 50px;
      padding-bottom: 3px;
      padding-top: 3px;
      text-align: center;
      a{
        background: #ff3e08;
        width: 90%;
        height: 50px;
        border-radius: 2px;
        border: 1px solid #ff4c20;
        display: inline-block;
        color: #fff;
        font-size: 20px;
      }
    }
  }

</style>
