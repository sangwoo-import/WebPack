//import 
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


//export
module.exports = {
  // parcel main.js
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry:'./js/main.js',

  // 결과물(번들)을 변환하는 과정
  output:{
  //resolve란 메소드는 첫번재 매개변수와 두번째매개변수를 합쳐줌
    // path: path.resolve(__dirname,'dist'),
    // filename:'main.js',
    //기존에있던 파일 삭제 및 지움 
    clean: true
  },

  module : {
    rules:[
      {
        test:/\.s?css$/,//  정규 표현식 
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use : [
            'babel-loader'
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({ //static 파일 dist에 복사기능 
      patterns:[
        { from:'static'}
      ]
    })
  ],
  devServer: {
    host:'localhost'
  }
}