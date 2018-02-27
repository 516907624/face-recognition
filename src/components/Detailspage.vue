<template lang="pug">
    .box
      .top
        v-Top
      .myimg
        img(:src="imgurls")
      .center(v-if="action == 'face' ")
        p 年龄：{{face.age}}
        p 颜值：{{face.beauty}}
        p 性别：{{face.gender}}
        p 微笑程度：{{face.smile}}
      .center(v-else-if="action == 'bank' ")
        p 银行卡号：{{banknumber}}
      .center(v-else-if="action == 'idcard' ")
        p 姓名：{{idcard.name}}
        p 性别：{{idcard.gender}}
        p 民族：{{idcard.race}}
        p 出生日期：{{idcard.birthday}}
        p 家庭住址：{{idcard.address}}
        p 身份证号码：{{idcard.id_card_number}}
      .center(v-else="action == 'drivinglicense' ")
        p 姓名：{{drivinglicense.name}}
        p 性别：{{drivinglicense.gender}}
        p 国家：{{drivinglicense.nationality}}
        p 出生日期：{{drivinglicense.birthday}}
        p 家庭住址：{{drivinglicense.address}}
        p 签发机关：{{drivinglicense.issued_by}}
        p 签发日期：{{drivinglicense.issue_date}}
        p 驾照级别：{{drivinglicense.class}}
        p 驾照号码：{{drivinglicense.license_number}}
        p 驾照有效期：{{drivinglicense.valid_date}}
      .bottom
        input(type="text" v-model="imgurl")
        input(type="button" value="立即识别"  @click="Display()"  :style="{'background-color':color}").button


</template>

<script>
  import top from './top.vue'
    export default {
        name: "detailspage",
        mounted(){
        },
      components:{
        'v-Top':top
      },
      data(){
          return{
            imgurl:'',
            imgurls:'http://pic31.photophoto.cn/20140504/0008020273077398_b.jpg',
            action:this.$route.params.action ,
            DetailspageData:{},
            face:{
              age:null,
              beauty:null,
              gender:'',
              smile:'',
            },
            banknumber:null,
            idcard:{
              name:'',gender:'',race:'',birthday:'',address:'',id_card_number:null,
            },
            drivinglicense:{
              name:'',gender:'',nationality:'',address:'',birthday:'',class:'',issue_date:'',license_number:null,valid_date:'',issued_by:''
            },
            color:'#00e5ff'
          }
      },
      methods:{
          GetData( Apiurl,imgurl){
            this.$http.post(Apiurl,
              {
                api_key:this.$configdata.FACE_API.CONFIG.APIKEY,
                api_secret:this.$configdata.FACE_API.CONFIG.APISECRET,
                image_url:imgurl,
                return_attributes: 'gender,age,smiling,glass,emotion,ethnicity,beauty,mouthstatus,skinstatus'
              })
              .then(success=>{
                this.DetailspageData=success
                console.log(this.DetailspageData)
                switch (this.action){
                  case 'face':
                    this.face.age=this.DetailspageData.data.faces[0].attributes.age.value
                    this.face.beauty=(this.DetailspageData.data.faces[0].attributes.beauty.female_score+this.DetailspageData.data.faces[0].attributes.beauty.male_score)/2
                    this.face.gender=(this.DetailspageData.data.faces[0].attributes.gender.value=="Male")?"男":"女"
                    this.face.smile=`${this.DetailspageData.data.faces[0].attributes.smile.value}(超过${this.DetailspageData.data.faces[0].attributes.smile.threshold}表示有笑容)`
                    break;
                  case 'bank':
                    this.banknumber=this.DetailspageData.data.bank_cards[0].number
                    //http://epaper.qingdaonews.com/qdwb/20160630/m_569288.jpg
                    break;
                  case 'idcard':
                    //http://img3.fengniao.com/forum/secpics/151/40/6007947.jpg
                    this.idcard.name=this.DetailspageData.data.cards[0].name
                    this.idcard.gender=this.DetailspageData.data.cards[0].gender
                    this.idcard.race=this.DetailspageData.data.cards[0].race
                    this.idcard.birthday=this.DetailspageData.data.cards[0].birthday
                    this.idcard.address=this.DetailspageData.data.cards[0].address
                    this.idcard.id_card_number=this.DetailspageData.data.cards[0].id_card_number
                    break;
                  case 'drivinglicense':
                    //http://s10.sinaimg.cn/large/004iWrFWty6WfLd6LEdf9&690
                    this.drivinglicense.name=this.DetailspageData.data.cards[0].name
                    this.drivinglicense.gender=this.DetailspageData.data.cards[0].gender
                    this.drivinglicense.nationality=this.DetailspageData.data.cards[0].nationality
                    this.drivinglicense.address=this.DetailspageData.data.cards[0].address
                    this.drivinglicense.birthday=this.DetailspageData.data.cards[0].birthday
                    this.drivinglicense.class=this.DetailspageData.data.cards[0].class
                    this.drivinglicense.issue_date=this.DetailspageData.data.cards[0].issue_date
                    this.drivinglicense.license_number=this.DetailspageData.data.cards[0].license_number
                    this.drivinglicense.valid_date=this.DetailspageData.data.cards[0].valid_date
                    this.drivinglicense.issued_by=this.DetailspageData.data.cards[0].issued_by
                    break;
                }
              })
              .catch(error=>{
                alert('qqq')
              })

          },
        Display(){
            if ( this.imgurl == '' ){
              alert('请输入图片地址')
            }else{
              this.color='#2a2dff'
              this.imgurls=this.imgurl
              switch (this.action){
                case 'face':
                  this.GetData(this.$configdata.FACE_API.APIURL.Retect,this.imgurl
                  )
                  //http://photocdn.sohu.com/20160714/Img459211363.jpg
                  console.log('人脸识别')
                  break;
                case 'bank':
                  console.log('银行卡识别')
                  //http://epaper.qingdaonews.com/qdwb/20160630/m_569288.jpg
                  this.GetData(this.$configdata.FACE_API.APIURL.BankCard,this.imgurl)
                  break;
                case 'idcard':
                  console.log('身份证识别')
                  //http://img3.fengniao.com/forum/secpics/151/40/6007947.jpg
                  this.GetData(this.$configdata.FACE_API.APIURL.Card,this.imgurl)
                  break;
                case 'drivinglicense':
                  console.log('驾照识别')
                  //http://s10.sinaimg.cn/large/004iWrFWty6WfLd6LEdf9&690
                  this.GetData(this.$configdata.FACE_API.APIURL.DriverLicense,this.imgurl)
                  break;
              }
            }
        }
      }
    }
</script>
<style scoped lang="less">
  .box{
    width: 100%;
    height: 100%;
    .top{
      position: relative;
    }
    .bottom{
      width: 100%;
      position: fixed;
      background-color: #fff;
      border-top: 1px solid #eee;
      bottom: 0;
      input{
        width: 80%;
        padding: 2%;
        padding-left: 4%;
        margin: 10px auto;
        border: 2px solid #eee;
        outline: none;
        display: block;
      };
      .button{
        width: 300px;
        height: 50px;
        padding: 5px 0;
        color: #fff;
        font-size: 20px;
      }
    }
    .myimg{
      width: 80%;
      height: 200px;
      border: 2px solid #eee;
      padding: 10px;
      margin: 20px auto;
      text-align: center;
      line-height: 200px;
      img{
        max-height: 100%;
        max-width:100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .center{
      width: 80%;
      min-height: 30%;
      padding: 10px 10px 120px 10px;
      margin: 0 auto;
    }
  }

</style>
