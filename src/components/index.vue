<template lang="pug">

  .box
    v-header
    ul
      li(v-for="(data , index) in IndexData" :key="index")
        router-link(:to="{ name: 'info', params: { action: data.action }}")
          p
            img( :src='data.img' )
          p {{data.title}}

</template>

<script>
  import Header from './header'

export default {
  mounted(){
    console.log(this.$configdata.INDEX_LIST)
  },
  data () {
    return {
      IndexData: this.$configdata.INDEX_LIST
    }
  },
  components:{
    'v-header':Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .box{
    width: 100%;
    height: 100%;
    ul{
      list-style: none;
      width: 100%;
      padding: 0;
      margin: 0;
      overflow: hidden;
      li{
        float: left;
        width: 50%;
        height:170px;
        padding: 0;
        position: relative;
        a{
          width: 100%;
          height: 100%;
          text-decoration: none;

          p{
            text-align: center;
            margin: 10px auto;
            color: #333;
            width: 100%;
            img{
              width: auto;
              height: auto;
              max-width: 50%;
              max-height: 50%;
              margin-top: 10%;
            }
          }
          p:last-child{
            position: absolute;
            bottom: 0;
          }
        }


      }
    }
  }
</style>
