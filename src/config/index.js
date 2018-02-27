export default {
  // face++ 相关的api配置
  FACE_API : {
    CONFIG: {
      APIKEY: 'F3Y6fFOhGyrb0y9RSs7cUPWGXu8fKV37',
      APISECRET: 'CWjS_O8vhe7E-BfLnHc85FJaByNPgiIc'
    },
    APIURL : {
      Retect: 'https://api-cn.faceplusplus.com/facepp/v3/detect',
      BankCard: 'https://api-cn.faceplusplus.com/cardpp/beta/ocrbankcard',
      Card: 'https://api-cn.faceplusplus.com/cardpp/v1/ocridcard',
      DriverLicense: 'https://api-cn.faceplusplus.com/cardpp/v1/ocrdriverlicense',
    }
  },

  INDEX_LIST : [
    {
      title: '人脸识别',
      img: './static/img/icon_1.png',
      action: 'face',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：提供您的照片进行人脸检测和人脸分析'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '4：文件：最大2 MB '
        }
      ]
    },
    {
      title: '银行卡识别',
      img: './static/img/icon_2.png',
      action: 'bank',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：检测和识别银行卡，并返回银行卡卡片边框坐标及识别出的银行卡号'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：最小 100*100 像素，最大 4096*4096 像素，短边不得低于 100 像素。'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    },
    {
      title: '身份证识别',
      img: './static/img/icon_3.png',
      action: 'idcard',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：识别中华人民共和国第二代身份证的关键字段内容'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    },
    {
      title: '驾照识别',
      img: './static/img/icon_4.png',
      action: 'drivinglicense',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：检测和识别中华人民共和国机动车驾驶证'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    }
  ]
}
